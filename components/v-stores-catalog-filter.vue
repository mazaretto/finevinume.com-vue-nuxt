<template>
  <div class="v-stores-catalog-filter">
    <form
      v-if="!selects.length"
      class="v-stores-catalog-filter__search"
      @submit.prevent="searchItems(searched)"
    >
      <input
        v-model="searched"
        class="input v-stores-catalog-filter__search-input"
        type="search"
      >
      <v-button
        class="v-stores-catalog-filter__search-submit v-button--uppercase"
        default
        type="submit"
      >
        Enter
      </v-button>
    </form>

    <div v-else class="v-stores-catalog-filter__selects">
      <v-select
        v-for="(select, id) of selects"
        :key="id"
        v-slot="{ options }"
        :deep="id"
        :placeholder="select.placeholder"
        :checked="checked"
        :country="country"
        :region="region"
        :items="items"
        :subregion="subregion"
        :search-options="getOptionsWithProperty(select.property)"
      >
        <div class="v-select__inner-list">
          <v-select-checkbox-option
            v-for="(option, id) of options"
            :key="id"
            v-model="checked"
            :value="option.value"
            :count="option.count"
            @change="addRemoveEntry([select.property, option.value], entries)"
          />
        </div>
      </v-select>
      <input
        type="search"
        class="input input--search"
        placeholder="Search"
        :value="searched"
        @input="searchItems($event.target.value)"
      >
    </div>

    <div
      class="buttons-container v-stores-catalog-filter__buttons"
      :class="{ 'buttons-container--column': !selects.length }"
    >
      <v-button
        v-if="selects.length"
        default
        @click.native="CHANGE_MOBILE_MODAL('stores-catalog-filter')"
      >
        Filter
      </v-button>
      <v-button
        default-secondary
        @click.native="CHANGE_MOBILE_MODAL('stores-catalog-view')"
      >
        Select
      </v-button>
    </div>

    <div class="v-stores-catalog-filter__letters">
      <div class="v-stores-catalog-filter__letters-main">
        <span
          v-for="letter in letters"
          :key="letter"
          class="v-stores-catalog-filter__letter"
          :class="{
            'v-stores-catalog-filter__letter--checked': letter === checkedLetter
          }"
          @click="setLetter(letter)"
        >
          {{ letter }}
        </span>
      </div>
      <span class="v-stores-catalog-filter__alphabet-mode">AZ</span>
    </div>

    <the-mobile-modal :active="mobileModal === 'stores-catalog-filter'">
      <span class="the-mobile-modal__title">Filters:</span>
      <div class="the-mobile-modal__search">
        <svg-binoculars class="the-mobile-modal__search-binoculars" />
        <input
          v-model="searched"
          class="the-mobile-modal__search-input"
          placeholder="Search"
          type="search"
        >
      </div>
      <div class="v-stores-catalog-filter__mobile-selects">
        <v-catalog-filter-select
          v-for="(select, id) of selects"
          :key="id"
          v-model="checkedMobile"
          :title="select.placeholder"
          :property="select.property"
          :items="items"
          search
          @add-remove-entry="addRemoveEntry($event, entriesMobile)"
        />
      </div>
      <div
        class="buttons-container buttons-container--column buttons-container--top-auto"
      >
        <v-button
          class="v-button--round"
          default
          @click.native="submitRestoreSettings(true)"
        >
          Enter
        </v-button>
        <span
          class="link link--center the-mobile-modal__link"
          @click="submitRestoreSettings(false)"
        >
          Close
        </span>
      </div>
    </the-mobile-modal>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

import SvgBinoculars from '~/assets/icons/binoculars.svg?inline'

