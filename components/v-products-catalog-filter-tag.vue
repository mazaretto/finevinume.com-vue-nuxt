<template>
  <div
    ref="tag"
    class="v-products-catalog-filter-tag"
    :class="{'v-products-catalog-filter-tag--deleting': deleting}"
  >
    <svg-tag-cross class="v-products-catalog-filter-tag__cross" @click="!deleting ? $emit('remove', value) : $emit('remove-all')" />
    <span class="v-products-catalog-filter-tag__value">
      {{ deleting ? 'Delete all' : value }}
    </span>
  </div>
</template>

<script>
import SvgTagCross from '~/assets/icons/tag-cross.svg?inline'

export default {
  props: {
    value: {
      type: String,
      required: false,
      default: ''
    },
    deleting: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: {
    SvgTagCross
  }
}
</script>

<style lang="scss">
.v-products-catalog-filter-tag {
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 24px;
  color: $gray3;

  margin: 0 5px;

  @media screen and (max-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid $gray3;
    border-radius: 30px;
    padding: 0 15px;
    margin: 0 10px 10px 0 !important;
  }
}

.v-products-catalog-filter-tag--deleting {
  color: $primary-color;
  margin-top: 5px;

   .v-products-catalog-filter-tag__cross {
    fill: $primary-color;
  }

  @media screen and (max-width: 1024px) {
    border-color: $primary-color;
  }
}

.v-products-catalog-filter-tag__cross {
  width: 10px;
  height: 10px;
  fill: $gray3;
  cursor: pointer;
}

.v-products-catalog-filter-tag__value {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-left: 15px;

  @media screen and (max-width: 1024px) {
    margin-left: 10px;
  }
}
</style>
