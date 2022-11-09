<template >
  <div class="v-select-search">
    <svg-magnifier class="v-select-search__magnifer" />
    <input
      class="v-select-search__input"
      type="search"
      :placeholder="placeholder"
      v-model.trim="value"
    >
  </div>
</template>

<script>
import SvgMagnifier from '~/assets/icons/magnifier.svg?inline'

export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String,
      required: false,
      default: 'Search'
    }
  },
  data () {
    return {
      value: ''
    }
  },
  watch: {
    value (newValue) {
      const options = this.options.filter((option) => {
        let value

        if (typeof option === 'string') {
          value = String(option).toLowerCase()
        } else if (typeof option === 'object') {
          value = String(option.value).toLowerCase()
        }
        return value.includes(newValue.toLowerCase())
      })
      this.$emit('sort-options', options)
    }
  },
  components: {
    SvgMagnifier
  }
}
</script>

<style lang="scss">
.v-select-search {
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px solid $gray6;
  padding-bottom: 6px;
  margin-bottom: 20px;
}

.v-select-search--narrow {
  margin: 0 20px 15px;
}

.v-select-search__input {
  width: 100%;
  background-color: inherit;
  border: none;
  font-size: 14px;
  line-height: 24px;
  padding-left: 35px;
}

.v-select-search__magnifer {
  position: absolute;
  width: 16px;
  height: 16px;
  fill: $gray1;
  left: 4px;
}
</style>
