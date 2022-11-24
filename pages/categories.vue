<template>
  <main class="categories">
    <div class="container">
      <v-breadcrumbs :count="count" @callbackSearch="setSearch" />
    </div>

    <section class="categories-products">
      <div class="container">
        <v-products-catalog
          :search="search"
          class="categories-products"
          :products="products"
          @callbackCount="setCountFounds"
        />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData ({ $axios, error }) {
    try {
      const response = await $axios.$get('http://127.0.0.1:8000/api/products')

      return {
        count: response.data.length,
        products: response.data
      }
    } catch (e) {
      error(e)
    }
  },
  data () {
    return {
      search: ''
    }
  },
  methods: {
    setCountFounds (value) {
      this.count = value
    },
    setSearch (value) {
      this.search = value
    }
  }
}
</script>

<style lang="scss">
.categories {
  padding-top: 40px;

  @media screen and (max-width: 600px) {
    padding-top: 115px;
  }
}

.categories-products {
  margin-top: 25px;
  @media screen and (max-width: 600px) {
    margin-top: 0;
  }
}
</style>
