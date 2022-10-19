<template>
  <div class="v-products-catalog-view">
    <div :class="containerClass">
      <component
        v-for="product in visibleProducts"
        :key="product.id"
        :product="product"
        :in-wishlist="inWishcols(product.id, 'wishlist')"
        :in-collection="inWishcols(product.id, 'collection')"
        :is="grid ? 'VProductCard' : 'VProductCardRow'">
      </component>
    </div>

    <v-pagination
      class="v-products-catalog-view__pagination"
      :items-length="products.length"
      :indices="indices"
      @update-indices="indices = $event"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    products: {
      type: Array,
      required: true
    },
    grid: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      indices: [0, 16]
    }
  },
  computed: {
    containerClass () {
      return {
        'v-products-catalog-view__grid': this.grid,
        'v-products-catalog-view__rows': !this.grid
      }
    },
    visibleProducts () {
      return this.products.slice(this.indices[0], this.indices[1])
    },
    ...mapGetters({
      wishlist: 'wishcolls/wishlist',
      collection: 'wishcolls/collection'
    })
  },
  methods: {
    inWishcols (id, type) {
      const indices = this[type].map(item => item.product_id)

      return indices.includes(id)
    },
    setIndices () {
      const width = document.documentElement.clientWidth

      if (width <= 480) {
        this.indices = [0, 8]
      } else if (width <= 600) {
        this.indices = [0, 12]
      } else if (width <= 1024) {
        this.indices = [0, 20]
      } else {
        this.indices = [0, 16]
      }
    }
  },
  watch: {
    products: {
      handler () {
        this.setIndices()
      },
      deep: true
    }
  },
  mounted () {
    this.setIndices()

    window.addEventListener('resize', this.setIndices)
  },
  destroyed () {
    window.removeEventListener('resize', this.setIndices)
  }
}
</script>

<style lang="scss">
.v-products-catalog-view {
  grid-column: span 4;
}

.v-products-catalog-view__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 8px;
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 320px) {
    grid-template-columns: auto;
  }
}

.v-products-catalog-view__rows {
  display: grid;
  grid-gap: 10px;
}

.v-products-catalog-view__pagination {
  margin-top: 40px;
}

.product-fade-enter-active,
.product-fade-leave-active {
  transition: opacity 0.4s;
}

.product-fade-enter,
.product-fade-leave-to {
  opacity: 0;
}
</style>
