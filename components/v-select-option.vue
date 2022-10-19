<template>
  <div class="v-select-option" @click="$parent.setValue(value)">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.v-select-option {
  padding: 5px 20px;
  cursor: pointer;

  &:hover {
    background-color: $primary-color;
    color: #fff;
  }
}
</style>
