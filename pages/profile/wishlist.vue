<template>
  <v-profile-catalog :properties="properties" :items="products">
    <v-profile-catalog-product v-for="product in products" v-bind:key="product.id" :product="product">
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
  components: {
    SvgCart
  },
  data () {
    return {
      properties: ['Vintage', 'Price', 'Rating', 'Shops'],
      products: []
    }
  },
  mounted () {
    const pullData = this.asyncData()
    pullData.then((data) => {
      if (!data) {
        this.products = []
      }
      this.products = data.data
    })
  },
  methods: {
    async asyncData () {
      if (!this.$auth.user) {
        return false
      }
      const response = await this.$axios.post('/wishcoll/profile', {
        type: 1
      })
      return response.data
    }
  }
}
</script>

<style lang="scss"></style>
