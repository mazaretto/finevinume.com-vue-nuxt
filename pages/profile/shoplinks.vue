<template>
<!--  <p v-if="$fetchState.pending">Fetching mountains...</p>-->
<!--  <p v-else-if="$fetchState.error">An error occurred :(</p>-->
  <v-profile-catalog class="shoplinks-catalog" :properties="properties" :items="products">
    <v-profile-catalog-product v-for="(item, ind) in products" :key="ind" :product="item">
      <span>{{ item.wines }}</span>
      <span>{{ item.country }}</span>
      <span>{{ item.city }}</span>
      <span>{{ item.phone }}</span>
      <span>{{ item.website }}</span>
    </v-profile-catalog-product>
  </v-profile-catalog>
</template>

<script>
export default {
  data () {
    return {
      properties: [
        'Wines',
        'Country',
        'City',
        'Phone',
        'Website'
      ],
      products: []
    }
  },
  async fetch () {
    const { data } = await this.$axios.get('/user-shoplinks').catch(res => false).then(res => res.data)
    this.products = data
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
