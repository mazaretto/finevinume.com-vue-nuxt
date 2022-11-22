<template>
  <div class="v-products-catalog-filter">
    <div class="v-products-catalog-filter__desktop">
      <div class="v-products-catalog-filter__panel">
        <span class="v-products-catalog-filter__title">Filter</span>
        <div class="v-products-catalog-filter__tags">
          <transition-group
            class="v-products-catalog-filter__tags-list"
            :style="{ height: containerHeight + 'px' }"
            name="tag"
            tag="div"
          >
            <v-products-catalog-filter-tag
              v-for="tag of tags"
              :key="tag.entry ? tag.entry[1] : 'Delete'"
              :value="tag.entry ? tag.entry[1] : 'Delete'"
              :deleting="tag.deleting"
              @remove="remove(tag.entry[1], checked, tag.entry, entries)"
              @remove-all="removeAll(entries, checked)"
            />
          </transition-group>
        </div>
      </div>
      <div class="v-products-catalog-filter__selects">
        <v-catalog-filter-select
          v-for="(select, id) of selects"
          :key="id"
          v-model="checked"
          :title="select.title"
          :property="select.property"
          :items="products"
          :search="select.search"
          @add-remove-entry="addRemoveEntry($event, entries)"
        />
      </div>
    </div>

    <v-products-catalog-tablet-dropdown
      v-if="laptop"
      title="Filter:"
      @enter="enter"
      @close="close"
    >
      <template #tags>
        <transition-group
          class="v-products-catalog-filter__tags-list"
          :style="{ height: containerHeight + 'px' }"
          name="tag"
          tag="div"
        >
          <v-products-catalog-filter-tag
            v-for="tag of tagsDuplicate"
            :key="tag.entry ? tag.entry[1] : 'Delete'"
            :value="tag.entry ? tag.entry[1] : 'Delete'"
            :deleting="tag.deleting"
            @remove="
              remove(
                tag.entry[1],
                checkedDuplicate,
                tag.entry,
                entriesDuplicate
              )
            "
            @remove-all="removeAll(entriesDuplicate, checkedDuplicate)"
          />
        </transition-group>
      </template>
      <v-catalog-filter-select
        v-for="(select, id) of selects"
        :key="id"
        v-model="checkedDuplicate"
        :title="select.title"
        :property="select.property"
        :items="products"
        :search="select.search"
        @add-remove-entry="addRemoveEntry($event, entriesDuplicate)"
      />
    </v-products-catalog-tablet-dropdown>

    <the-mobile-modal :active="mobileModal === 'products-catalog-filter'">
      <span class="the-mobile-modal__title">Filters:</span>
      <div class="v-products-catalog-filter__selects">
        <v-catalog-filter-select
          v-for="(select, id) of selects"
          :key="id"
          v-model="checkedDuplicate"
          :title="select.title"
          :property="select.property"
          :items="products"
          :search="select.search"
          @add-remove-entry="addRemoveEntry($event, entriesDuplicate)"
        />
      </div>
      <div
        class="buttons-container buttons-container--column buttons-container--top-auto"
      >
        <v-button class="v-button--round" default @click.native="enter">
          Enter
        </v-button>
        <span class="link link--center the-mobile-modal__link" @click="close">
          Close
        </span>
      </div>
    </the-mobile-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    products: {
      type: Array,
      required: true
    },
    laptop: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  data () {
    return {
      checked: [],
      checkedDuplicate: [],
      tags: [],
      tagsDuplicate: [],
      entries: [],
      entriesDuplicate: [],
      selects: [
        {
          title: 'Country',
          property: 'country',
          search: true
        },
        {
          title: 'Region',
          property: 'region',
          search: true
        },
        {
          title: 'Subregion',
          property: 'subregion',
          search: true
        }
      ]
    }
  },
  watch: {
    entries (entries) {
      if (entries.length !== 0) {
        const filteredProducts = this.products.filter((product) => {
          let result

          for (const [property, value] of entries) {
            if (product[property] === value) {
              result = true
              break
            } else {
              result = false
            }
          }

          return result
        })

        this.$emit('recieve-products', filteredProducts)
      } else {
        this.$emit('recieve-products', this.products)
      }

      this.tags = this.recieveTags(entries)
    },
    entriesDuplicate (entries) {
      this.tagsDuplicate = this.recieveTags(entries)
    }
  },
  methods: {
    remove (value, values, entry, entries) {
      values.splice(values.indexOf(value), 1)

      this.addRemoveEntry(entry, entries)
    },
    removeAll (entries, checked) {
      entries.splice(0, entries.length)
      checked.splice(0, checked.length)
    },
    addRemoveEntry (newEntry, entries) {
      const checkDuplicateEntry = (entry) => {
        const [entryProp, entryValue] = entry
        const [newEntryProp, newEntryValue] = newEntry

        return newEntryProp === entryProp && entryValue === newEntryValue
      }

      const duplicate = entries.find(checkDuplicateEntry)

      if (duplicate) {
        const duplicateIndex = entries.findIndex(checkDuplicateEntry)

        entries.splice(duplicateIndex, 1)
      } else {
        entries.push(newEntry)
      }
    },
    recieveTags (array) {
      const entries = array.slice(0, array.length).reverse()

      const tags = entries.map((entry) => {
        return { entry, deleting: false }
      })

      if (array.length >= 2) {
        tags.push({ deleting: true })
      }

      return tags
    },
    enter () {
      this.checked = [...this.checkedDuplicate]
      this.entries = [...this.entriesDuplicate]
      this.tags = [...this.tagsDuplicate]

      this.$emit('close')
    },
    close () {
      this.checkedDuplicate = [...this.checked]
      this.entriesDuplicate = [...this.entries]
      this.tagsDuplicate = [...this.tags]

      this.$emit('close')
    }
  },
  computed: {
    containerHeight () {
      if (this.entries.length >= 2) {
        return 24 * this.entries.length + 29
      } else {
        return 24 * this.entries.length
      }
    },
    ...mapGetters({
      mobileModal: 'mobile-modal/modal'
    })
  }
}
</script>

