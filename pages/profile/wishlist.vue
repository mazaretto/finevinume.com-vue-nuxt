<template>
  <v-profile-catalog :properties="properties" :items="products">
    <v-profile-catalog-product>
      <span class="v-profile-catalog-product__vintage">1996</span>
      <span class="v-profile-catalog-product__price">220 €</span>
      <v-product-points value="96" />
      <svg-cart class="v-profile-catalog-product__cart" />
      <span class="v-profile-catalog-product__delete">Delete</span>
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
        'Price',
        'Rating',
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
