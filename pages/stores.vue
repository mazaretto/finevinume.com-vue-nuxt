<template>
  <main class="stores">
    <v-banner :src="require('~/assets/images/banner-2.png')" />
    <v-stores-catalog
      :items="items"
      :properties="properties"
      page-name="store"
      class="stores-catalog__grid"
    >
      <template #over-catalog-view>
        <div v-if="!$auth.loggedIn" class="buttons-container stores-catalog__buttons container">
          <v-button class="stores-catalog__button" default>My added shops</v-button>
          <v-button class="stores-catalog__button" default-secondary>+ Add shop</v-button>
        </div>
      </template>
    </v-stores-catalog>
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
        'wines'
      ],
      items: [
        {
          name: 'Bestwine',
          country: 'France',
          region: 'Phone',
          wines: 1231
        },
        {
          name: 'Genimy wine',
          country: 'France',
          region: 'Rhone',
          wines: 83274
        },
        {
          name: 'Perfectwine',
          country: 'Chily',
          region: 'Chily region',
          wines: 131242
        },
        {
          name: 'Goodwine',
          country: 'Argentina',
          region: 'Argentina region',
          wines: 43514
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.stores {
  @media screen and (max-width: 600px) {
    padding-top: 85px;
  }
}

.stores-catalog--logged-in {
  padding-top: 35px;
}

.stores-catalog {
  display: flex;
  flex-direction: column;

  .v-stores-catalog__item-value {
    &:last-child {
      text-align: left;
    }
  }

  @media screen and (max-width: 1024px) {
    padding-top: 10px;
  }
}

.stores__page-preview {
  @media screen and (max-width: 1024px) {
    padding: {
      left: 0 !important;
      right: 0 !important;
    }
  }
}

.stores-catalog__grid {
  grid-template-columns: 1.6fr 1fr 2fr 1fr;
}

.stores-catalog__buttons {
  justify-content: center;
  grid-template-columns: repeat(2, 265px);
  font-size: 12px;
  margin: 40px auto 10px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 290px);
    font-size: 16px;
    margin-top: 15px;
  }

  @media screen and (max-width: 767px) {
    order: 1;
    grid-template-columns: minmax(0, 374px);
    text-transform: uppercase;
    margin-top: 50px;
    margin-bottom: 0;
  }
}

.stores-catalog__button {
  height: 40px !important;

  @media screen and (max-width: 767px) {
    height: 55px !important;
  }
}
</style>
