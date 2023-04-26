<template>
  <div class="v-product-points">
    <svg-product-points class="v-product-points__icon" />
    <span class="v-product-points__number">{{ value }}</span>
  </div>
</template>

<script>
import SvgProductPoints from '~/assets/icons/product-points.svg?inline'

export default {
  props: {
    value: {
      type: Number,
      required: false,
      default: () => {
        return 0
      }
    }
  },
  components: {
    SvgProductPoints
  }
}
</script>

<style lang="scss">
.v-product-points {
  display: flex;
  align-items: center;
  color: $primary-color;
  fill: $primary-color;
}

.v-product-points__icon {
  width: 24px;
  height: 24px;
  margin-right: 5px;
}
</style>
