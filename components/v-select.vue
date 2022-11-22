<template>
  <div
    v-click-outside="close"
    class="v-select"
    :style="{ 'z-index': active ? 9 : 1 }"
  >
    <input
      ref="input"
      class="v-select__disabled-input"
      type="text"
      :name="name"
      :value="value"
    >

    <div
      class="v-select__head"
      :class="{ 'v-select__head--invalid': invalid }"
      @click="active = !active"
    >
      <span v-if="!value" class="v-select__placeholder">{{
        placeholderLocal
      }}</span>
      <span v-else class="v-select__placeholder">{{ value }}</span>
      <svg-select-arrow class="v-select__arrow" />
    </div>
    <div v-show="active" class="v-select__body">
      <div class="v-select__body-inner">
        <v-select-search
          v-if="searchOptions"
          class="v-select__search"
          :options="searchOptions"
          @sort-options="options = $event"
        />

        <slot :options="options" />
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

import SvgSelectArrow from '~/assets/icons/select-arrow.svg?inline'

export default {
  directives: {
    ClickOutside
  },
  components: {
    SvgSelectArrow
  },
  props: {
    placeholder: {
      type: String,
      required: false,
      default: 'Unknown'
    },
    searchOptions: {
      type: Array,
      required: false
    },
    name: {
      type: String,
      required: false
    },
    invalid: {
      type: Boolean,
      required: false,
      default: false
    },
    checked: {
      type: Array,
      required: true
    },
    country: {
      type: Array,
      required: true
    },
    region: {
      type: Array,
      required: true
    },
    subregion: {
      type: Array,
      required: true
    },
    deep: {
      type: Number,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      active: false,
      options: this.deepFilter(),
      value: '',
      placeholderLocal: this.placeholder
    }
  },
  watch: {
    value (value) {
      this.active = false
      this.$emit('select', value)
    },
    checked () {
      this.options = this.deepFilter()
      const slicePlaceholder = (items) => {
        if (items.length <= 2) {
          return items.join(', ')
        }
        return items.slice(0, 2).join(', ') + ', ...'
      }
      if (!this.checked.length) {
        return (this.placeholderLocal = this.placeholder)
      }
      if (this.deep === 0) {
        let tmp = (this.placeholderLocal = this.checked.filter((n) => {
          return this.country.includes(n)
        }))
        return tmp.length
          ? (this.placeholderLocal = slicePlaceholder(tmp))
          : (this.placeholderLocal = this.placeholder)
      }
      if (this.deep === 1) {
        let tmp = (this.placeholderLocal = this.checked.filter((n) => {
          return this.region.includes(n)
        }))
        return tmp.length
          ? (this.placeholderLocal = slicePlaceholder(tmp))
          : (this.placeholderLocal = this.placeholder)
      }
      if (this.deep === 2) {
        let tmp = (this.placeholderLocal = this.checked.filter((n) => {
          return this.subregion.includes(n)
        }))
        return tmp.length
          ? (this.placeholderLocal = slicePlaceholder(tmp))
          : (this.placeholderLocal = this.placeholder)
      }
      return (this.placeholderLocal = this.placeholder)
    }
  },
  methods: {
    checkItems () {
      let res = []
      for (let i = 0; i < this.items.length; i++) {
        if (!this.checked.includes(this.items[i].country)) {
          continue
        }
        res.push(this.items[i])
      }
      return res
    },
    checkItemsSub () {
      let res = []
      for (let i = 0; i < this.items.length; i++) {
        if (!this.checked.includes(this.items[i].region)) {
          continue
        }
        res.push(this.items[i])
      }
      return res
    },
    filterSubRegion (itemsChecked) {
      let res = []

      for (let i = 0; i < this.searchOptions.length; i++) {
        for (let j = 0; j < itemsChecked.length; j++) {
          if (itemsChecked[j].subregion === this.searchOptions[i].value) {
            res.push(this.searchOptions[i])
          }
        }
      }
      return res
    },
    filterRegion (itemsChecked) {
      let res = []

      for (let i = 0; i < this.searchOptions.length; i++) {
        for (let j = 0; j < itemsChecked.length; j++) {
          if (itemsChecked[j].region === this.searchOptions[i].value) {
            res.push(this.searchOptions[i])
          }
        }
      }
      return res
    },
    deepFilter () {
      let res = []
      if (this.deep === 0) {
        return (res = this.searchOptions)
      }
      if (this.deep === 1) {
        res = this.filterRegion(this.checkItems())
      }
      if (this.deep === 2) {
        res = this.filterSubRegion(this.checkItemsSub())
      }

      return res
    },
    setValue (value) {
      this.value = value
    },
    close () {
      this.active = false
    }
  }
}
</script>

<style lang="scss">
.v-select {
  position: relative;
  width: 100%;
  height: 50px;
}

.v-select__disabled-input {
  display: none;
}

.v-select--modal {
  height: 45px;

  & .v-select__head {
    border-radius: 0;
  }
}

.v-select__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  border-radius: 2px;
  border: 1px solid $gray5;
  padding: 0 $input-padding;
}

.v-select__head--invalid {
  border-color: $red;
}

.v-select__placeholder {
  color: $gray4;
}

.v-select__arrow {
  width: 14px;
  height: 11px;
  fill: $gray5;
  transform: rotateX(180deg);
}

.v-select__body {
  position: absolute;
  width: 100%;
  max-height: calc(265px + 2px);
  background-color: #fff;
  border: 1px solid $gray5;
  overflow-y: scroll;
  top: calc(100% - 2px);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background-color: $gray6;
  }

  &::-webkit-scrollbar-thumb {
    background-color: $gray5;
  }
}

.v-select__body-inner {
  padding: 20px 0;
}

.v-select__search {
  margin: 0 $input-padding;
}

.v-select__inner-list {
  display: grid;
  grid-gap: 10px;
  margin: 0 20px;
}
</style>
