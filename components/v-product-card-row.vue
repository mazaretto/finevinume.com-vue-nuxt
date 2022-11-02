<template>
  <div class="v-product-card-row">
    <div class="v-product-card-row__figure">
      <img class="v-product-card-row__img" :src="photo" alt="bottle">
    </div>
    <div class="v-product-card-row__main">
      <span class="v-product-card-row__title">
        {{ product.name }}
      </span>
      <!-- <span class="v-product-card-row__description"></span> -->
    </div>
    <div class="v-product-card-row__info">
      <span class="v-product-card-row__vintage">{{ product.vintage || 0 }}</span>
      <v-product-points :value="product.points"/>
      <span class="v-product-card-row__classification">RA 95</span>
      <svg-product-amount class="v-product-card__amount" />
    </div>
  </div>
</template>

<script>
import SvgProductAmount from '~/assets/icons/product-amount.svg?inline'

export default {
  props: {
    product: {
      type: Object,
      required: false,
      default () {
        return {
          name: 'Undefined Bottle',
          photo: require('~/assets/images/empty-bottle.png')
        }
      }
    }
  },
  computed: {
    photo () {
      if (this.product.photo !== null) {
        return `http://app.finevinume.com/storage/${this.product.photo}`
      } else {
        return require('~/assets/images/empty-bottle.png')
      }
    }
  },
  components: {
    SvgProductAmount
  }
}
</script>

<style lang="scss">
.v-product-card-row {
  display: flex;
  align-items: center;
  border: 1px solid $gray6;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  color: $gray1;
  padding: 10px;
  transition-property: box-shadow;
  transition-duration: 0.4s;

  &:hover {
    box-shadow:
      0px -4px 4px rgba(#cecece, 0.1),
      0px 4px 4px rgba(#1b1b1b, 0.1);
  }
}

.v-product-card-row__figure {
  width: 70px;
  height: 70px;
  margin-right: 10px;
}

.v-product-card-row__img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.v-product-card-row__main {
  display: grid;
  grid-gap: 10px;
  width: fit-content;
}

.v-product-card-row__title {
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}

.v-product-card-row__description {
  font-family: $Montserrat;
  font-size: 12px;
  line-height: 16px;
  font-weight: 300;
}

.v-product-card-row__info {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-auto-flow: column;
  grid-auto-columns: 60px;
  grid-gap: 10px;
  margin-left: auto;
}
</style>
