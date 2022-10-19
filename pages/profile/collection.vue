<template>
  <v-profile-catalog :properties="properties" :items="products">
    <v-profile-catalog-product undermenu>
      <span class="v-profile-catalog-product__vintage">1996</span>
      <span class="v-profile-catalog-product__price">220 €</span>
      <v-product-points value="96" />
      <svg-cart class="v-profile-catalog-product__cart" />
      <template #undermenu>
        <div class="v-profile-catalog-product__info-block">
          <span class="v-profile-catalog-product__info-block-title">Added to collection</span>
          <time>02.03.2020 6:34</time>
        </div>
        <div class="v-profile-catalog-product__info-block">
          <span class="v-profile-catalog-product__info-block-title">Paid</span>
          <div class="v-profile-catalog-product__paid">
            <div class="v-profile-catalog-product__paid-cell">€</div>
            <div class="v-profile-catalog-product__paid-cell">
              <input type="text" class="v-profile-catalog-product__paid-input">
            </div>
          </div>
        </div>
      </template>
    </v-profile-catalog-product>
  </v-profile-catalog>
</template>

<script>
import SvgCart from '~/assets/icons/cart.svg?inline'

export default {
  data () {
    return {
      properties: [
        'Vintage',
        'Paid',
        'Raiting',
        'Shops'
      ],
      products: []
    }
  },
  components: {
    SvgCart
  }
}
</script>

<style lang="scss">
</style>
