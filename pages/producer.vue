<template>
  <main class="producer">
    <v-banner :src="require('~/assets/images/banner-3.png')" />
    <v-page-preview title="Producer">
      <v-dropdown-text>If you would like to find out more about our services, the team is here to help - so no matter whether you're looking for a valuation, have a collection of bottles you'd like to sell or even if you just have a query about buying whisky at auction.
        Please don't hesitate to get in touch with us.
      </v-dropdown-text>
    </v-page-preview>
    <section class="producer-products">
      <div class="container">
        <v-products-catalog class="producer__catalog" :products="products" />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data () {
    return {
      products: [
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'Argentina wine',
          vintage: 2000,
          country: 'Argentina',
          region: 'Luhane',
          subregion: 'Virhola'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        },
        {
          name: 'France wine',
          vintage: 2000,
          country: 'France',
          region: 'Bordeaux',
          subregion: 'Moshone'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.producer__catalog {
  margin-top: 25px;
}
</style>
