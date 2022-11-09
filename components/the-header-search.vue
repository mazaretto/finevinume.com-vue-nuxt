<template>
  <div class="the-header-search">
    <span class="the-header-search__statistics" :class="{ 'the-header-search__statistics--disable': active }">
      We are looking among 62486 bottles, among 1274 manufacturers
    </span>

    <form class="the-header-search__form" :class="{ 'the-header-search__form--active': active }">
      <input class="input the-header-search__input" type="search" v-model="searchContent" @focus="active = true" @blur="active = false">
      <v-button @click.native="submit()" class="the-header-search__button">
        <svg-binoculars class="the-header-search__button-icon" />
        Search
      </v-button>
    </form>
  </div>
</template>

<script>
import SvgBinoculars from '~/assets/icons/binoculars.svg?inline'

export default {
  methods: {
    submit () {
      console.log('qwe')
    }
  },
  data () {
    return {
      searchContent: '',
      active: false
    }
  },
  components: {
    SvgBinoculars
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
    background-color: #9E1224;
    border-color: #9E1224;
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
</style>
