<template>
  <v-profile-catalog :properties="properties" :items="products">
    <v-profile-catalog-product>
      <span class="v-profile-catalog-product__vintage">1996</span>
      <span class="v-profile-catalog-product__price">220 €</span>
      <span>1002</span>
      <v-product-points value="96" />
      <span>96</span>
    </v-profile-catalog-product>
  </v-profile-catalog>
</template>

<script>
export default {
  data () {
    return {
      properties: [
        'Price',
        'Vintage',
        'Votes',
        'Rate',
        'My rate'
      ],
      products: []
    }
  }
}
</script>

<style lang="scss">
</style>
