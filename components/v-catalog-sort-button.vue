<template>
  <div
    class="v-catalog-sort-button"
    :class="{'v-catalog-sort-button--active': active}"
    @click="$emit('click', property)"
  >
    <span class="v-catalog-sort-button__text">{{ property }}</span>
    <svg-sort-button-arrow class="v-catalog-sort-button__arrow" />
  </div>
</template>

<script>
import SvgSortButtonArrow from '~/assets/icons/sort-button-arrow.svg?inline'

export default {
  props: {
    active: {
      type: Boolean,
      required: false,
      default: false
    },
    property: {
      type: String,
      required: false
    }
  },
  components: {
    SvgSortButtonArrow
  }
}
</script>

<style lang="scss">
.v-catalog-sort-button {
  display: flex;
  align-items: center;
  color: $gray1;
  fill: $gray1;
  cursor: pointer;
  user-select: none;

  @media screen and (max-width: 600px) {
    justify-content: space-between;
    font-size: 18px;
    line-height: 36px;
    color: $gray5;
    fill: $gray2;
  }
}

.v-catalog-sort-button--active {
  color: $primary-color;
  fill: $primary-color;

  & .v-catalog-sort-button__arrow {
    transform: rotateZ(180deg);
  }
}

.v-catalog-sort-button__arrow {
  width: 10px;
  height: 12px;
  margin-left: 7px;
}
</style>