export default {
  props: {
    items: {
      type: Array,
      required: false
    },
    selects: {
      type: Array,
      required: false
    },
    checkedLetter: {
      type: [String, Boolean],
      required: true,
      defalt: false
    }
  },
  data () {
    return {
      filteredItems: this.items,
      checked: [],
      country: this.getLocalItems('country'),
      region: this.getLocalItems('region'),
      subregion: this.getLocalItems('subregion'),
      checkedMobile: [],
      entries: [],
      entriesMobile: [],
      searched: '',
      letters: [
        'a',
        'b',
        'c',
        'd',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z'
      ]
    }
  },
  methods: {
    getLocalItems (state) {
      let res = []
      for (let i = 0; i < this.items.length; i++) {
        res.push(
          state === 'country'
            ? this.items[i].country
            : state === 'region'
              ? this.items[i].region
              : this.items[i].subregion
        )
      }
      return res
    },
    setLetter (letter) {
      const value = this.checkedLetter !== letter ? letter : false

      this.$emit('set-letter', value)
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
    getOptionsWithProperty (property) {
      const optionsSet = new Set()
      const options = []

      for (const item of this.items) {
        optionsSet.add(item[property])
      }

      for (const value of optionsSet) {
        const properties = this.items.filter((product) => {
          return product[property] === value
        })

        options.push({
          count: properties.length,
          value
        })
      }

      return options
    },
    searchItems (value) {
      if (value) {
        const items = this.filteredItems.filter((item) => {
          return item.name.toLowerCase().includes(value.toLowerCase())
        })

        this.$emit('recieve-items', items)
        this.$emit('recieve-searched', value)
      } else {
        this.$emit('recieve-items', this.filteredItems)
      }
    },
    submitRestoreSettings (submit) {
      if (submit) {
        this.entries = [...this.entriesMobile]
        this.checked = [...this.checkedMobile]

        this.searchItems(this.searched)
      } else {
        this.entriesMobile = [...this.entries]
        this.checkedMobile = [...this.checked]
      }

      this.CHANGE_MOBILE_MODAL('stores-catalog-filter')
    },
    ...mapMutations({
      CHANGE_MOBILE_MODAL: 'mobile-modal/CHANGE_MOBILE_MODAL'
    })
  },
  watch: {
    items () {
      this.filteredItems = this.items
    },
    entries (entries) {
      if (entries.length === 0) {
        this.filteredItems = this.items
      }

      let filteredEntries = []

      let subRegions = []
      let regions = []

      if (this.subregion.length > 0) {
        for (let i = 0; i < entries.length; i++) {
          if (entries[i][0] === 'subregion') {
            subRegions.push(entries[i])
          }
          if (entries[i][0] === 'region') {
            regions.push(entries[i])
          }
        }

        filteredEntries =
          subRegions.length !== 0
            ? subRegions
            : regions.length !== 0
              ? regions
              : entries
      } else {
        filteredEntries = entries
      }

      const filteredItems = this.items.filter((product) => {
        let result
        for (const [property, value] of filteredEntries) {
          if (product[property] === value) {
            result = true
            break
          }
          result = false
        }

        return result
      })

      this.filteredItems = filteredItems
    },
    filteredItems (filteredItems) {
      this.$emit('recieve-items', filteredItems)
    }
  },
  computed: {
    ...mapGetters({
      mobileModal: 'mobile-modal/modal'
    })
  },
  components: {
    SvgBinoculars
  }
}
</script>

<style lang="scss">
.v-stores-catalog-filter {
  font-family: $Open-Sans;
  margin-top: 15px;
}

.v-stores-catalog-filter__search {
  position: relative;

  @media screen and (max-width: 767px) {
    display: none;
  }
}

.v-stores-catalog-filter__search-input {
  padding-right: 150px;
}

.v-stores-catalog-filter__search-submit {
  position: absolute;
  width: 130px;
  height: 100% !important;
  font-size: 14px;
  font-weight: 400 !important;
  right: 0;
  top: 0;
}

.v-stores-catalog-filter__selects {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  @media screen and (max-width: 1024px) {
    grid-gap: 15px;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
}

.v-stores-catalog-filter__buttons {
  display: none;

  @media screen and (max-width: 767px) {
    display: grid;
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: auto;
  }
}

.v-stores-catalog-filter__letters {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid $gray6;
  text-transform: uppercase;
  font-size: 24px;
  line-height: 36px;
  font-weight: 300;
  padding-bottom: 40px;
  margin-top: 40px;

  @media screen and (max-width: 1024px) {
    border-bottom: 0;
    font-size: 14px;
    line-height: 24px;
    padding-bottom: 0;
    margin-top: 25px;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
}

.v-stores-catalog-filter__letter,
.v-stores-catalog-filter__alphabet-mode {
  cursor: pointer;

  // &:hover {
  //   font-weight: 600;
  // }
}

.v-stores-catalog-filter__letter--checked,
.v-stores-catalog-filter__alphabet-mode--checked {
  color: $primary-color;
  // font-weight: 600;
}

.v-stores-catalog-filter__letters-main {
  display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  flex: 1;
}

.v-stores-catalog-filter__alphabet-mode {
  margin-left: 25px;

  @media screen and (max-width: 1024px) {
    display: none;
  }
}

.v-stores-catalog-filter__mobile-selects {
  margin-top: 30px;
  margin-bottom: 35px;
}
</style>
