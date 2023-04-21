<template>
  <main class="producer">
    <v-banner :src="require('~/assets/images/banner-3.png')"/>
    <v-page-preview :title="this.$route.query.name ? this.$route.query.name : 'Producer'">
      <v-dropdown-text>If you would like to find out more about our services, the team is here to help - so no matter
        whether you're looking for a valuation, have a collection of bottles you'd like to sell or even if you just have
        a query about buying whisky at auction.
        Please don't hesitate to get in touch with us.
      </v-dropdown-text>
    </v-page-preview>
    <div class="container m-20">
      <v-breadcrumbs :count="count" @callbackSearch="setSearch"/>
    </div>
    <section class="producer-products">
      <div class="container">
        <v-products-catalog
          class="producer__catalog"
          :products="products"
          v-if="uploaded"
          @callbackCount="setCountFounds"
          :search="search"
        />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  mounted () {
    if (!this.$route.query || !this.$route.query.id) {
      this.$router.replace('/not-found')
    }
    this.asyncData()
    if (this.products === false) {
      this.$router.replace('/not-found')
    }
  },
  data () {
    return {
      products: [],
      uploaded: false,
      search: '',
      count: 0
    }
  },
  methods: {
    setCountFounds (value) {
      this.count = value
    },
    setSearch (value) {
      this.search = value
    },
    async asyncData () {
      this.products = await this.$axios.post('/category-products', { id: this.$route.query.id })
        .then((res) => {
          if (!res.data.success) {
            return [false]
          }
          this.uploaded = true
          this.count = res.data.data.product.length
          return res.data.data.product
        })
        .catch(() => {
          return [false]
        })
    }
  }
}
</script>

<style lang="scss">
.producer__catalog {
  margin-top: 25px;
}
.m-20 {
  margin: 30px auto;
}
</style>
