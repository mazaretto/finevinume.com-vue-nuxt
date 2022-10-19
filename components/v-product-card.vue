<template>
  <div class="v-product-card" :class="{'v-product-card--narrow': narrow}">
    <div class="v-product-card__main">
      <div class="v-product-card__figure">
        <img class="v-product-card__img" :src="photo" alt="Bottle">
      </div>
      <div class="v-product-card__title">
        <nuxt-link class="v-product-card__title-text" :to="{ name: 'products-id', params: { id: product.id }}">
          {{ product.name }}
        </nuxt-link>
      </div>
    </div>
    <div class="v-product-card__bottom">
      <div class="v-product-card__actions">
        <v-product-points />
        <svg-product-amount class="v-product-card__amount" />
        <template v-if="!narrow">
          <v-product-wishlist :active="inWishlist" @togglewishcolls="toggleWishcolls" />
          <v-product-collection :active="inCollection" @togglewishcolls="toggleWishcolls" />
        </template>
      </div>
      <div class="v-product__description" v-if="!narrow">
        <p class="v-product__description-text"></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'

import SvgProductAmount from '~/assets/icons/product-amount.svg?inline'

export default {
  props: {
    product: {
      type: Object,
      required: false,
      default () {
        return {
          name: 'Undefined Bottle'
        }
      }
    },
    inCollection: {
      type: Boolean,
      required: false
    },
    inWishlist: {
      type: Boolean,
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
      wishlist: this.inWishlist,
      collection: this.inCollection
    }
  },
  computed: {
    photo () {
      if (this.product.photo) {
        return `http://asd777.ru/storage/${this.product.photo}`
      } else {
        return require('~/assets/images/empty-bottle.png')
      }
    }
  },
  methods: {
    async toggleWishcolls (type) {
      const currentType = type ? 'wishlist' : 'collection'

      if (!this[currentType]) {
        try {
          await this.ADD_TO_WISHCOLLS({
            product_id: this.product.id,
            type_coll: type
          })

          this[currentType] = true

          this.ADD_NOTIFICATION({
            reject: false,
            product: {
              name: this.product.name,
              type: currentType,
              added: true
            }
          })
        } catch (e) {
          this.ADD_NOTIFICATION({
            reject: true,
            error: 'Something went wrong, try add this product later'
          })
        }
      }
    },
    ...mapActions({
      ADD_TO_WISHCOLLS: 'wishcolls/ADD_TO_WISHCOLLS'
    }),
    ...mapMutations({
      ADD_NOTIFICATION: 'notifications/ADD_NOTIFICATION'
    })
  },
  components: {
    SvgProductAmount
  }
}
</script>

