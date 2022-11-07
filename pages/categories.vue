<template>
  <main class="categories">
    <div class="container">
      <v-breadcrumbs />
    </div>

    <section class="categories-products">
      <div class="container">
        <v-products-catalog class="categories-products" :products="products"/>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData ({ $axios, error }) {
    try {
      const response = await $axios.$get('https://app.finevinume.com/api/products')

      return {
        products: response.data
      }
    } catch (e) {
      error(e)
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
