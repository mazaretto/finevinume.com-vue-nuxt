<template>
  <div class="v-products-catalog-tablet-dropdown">
    <div class="v-products-catalog-tablet-dropdown__top">
      <span class="v-products-catalog-tablet-dropdown__title">{{ title }}</span>
      <slot name="tags"></slot>
    </div>
    <div class="v-products-catalog-tablet-dropdown__main">
      <slot name="default"></slot>
    </div>
    <div class="buttons-container v-products-catalog-filter__buttons">
      <v-button
        class="v-products-catalog-filter__button"
        @click.native="$emit('close')"
        default-secondary
      >
        Close
      </v-button>
      <v-button
        class="v-products-catalog-filter__button"
        @click.native="$emit('enter')"
        default
      >
        Enter
      </v-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      reuqired: true
    }
  }
}
</script>

<style lang="scss">
.v-products-catalog-tablet-dropdown {
  position: absolute;
  display: none;
  padding: 30px;
  background-color: #F7F3F0;
  top: 70px;
  left: 0;
  right: 0;
  z-index: 9;

  .v-catalog-sort-button {
    justify-content: space-between;
  }

  .v-catalog-sort-button__text {
    display: flex;
    align-items: baseline;
    width: 100%;
    font-weight: 400;

    &::after {
      content: '';
      display: block;
      flex: 1;
      border-bottom: 1px dashed $gray5;
      margin-left: 10px;
    }
  }

  @media screen and (max-width: 1024px) {
    display: block;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
}

.v-products-catalog-tablet-dropdown__top {
  display: flex;
  flex-wrap: wrap;
}

.v-products-catalog-tablet-dropdown__title {
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: $gray1;
  margin-right: 10px;
}

.v-products-catalog-tablet-dropdown__main {
  display: grid;
  grid-gap: 10px;
  margin-top: 30px;
}
</style>
