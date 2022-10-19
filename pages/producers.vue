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
      ],
      items: [
        {
          name: 'Fonsue',
          country: 'France',
          region: 'Phone',
          subregion: 'Altish',
          wines: 10
        },
        {
          name: 'Amalbet',
          country: 'USA',
          region: 'USA region',
          subregion: 'USA state',
          wines: 423
        },
        {
          name: 'Rongue',
          country: 'Argentina',
          region: 'Rongue region',
          subregion: 'Rongue subregion',
          wines: 67
        },
        {
          name: 'Broomish',
          country: 'Chily',
          region: 'Chily region',
          subregion: 'Very long name of Chily subregion',
          wines: 192
        },
        {
          name: 'Zorry Virtinsh',
          country: 'Italy',
          region: 'Italy region',
          subregion: 'Italy subregion',
          wines: 2424
        },
        {
          name: 'Tizens',
          country: 'Belgium',
          region: 'Belgium region',
          subregion: 'Belgium subregion',
          wines: 232
        },
        {
          name: 'Aborie',
          country: 'Spain',
          region: 'Spain region',
          subregion: 'Spain state',
          wines: 783
        },
        {
          name: 'Tonomy Lackolt',
          country: 'France',
          region: 'Andur',
          subregion: 'Medoc',
          wines: 1276
        },
        {
          name: 'Tarnony',
          country: 'Italy',
          region: 'Italy region',
          subregion: 'Italy subregion',
          wines: 22
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