<style lang="scss">
.v-product-card {
  max-width: 220px;
  background-color: #fff;
  border: 1px solid $gray6;
  overflow: hidden;
  box-sizing: border-box;
  padding: 20px;
  transition-property: box-shadow, opacity;
  transition-duration: 0.4s;

  &:hover {
    box-shadow: 0px -4px 4px rgba(#cecece, 0.1), 0px 4px 4px rgba(#1b1b1b, 0.1);
  }

  @media screen and (max-width: 1279px) {
    padding: 10px;
  }

  @media screen and (max-width: 1024px) and (min-width: 481px)  {
    svg {
      max-width: 18px;
      max-height: 18px;
    }

    .v-product-points__icon {
      margin-right: 3px;
    }
  }

  @media screen and (max-width: 480px) {
    padding: 15px;
  }

  @media screen and (max-width: 413px) {
    padding: 10px;

    svg {
      max-width: 18px;
      max-height: 18px;
    }

    .v-product-points__icon {
      margin-right: 3px;
    }
  }

  @media screen and (max-width: 320px) {
    width: 100%;
    padding: 20px;
    margin: 0 auto;

    svg {
      max-width: none;
      max-height: none;
    }
  }
}

.v-product-card--narrow {
  max-width: 180px;
  padding: 10px 10px 15px;

  .v-product-card__figure {
    min-height: 145px;
  }

  .v-product-card__main {
    padding-bottom: 10px;
  }

  .v-product-card__title {
    height: 80px;

    @media screen and (max-width: 1024px) {
      margin-top: 15px;
    }
  }

  .v-product-card__title-text {
    -webkit-line-clamp: 4;

    @media screen and (max-width: 1279px) {
      line-height: 20px;
    }
  }

  .v-product-card__bottom {
    padding-top: 15px;

    @media screen and (max-width: 1279px) {
      padding-top: 10px;
    }
  }

  .v-product-card__actions {
    justify-content: center !important;
    grid-gap: 20px;

    @media screen and (max-width: 1024px) {
      grid-gap: 10px;
    }

    @media screen and (max-width: 480px) {
      font-size: 14px;

      svg {
        max-width: 18px;
        max-height: 18px;
      }
    }

    @media screen and (max-width: 320px) {
      font-size: 18px;

      svg {
        max-width: none;
        max-height: none;
      }
    }
  }

  @media screen and (max-width: 1279px) {
    padding: 10px;
    //
    // .v-product-card__figure {
    //   padding-top: 145px;
    // }
  }
}

.v-product-card__main {
  padding-bottom: 15px;
  border-bottom: 1px solid $gray6;

  &:hover + .product-card__footer > .product-card__description-wrap {
    opacity: 1;
    z-index: 1;
  }

  @media screen and (max-width: 1024px) {
    padding-bottom: 5px;
  }

  @media screen and (max-width: 480px) {
    padding-bottom: 10px;
  }

  @media screen and (max-width: 413px) {
    padding-bottom: 5px;
  }

  @media screen and (max-width: 320px) {
    padding-bottom: 15px;
  }
}

.v-product-card__figure {
  position: relative;
  padding-top: calc(100% / 180 * 190);
}

.v-product-card__img {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  top: 0;
}

.v-product-card__title {
  display: flex;
  height: 60px;
  overflow: hidden;
  margin-top: 15px;

  @media screen and (max-width: 1024px) {
    height: 54px;
    margin-top: 5px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 10px;
  }

  @media screen and (max-width: 413px) {
    margin-top: 5px;
  }

  @media screen and (max-width: 320px) {
    height: 60px;
    margin-top: 15px;
  }
}

.v-product-card__title-text {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  text-align: center;
  color: $gray1;
  cursor: pointer;
  margin: auto;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 1024px) and (min-width: 321px) {
    font-size: 12px;
    line-height: 18px;
    letter-spacing: 0;
  }
}

.v-product-card__bottom {
  position: relative;
  font-size: 18px;
  line-height: 20px;
  font-weight: 600;
  padding-top: 20px;

  @media screen and (max-width: 1279px) {
    font-size: 14px;
    padding-top: 10px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
    padding-top: 15px;
  }

  @media screen and (max-width: 413px) {
    font-size: 14px;
    padding-top: 10px;
  }

  @media screen and (max-width: 320px) {
    font-size: 18px;
    padding-top: 15px;
  }
}

.v-product-card__description {
  position: absolute;
  display: flex;
  width: 100%;
  height: 65px;
  background-color: #fff;
  opacity: 0;
  overflow: hidden;
  z-index: -1;
  top: 0;
  transition-property: opacity,z-index;
  transition-duration: 0.4s;

  &:hover {
    opacity: 1;
    z-index: 1;
  }
}

.v-product-card__description-text {
  font-family: $Montserrat;
  font-size: 10px;
  line-height: 16px;
  font-weight: 400;
  text-align: center;
  margin: auto;
}

.v-product-card__actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.v-product-card__amount {
  width: 24px;
  height: 24px;
  fill: $green;

  @media screen and (max-width: 1024px) and (min-width: 481px) {
    width: 18px;
    height: 18px;
  }
}
</style>
