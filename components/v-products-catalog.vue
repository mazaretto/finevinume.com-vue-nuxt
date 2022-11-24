<template>
  <div class="v-products-catalog">
    <div class="v-products-catalog__top">
      <v-products-catalog-filter
        :products="products"
        :laptop="laptopActive === 'filter'"
        @recieve-products="receiveProducts"
        @close="toggleMenu('filter')"
      />
      <div class="v-products-catalog__head">
        <div class="buttons-container v-products-catalog__buttons-container">
          <v-button
            class="v-products-catalog__head-button"
            default
            @click.native="toggleMenu('filter')"
          >
            Filter
          </v-button>
          <v-button
            class="v-products-catalog__head-button"
            default-secondary
            @click.native="toggleMenu('sorter')"
          >
            Select
          </v-button>
        </div>
        <v-products-catalog-sorter
          :items="filteredProducts"
          :laptop="laptopActive === 'sorter'"
          @recieve-items="visibleProducts = $event"
          @close="toggleMenu('sorter')"
        />
        <v-products-catalog-modes :grid="grid" @toggle-mode="grid = $event" />
      </div>
      <v-products-catalog-view :products="visibleProducts" :grid="grid" />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    products: {
      type: Array,
      required: true
    },
    search: {
      type: String,
      required: false
    }
  },
  data () {
    return {
      filteredProducts: this.products,
      visibleProducts: this.products,
      laptopActive: false,
      grid: true
    }
  },
  watch: {
    search (newVal) {
      if (newVal === undefined || newVal === '') {
        this.visibleProducts = this.products
        return false
      }
      let res = []
      for (let i = 0; i < this.products.length; i++) {
        if (!this.products[i].name.includes(newVal)) {
          continue
        }
        res.push(this.products[i])
      }
      this.visibleProducts = res
      return true
    }
  },
  methods: {
    receiveProducts (value) {
      this.filteredProducts = value
      this.$emit('callbackCount', value.length)
    },
    toggleMenu (item) {
      if (document.documentElement.clientWidth <= 600) {
        this.CHANGE_MOBILE_MODAL(`products-catalog-${item}`)
      } else {
        this.laptopActive = this.laptopActive === item ? false : item
      }
    },
    ...mapMutations({
      CHANGE_MOBILE_MODAL: 'mobile-modal/CHANGE_MOBILE_MODAL'
    })
  }
}
</script>

<style lang="scss">
.v-products-catalog {
  display: grid;
  grid-template-rows: 24px max-content;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 25px 20px;

  @media screen and (max-width: 1024px) {
    position: relative;
    grid-template-rows: auto;
    grid-template-columns: auto;
    grid-gap: 30px 0;
  }
}

.v-products-catalog__head {
  grid-column: span 4;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.v-products-catalog__buttons-container {
  display: none;
  grid-gap: 15px;

  @media screen and (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: calc(600 / 720 * 100%);
    max-width: 600px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
  }

  @media screen and (max-width: 320px) {
    grid-template-columns: 1fr;
    grid-auto-flow: row;
  }
}

.v-products-catalog__head-button {
  height: 45px !important;
}

.v-products-catalog__top {
  display: contents;
  font-size: 16px;
  line-height: 24px;
  font-weight: 300;
  color: $gray1;
}
</style>
