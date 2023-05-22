<template>
  <main class="producers">
    <v-banner :src="require('~/assets/images/banner-1.png')" />
    <v-stores-catalog
      :items="items"
      :properties="properties"
      :selects="selects"
      page-name="producer"
      class="producers-catalog__grid"
    />
  </main>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const items = await $axios.$get('/categories-minified').then(res => res.data)
    return { items }
  },
  data () {
    return {
      properties: [
        'name',
        'country',
        'region',
        'subregion',
        'wines'
      ],
      selects: [
        {
          property: 'country',
          placeholder: 'Country'
        },
        {
          property: 'region',
          placeholder: 'Region'
        },
        {
          property: 'subregion',
          placeholder: 'Subregion'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.producers {
  @media screen and (max-width: 600px) {
    padding-top: 85px;
  }

  .v-stores-catalog__item-value {
    &:last-child {
      text-align: center;
    }
  }

  .v-stores-catalog__sort-button {
    &:last-child {
      margin: 0 auto;
    }
  }
}

.producers-catalog {
  padding-top: 35px;
}

.producers__page-preview {
  @media screen and (max-width: 1024px) {
    padding: {
      left: 0 !important;
      right: 0 !important;
    }
  }
}

.producers-catalog__grid {
  grid-template-columns: 2fr repeat(3, 1fr) 80px;

  .v-stores-catalog-view__item-value,
  .v-catalog-sort-button {
    &:last-child {
      margin: 0 auto;
    }
  }
}
</style>
