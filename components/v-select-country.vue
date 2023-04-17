<template>
  <select id="country" ref="selected" name="country" @change="emitter()">
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
import { countries } from '@/countries'

export default {
  data () {
    return {
      selected: '',
      countries
    }
  },
  mounted () {
    this.$emit('select', countries[0].country)
  },
  methods: {
    emitter () {
      this.$emit('select', this.$refs.selected.value)
    }
  }
}
</script>
<style></style>
