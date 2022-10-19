<template>
  <div class="v-products-slider">
    <div v-swiper="options">
      <div class="swiper-wrapper">
        <div v-for="(product, id) in products" :key="id" class="swiper-slide">
          <v-product-card
            :in-wishlist="inWishcols(product.id, 'wishlist')"
            :in-collection="inWishcols(product.id, 'collection')"
            :product="product"
            :narrow="narrow"
          />
        </div>
      </div>
      <div class="v-products-slider__nav">
        <div class="v-products-slider__nav-button-prev">
          <svg-slider-prev class="v-products-slider__nav-button-arrow" />
        </div>
        <div class="v-products-slider__nav-button-next">
          <svg-slider-next class="v-products-slider__nav-button-arrow" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import SvgSliderPrev from '~/assets/icons/slider-prev.svg?inline'
import SvgSliderNext from '~/assets/icons/slider-next.svg?inline'

export default {
  props: {
    products: {
      type: Array,
      required: false
    },
    narrow: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      options: {
        slidesPerView: this.narrow ? 6 : 5,
        slidesPerGroup: this.narrow ? 6 : 5,
        spaceBetween: 20,
        simulateTouch: false,
        speed: 700,
        navigation: {
          prevEl: '.v-products-slider__nav-button-prev',
          nextEl: '.v-products-slider__nav-button-next'
        },
        breakpoints: {
          1025: {
            spaceBetween: 20
          },
          768: {
            spaceBetween: this.narrow ? 15 : 5,
            slidesPerView: this.narrow ? 6 : 5,
            slidesPerGroup: this.narrow ? 6 : 5
          },
          601: {
            spaceBetween: 5,
            slidesPerView: this.narrow ? 5 : 4,
            slidesPerGroup: this.narrow ? 5 : 4
          },
          481: {
            spaceBetween: 15,
            slidesPerView: this.narrow ? 4 : 3,
            slidesPerGroup: this.narrow ? 4 : 3
          },
          401: {
            spaceBetween: 15,
            slidesPerView: this.narrow ? 3 : 2,
            slidesPerGroup: this.narrow ? 3 : 2
          },
          321: {
            spaceBetween: this.narrow ? 5 : 15,
            slidesPerView: this.narrow ? 3 : 2,
            slidesPerGroup: this.narrow ? 3 : 2
          },
          0: {
            spaceBetween: this.narrow ? 5 : 0,
            slidesPerView: this.narrow ? 2 : 1,
            slidesPerGroup: this.narrow ? 2 : 1
          }
        }
      }
    }
  },
  computed: {
    ...mapGetters({
      wishlist: 'wishcolls/wishlist',
      collection: 'wishcolls/collection'
    })
  },
  methods: {
    inWishcols (id, type) {
      const indices = this[type].map(item => item.product_id)

      return indices.includes(id)
    }
  },
  components: {
    SvgSliderPrev,
    SvgSliderNext
  }
}
</script>

<style lang="scss">
.v-products-slider {
  position: relative;
  min-width: 0;
  margin-top: 15px;
}

.v-products-slider__nav {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-height: 0;
  z-index: 10;
  top: 50%;

  @media screen and (max-width: 1024px) {
    display: none;
  }
}

.v-products-slider__nav-button-prev,
.v-products-slider__nav-button-next {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: #fff;
  border: 2px solid $gray6;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  fill: $gray6;
  transition-property: border-color, fill;
  transition-duration: 0.2s;

  &:hover {
    border-color: $primary-color;
    fill: $primary-color;
  }

  &:active {
    border-color: darken($primary-color, 6%);
    fill: darken($primary-color, 6%);
  }
}

.v-products-slider__nav-button-arrow {
  width: 15px;
  height: 24px;
}

// .v-products-slider__nav-button-prev {
//   transform: translateX(-60px);
// }
//
// .v-products-slider__nav-button-next {
//   transform: translateX(60px);
// }
</style>
