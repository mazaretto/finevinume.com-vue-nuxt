<template>
  <div class="the-header-search">
    <span
      class="the-header-search__statistics"
      :class="{ 'the-header-search__statistics--disable': active }"
    >
      We are looking among {{ bottles }} bottles, among
      {{ stores }} manufacturers
    </span>

    <form
      class="the-header-search__form"
      :class="{ 'the-header-search__form--active': active }"
      @submit.stop.prevent="submit"
    >
      <input
        v-model="searchContent"
        class="input the-header-search__input"
        type="search"
        @focus="active = true"
        @blur="active = false"
      >
      <v-button
        class="the-header-search__button"
        type="button"
      >
        <svg-binoculars class="the-header-search__button-icon" />
        Search
      </v-button>

      <nav
        v-if="searchResult && searchResult.length"
        class="header-search-result"
      >
        <ul class="header-search-result__list">
          <li
            v-for="(item, index) in searchResult"
            :key="index"
            class="header-search-result__item"
          >
            <nuxt-link
              class="header-search-result__link"
              :to="{
                name: 'products-id',
                params: { id: item.id, name: item.name }
              }"
            >
              {{ item.name }}
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import SvgBinoculars from '~/assets/icons/binoculars.svg?inline'

export default {
  components: {
    SvgBinoculars
  },
  data () {
    return {
      searchContent: '',
      searchResult: [],
      active: false
    }
  },
  watch: {
    searchContent () {
      setTimeout(() => {
        this.submit()
      }, 300)
    }
  },
  methods: {
    ...mapActions({
      GET_COUNTERS: 'counters/GET_COUNTERS'
    }),
    async submit () {
      const res = await this.$axios.$post('/search', {
        search: this.searchContent
      })
      if (res.data.length >= 5) {
        return (this.searchResult = res.data.splice(0, 5))
      }
      return (this.searchResult = res.data)
    }
  },

  async fetch () {
    await this.GET_COUNTERS()
  },
  computed: {
    ...mapGetters({
      bottles: 'counters/products',
      stores: 'counters/stores'
    })
  }
}
</script>

<style lang="scss">
$transition-duration: 0.4s;
$border-radius: 25px;

.the-header-search {
  position: relative;
  display: flex;

  @media screen and (max-width: 600px) {
    display: none;
  }
}

.the-header-search__statistics {
  position: absolute;
  max-width: 215px;
  font-size: 12px;
  line-height: 160%;
  font-weight: 300;
  color: $gray3;
  transition-property: opacity;
  transition-duration: $transition-duration;

  @media screen and (max-width: 767px) {
    display: none;
  }
}

.the-header-search__statistics--disable {
  opacity: 0;
}

.the-header-search__form {
  position: relative;
  display: flex;
  // width: (480px / 823px * 100%);
  width: 58.3232077764277%;
  height: 40px;
  margin-left: auto;
  transition-property: width;
  transition-duration: $transition-duration;

  @media screen and (max-width: 1024px) {
    // width: (280px / 513px * 100%);
    width: 54.58089668615984%;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
  }
}

.the-header-search__form--active {
  width: 100%;
}

.the-header-search__input {
  width: 100%;
  height: 100% !important;
  border-radius: $border-radius !important;
  color: $gray1;
  outline: 0;
}

.the-header-search__button {
  position: absolute;
  width: 140px;
  height: 100%;
  background-color: #fff;
  border: 1px solid $gray5;
  border-radius: $border-radius;
  color: $primary-color;
  fill: $primary-color;
  right: 0;

  &:hover,
  &:active {
    color: #fff;
    fill: #fff;
  }

  &:hover {
    background-color: $primary-color;
    border-color: $primary-color;
  }

  &:active {
    background-color: #9e1224;
    border-color: #9e1224;
  }

  @media screen and (max-width: 1024px) {
    width: 110px;
    font-size: 12px;
    line-height: 16px;
  }
}

.the-header-search__button-icon {
  width: 24px;
  height: 24px;
  margin-right: 20px;

  @media screen and (max-width: 1024px) {
    margin-right: 10px;
  }
}
.header-search-result {
  width: 100%;
  height: auto;
  z-index: 1000;
  position: absolute;
  left: 0;
  top: 100%;
  padding-top: 20px;
  transition: 350ms ease-in-out;
}
.header-search-result__list {
  padding: 10px 20px;
  border-radius: 5px !important;
  color: #333333;
  border: 1px solid #e0e0e0;
  background-color: white;
}
.header-search-result__link {
  display: block;
  width: 100%;
  padding: 10px 0;
}
</style>
