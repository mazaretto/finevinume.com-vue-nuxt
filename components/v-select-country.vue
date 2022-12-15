<template>
  <select id="country" v-model="selected" name="country" @change="emitter()">
    <option
      v-for="(item, index) in countries"
      :key="index"
      :value="item.country"
    >
      {{ item.country }}
    </option>
  </select>
</template>
<script>
import { countries } from '../countries.js'
export default {
  data () {
    return {
      selected: '',
      countries
    }
  },
  methods: {
    emitter () {
      this.$emit('select', this.selected)
    }
  }
}
</script>
<style></style>
