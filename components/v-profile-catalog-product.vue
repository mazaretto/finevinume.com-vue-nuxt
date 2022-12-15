<template>
  <div
    class="v-profile-catalog-product"
    :class="{ 'v-profile-catalog-product--active': active }"
  >
    <div class="v-profile-catalog-product__front">
      <div class="v-profile-catalog-product__figure">
        <img class="v-profile-catalog-product__img" :src="photo" alt="Bottle">
      </div>
      <div class="v-profile-catalog-product__name-description">
        <span class="v-profile-catalog-product__name">{{ product.name }}</span>
      </div>
      <slot />
      <div v-if="undermenu" class="v-profile-catalog-product__toggle-undermenu">
        <span
          class="v-profile-catalog-product__text-button"
          @click="active = true"
        >Edit</span>
        <svg-profile-product-arrow
          v-show="active"
          class="v-profile-catalog-product__undermenu-arrow"
          @click="active = false"
        />
      </div>
    </div>
    <div
      v-if="undermenu && active"
      class="v-profile-catalog-product__undermenu"
    >
      <div class="v-profile-catalog-product__undermenu-main">
        <slot name="undermenu" />
      </div>
      <span class="v-profile-catalog-product__delete-button">Delete</span>
      <span class="v-profile-catalog-product__text-button">Save</span>
    </div>
  </div>
</template>

<script>
import SvgProfileProductArrow from '~/assets/icons/profile-product-arrow.svg?inline'

export default {
  components: {
    SvgProfileProductArrow
  },
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
    undermenu: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      active: false
    }
  },
  computed: {
    photo () {
      if (this.product.photo) {
        return `https://app.finevinume.com/storage/${this.product.photo}`
      } else {
        return require('~/assets/images/empty-bottle.png')
      }
    }
  }
}
</script>

<style lang="scss">
.v-profile-catalog-product--active {
  box-shadow: 0px -4px 4px rgba(206, 206, 206, 0.1),
    0px 4px 4px rgba(27, 27, 27, 0.1);
}

.v-profile-catalog-product__front {
  display: grid;
  align-items: center;
  grid-template-columns: auto 6fr repeat(6, 1fr);
  justify-items: center;
  grid-gap: 10px;
  width: 100%;
  padding: 10px;
  border: 1px solid $gray6;

  @media screen and (max-width: 1024px) {
    grid-template-columns: auto 6fr repeat(4, 1fr);
  }
}

.v-profile-catalog-product__figure {
  width: 70px;
  height: 70px;
}

.v-profile-catalog-product__img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.v-profile-catalog-product__name-description {
  justify-self: flex-start;
}

.v-profile-catalog-product__toggle-undermenu {
  display: contents;

  @media screen and (max-width: 1024px) {
    display: none;
  }
}

.v-profile-catalog-product__name,
.v-profile-catalog-product__vintage {
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
}

.v-profile-catalog-product__description {
  font-family: $Montserrat;
  font-size: 12px;
  line-height: 16px;
  font-weight: 300;
  margin-top: 10px;
}

.v-profile-catalog-product__price {
  font-size: 16px;
  line-height: 20px;
  font-weight: 600;
  color: $green;
}

.v-profile-catalog-product__cart {
  width: 27px;
  height: 21px;
  fill: $primary-color;
}

.v-profile-catalog-product__delete {
  font-size: 16px;
  line-height: 20px;
  text-decoration: underline;
  color: $primary-color;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
}

.v-profile-catalog-product__date,
.v-profile-catalog-product__link {
  font-size: 16px;
  line-height: 20px;
  color: $gray1;
  text-align: center;
}

.v-profile-catalog-product__column-span-3 {
  justify-self: flex-start;
  grid-column: span 3;
}

.v-profile-catalog-product__link {
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
}

.v-profile-catalog-product__undermenu {
  display: grid;
  align-items: center;
  justify-items: center;
  grid-gap: 10px;
  grid-template-columns: 6fr repeat(6, 1fr);
  background-color: $gray6;
  padding: 10px 10px 10px 90px;
}

.v-profile-catalog-product__info-block {
  display: grid;
  align-items: center;
  grid-template-rows: auto 30px;
  grid-gap: 3px;
  font-family: $Montserrat;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  color: $gray1;
}

.v-profile-catalog-product__info-block-title {
  font-family: $Open-Sans;
  font-size: 16px;
  line-height: 22px;
}

.v-profile-catalog-product__text-button {
  font-size: 16px;
  line-height: 20px;
  text-decoration: underline;
  color: $primary-color;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
}

.v-profile-catalog-product__undermenu-main {
  grid-column: span 5;
  justify-self: flex-start;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 65px;
}

.v-profile-catalog-product__delete-button {
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  color: $gray4;
  text-decoration: underline;

  &:hover {
    color: $primary-color;
    text-decoration: none;
  }
}

.v-profile-catalog-product__undermenu-arrow {
  width: 20px;
  height: 12px;
  fill: $gray5;
  cursor: pointer;
}

.v-profile-catalog-product__paid {
  display: grid;
  grid-template-columns: 25px 60px;
  grid-gap: 1px;
  border: 1px solid $gray5;
  background-color: $gray5;
}

.v-profile-catalog-product__paid-cell {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $gray6;
  height: 30px;
}

.v-profile-catalog-product__paid-input {
  width: 100%;
  border: 0;
  padding: 0 5px;
}
</style>
