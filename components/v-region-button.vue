<template>
  <nuxt-link :to="{path: 'categories', query: link}" class="v-region-button">
    <div class="v-region-button__main">
      <span class="v-region-button__title">{{ title }}</span>
      <img class="v-region-button__flag" :src="flag" :alt="country" >
      <span class="v-region-button__title-country">{{ country }}</span>
    </div>
    <img class="v-region-button__image" :src="image" :alt="title">
  </nuxt-link>
</template>

<script>
export default {
  name: 'VRegion',
  props: {
    title: {
      type: String,
      required: true
    },
    flag: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    link: {
      type: Object,
      required: false,
      default: () => {}
    }
  }
}
</script>

<style lang="scss">
.v-region-button {
  display: flex;
  align-items: center;
  width: 225px;
  min-width: 180px;
  height: 90px;
  background-color: #fff;
  border: 1px solid $gray6;
  color: $gray1;
  cursor: pointer;
  padding: 1px;

  &:not(:first-child) {
    border-left: none;
    padding-left: 2px;
  }

  &:hover {
    border: 2px solid $primary-color;
    padding: 0;

    & .v-region-button__image {
      opacity: 1;
    }
  }

  @media screen and (max-width: 1024px) {
    height: 85px;
  }

  @media screen and (max-width: 767px) {
    width: 180px;
  }
}

.v-region-button__main {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: fit-content;
  padding-left: 40px;

  @media screen and (max-width: 1024px) {
    padding-left: 20px;
  }
}

.v-region-button__title {
  font-size: 20px;
  line-height: 24px;
  font-weight: 600;

  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }
}

.v-region-button__flag {
  width: fit-content;
  margin-top: 7px;

  @media screen and (max-width: 1024px) {
    margin-top: 4px;
  }
}

.v-region-button__title-country {
  font-size: 14px;
  line-height: 24px;
  font-weight: 300;
  margin-top: 3px;
}

.v-region-button__image {
  display: block;
  opacity: 0;
  margin: 0 auto;
  transition-property: opacity;
  transition-duration: 0.2s;
}
</style>
