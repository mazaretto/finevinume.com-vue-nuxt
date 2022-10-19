<template>
  <div class="v-products-catalog-sorter">
    <div class="v-products-catalog-sorter__desktop">
      <div class="v-products-catalog-sorter__sort-buttons">
        <v-catalog-sort-button
          v-for="(property, id) of properties"
          :key="id"
          :property="property"
          :active="checkedProperty === property"
          @click="checkedProperty = checkedProperty !== property ? property : false"
        />
      </div>
    </div>

    <v-products-catalog-tablet-dropdown
      v-if="laptop"
      title="Select"
      @enter="enter"
      @close="close"
    >
      <v-catalog-sort-button
        v-for="(property, id) of properties"
        :key="id"
        :property="property"
        :active="checkedPropertyMobile === property"
        @click="checkedPropertyMobile = checkedPropertyMobile !== property ? property : false"
      />
    </v-products-catalog-tablet-dropdown>

    <the-mobile-modal :active="mobileModal === 'products-catalog-sorter'">
      <span class="the-mobile-modal__title">Select</span>
      <div class="v-products-catalog-sorter__mobile-sorter">
        <v-catalog-sort-button
          v-for="(property, id) of properties"
          :key="id"
          :property="property"
          :active="checkedPropertyMobile === property"
          @click="checkedPropertyMobile = checkedPropertyMobile !== property ? property : false"
        />
      </div>
      <div class="buttons-container buttons-container--column buttons-container--top-auto">
        <v-button
          class="v-button--round"
          default
          @click.native="enter"
        >
          Enter
        </v-button>
        <span
          class="link link--center the-mobile-modal__link"
          @click="close"
        >
          Close
        </span>
      </div>
    </the-mobile-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    items: {
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
      checkedProperty: false,
      checkedPropertyMobile: false,
      properties: ['name', 'vintage']
    }
  },
  watch: {
    checkedProperty () {
      this.$emit('recieve-items', this.sortItems(this.items))
    },
    items (arr) {
      this.$emit('recieve-items', this.sortItems(this.items))
    }
  },
  computed: {
    ...mapGetters({
      mobileModal: 'mobile-modal/modal'
    })
  },
  methods: {
    sortItems (items) {
      const prop = this.checkedProperty

      if (prop) {
        return [...items].sort((a, b) => {
          if (!parseInt(a[prop]) && typeof a[prop] === 'string') {
            if (a[prop] < b[prop]) {
              return -1
            } else if (a[prop] > b[prop]) {
              return 1
            } else {
              return 0
            }
          } else {
            return parseInt(b[prop]) - parseInt(a[prop])
          }
        })
      }

      return items
    },
    enter () {
      this.checkedProperty = this.checkedPropertyMobile

      this.$emit('close')
    },
    close () {
      this.checkedPropertyMobile = this.checkedProperty

      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">
.v-products-catalog-sorter {
  @media screen and (max-width: 1024px) {
    display: contents;
  }
}

.v-products-catalog-sorter__desktop {
  display: contents;

  @media screen and (max-width: 1024px) {
    display: none;
  }
}

.v-products-catalog-sorter__sort-buttons {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 30px;
  text-transform: capitalize;

  @media screen and (max-width: 1024px) {
    grid-auto-flow: row;
    grid-gap: 10px;
    margin-top: 20px;
  }
}

.v-products-catalog-sorter__buttons {
  display: none;

  @media screen and (max-width: 1024px) {
    display: grid;
    margin-top: 40px;
  }
}

// .v-products-catalog-sorter__mobile-sorter {
//
// }
</style>
