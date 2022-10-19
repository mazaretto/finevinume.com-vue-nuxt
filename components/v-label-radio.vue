<template>
  <label class="label-input-button">
    <v-input-button
      :name="name"
      :value="value"
      :checked="value"
      @change="$emit('change', value)"
      radio
    />
    <span class="label-input-button__text">{{ value }}</span>
  </label>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: false,
      default: ''
    },
    value: {
      type: String,
      required: false,
      default: ''
    },
    checked: String
  },
  model: {
    prop: 'checked',
    event: 'change'
  },
  data () {
    return {
      isChecked: false
    }
  }
}
</script>

<style lang="scss">
</style>
