<template>
  <v-profile-catalog class="notes-catalog" :properties="properties" :items="products">
    <v-profile-catalog-product>
      <span class="v-profile-catalog-product__vintage">1996</span>
      <span class="v-profile-catalog-product__price">220 €</span>
      <v-product-points value="96" />
      <span class="v-profile-catalog-product__date v-profile-catalog-product__column-span-3">2020-08-29 16:04</span>
    </v-profile-catalog-product>
  </v-profile-catalog>
</template>

<script>
export default {
  data () {
    return {
      properties: [
        'Vintage',
        'Price',
        'Rates',
        'Date'
      ],
      products: []
    }
  }
}
</script>

<style lang="scss">
.notes-catalog {
  .v-catalog-sort-button {
    &:last-child {
      justify-self: flex-start;
    }
  }
}
</style>