<style lang="scss">
.v-products-catalog-filter {
  width: calc(100% - 20px);
  grid-row: span 2;

  @media screen and (max-width: 1024px) {
    display: contents;
  }
}

.v-products-catalog-filter__desktop {
  display: contents;

  @media screen and (max-width: 1024px) {
    display: none;
  }
}

.v-products-catalog-filter__panel {
  display: contents;

  // @media screen and (max-width: 1024px) {
  //   display: flex;
  //   flex-wrap: wrap;
  // }
}

.v-products-catalog-filter__title {
  @media screen and (max-width: 1024px) {
    font-weight: 600;
    margin-right: 20px;

    &:after {
      content: ':';
    }
  }
}

.v-products-catalog-filter__tags {
  border-top: 1px solid $gray6;
  box-sizing: content-box;
  padding-top: 15px;
  margin-top: 25px;

  @media screen and (max-width: 1024px) {
    display: contents;
  }
}

.v-products-catalog-filter__tags-list {
  transition-property: height;
  transition-duration: 0.4s;

  @media screen and (max-width: 1024px) {
    display: contents;
  }
}

.v-products-catalog-filter__selects {
  margin-top: 5px;

  @media screen and (max-width: 1024px) {
    display: grid;
    grid-gap: 10px;
    margin-top: 20px;
  }

  @media screen and (max-width: 600px) {
    display: block;
    margin-bottom: 35px;
    margin-top: 0;
  }
}

.v-products-catalog-filter__buttons {
  display: none;

  @media screen and (max-width: 1024px) {
    display: grid;
    margin-top: 40px;
  }
}

.v-products-catalog-filter__button {
  height: 45px !important;
}

.tag-leave-active,
.tag-enter-active {
  transition-property: opacity, transform, margin-top;
  transition-duration: 0.4s;
}

.tag-leave-active {
  position: absolute;
}

.tag-move {
  transition-property: transform;
  transition-duration: 0.4s;
}

.tag-leave-to,
.tag-enter {
  opacity: 0;
  margin-top: 0;
  transform: translateX(-20px);
}
</style>
