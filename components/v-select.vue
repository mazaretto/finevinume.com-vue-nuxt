<template>
  <div v-click-outside="close" class="v-select" :style="{'z-index': active ? 9 : 1}">
    <input
      class="v-select__disabled-input"
      type="text"
      :name="name"
      :value="value"
      ref="input"
    >

    <div
      class="v-select__head"
      :class="{'v-select__head--invalid': invalid}"
      @click="active = !active"
    >
      <span class="v-select__placeholder" v-if="!value">{{ placeholderSort }}</span>
      <span class="v-select__placeholder" v-else>{{ value }}</span>
      <svg-select-arrow class="v-select__arrow" />
    </div>
    <div class="v-select__body" v-show="active">
      <div class="v-select__body-inner">
        <v-select-search
          class="v-select__search"
          v-if="searchOptions"
          :options="searchOptions"
          @sort-options="options = $event"
        />

        <slot :options="options"></slot>
      </div>
    </div>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

import SvgSelectArrow from '~/assets/icons/select-arrow.svg?inline'

export default {
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
    }
  },
  data () {
    return {
      active: false,
      options: this.searchOptions,
      placeholderArray: [],
      value: ''
    }
  },
  computed: {
    placeholderSort () {
      // if (!this.$props.checked.length || this.$props.checked.length === 0) {
      //   return this.placeholder
      // }
      return this.placeholder
      // let res = []
      // for (let i = 0; i < this.$props.checked.length; i++) {
      //   for (let j = 0; i < this.$props.searchOptions.length; j++) {
      //     if (this.$props.searchOptions[j].value !== undefined && this.$props.checked[i] !== this.$props.searchOptions[j].value) {
      //       continue
      //     }
      //     res.push(this.$props.checked[i])
      //   }
      // }
      // return this.$props.checked.join(', ')
    }
  },
  methods: {
    setValue (value) {
      this.value = value
    },
    close () {
      this.active = false
    }
  },
  watch: {
    value (value) {
      this.active = false
      this.$emit('select', value)
    }
  },
  directives: {
    ClickOutside
  },
  components: {
    SvgSelectArrow
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
