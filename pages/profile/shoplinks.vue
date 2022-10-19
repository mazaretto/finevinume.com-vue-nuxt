<template>
  <v-profile-catalog class="shoplinks-catalog" :properties="properties" :items="products">
    <v-profile-catalog-product>
      <span class="v-profile-catalog-product__vintage">1996</span>
      <span class="v-profile-catalog-product__price">220 €</span>
      <span class="v-profile-catalog-product__date">2020-08-29 16:04</span>
      <span class="v-profile-catalog-product__link v-profile-catalog-product__column-span-3">Raremalts_shop.com</span>
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
        'Date',
        'Shop'
      ],
      products: []
    }
  }
}
</script>

<style lang="scss">
.shoplinks-catalog {
  .v-catalog-sort-button:last-child {
    justify-self: flex-start;
  }

  .v-profile-catalog-product__date {
    font-size: 13px;
    line-height: 20px;
  }
}
</style>
