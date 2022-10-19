<template>
  <div class="v-catalog-filter-select">
    <div class="v-catalog-filter-select__head" @click="active = !active">
      <span class="v-catalog-filter-select__title">{{ title }}</span>
      <svg-select-arrow class="v-catalog-filter-select__arrow" />
      <svg-mobile-select-arrow
        class="v-catalog-filter-select__mobile-arrow"
        :class="{'v-catalog-filter-select__mobile-arrow--active': active}"
      />
    </div>

    <div v-show="active" class="v-catalog-filter-select__body">
      <v-select-search
        v-if="search"
        class="v-catalog-filter-select__search"
        :options="initialOptions"
        @sort-options="options = $event"
      />

      <div class="v-catalog-filter-select__options">
        <v-select-checkbox-option
          v-for="(option, id) of activeOptions"
          :key="id"
          :value="option.value"
          :count="option.count"
          :checked="checked"
          @change="change"
        />
      </div>

      <v-button
        class="v-catalog-filter-select__toggler"
        :class="{'v-catalog-filter-select__toggler--opened': disclosed}"
        v-show="filteredOptions.length > visibleLimit"
        @click.native="disclosed = !disclosed"
      >
        <span class="v-catalog-filter-select__toggler-text">
          {{ disclosed ? 'Close' : 'Show all' }}
        </span>
        <svg-toggler-arrow class="v-catalog-filter-select__toggler-arrow" />
      </v-button>
    </div>
  </div>
</template>

<script>
import SvgSelectArrow from '~/assets/icons/select-arrow.svg?inline'
import SvgTogglerArrow from '~/assets/icons/toggler-arrow.svg?inline'
import SvgMobileSelectArrow from '~/assets/icons/mobile-select-arrow.svg?inline'

export default {
  props: {
    title: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    search: {
      type: Boolean,
      required: false,
      default: false
    },
    property: {
      type: String,
      required: true
    },
    checked: {
      type: Array
    }
  },
  model: {
    prop: 'checked',
    event: 'change'
  },
  data () {
    return {
      initialOptions: this.getOptions(),
      options: this.getOptions(),
      visibleLimit: 4,
      active: false,
      disclosed: false
    }
  },
  computed: {
    activeOptions () {
      return this.filteredOptions.filter((option, id) => {
        return (id < this.visibleLimit) || this.disclosed
      })
    },
    filteredOptions () {
      return this.options.filter((option) => {
        return option.value
      })
    }
  },
  methods: {
    getOptions () {
      const optionsSet = new Set()
      const options = []

      for (const item of this.items) {
        optionsSet.add(item[this.property])
      }

      for (const value of optionsSet) {
        const properties = this.items.filter((product) => {
          return product[this.property] === value
        })

        options.push({
          count: properties.length,
          value
        })
      }

      return options
    },
    change (values, value) {
      this.$emit('change', values)
      this.$emit('add-remove-entry', [this.property, value])
    },
    setVisibleLimit () {
      this.visibleLimit = document.documentElement.clientWidth <= 1024 ? 6 : 4
    }
  },
  mounted () {
    this.setVisibleLimit()

    window.addEventListener('resize', this.setVisibleLimit)
  },
  destroyed () {
    window.removeEventListener('resize', this.setVisibleLimit)
  },
  components: {
    SvgSelectArrow,
    SvgTogglerArrow,
    SvgMobileSelectArrow
  }
}
</script>

<style lang="scss">
.v-catalog-filter-select__head {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px dashed $gray4;
  color: #000;
  padding: 15px 0;

  @media screen and (max-width: 1024px) {
    border-bottom: 0;
    padding: 0;
  }
}

.v-catalog-filter-select__title {
  font-size: 16px;
  line-height: 24px;
  font-weight: 600;
  color: $gray1;

  @media screen and (max-width: 1024px) {
    display: flex;
    align-items: baseline;
    width: 100%;
    color: $gray2;
    margin-right: 15px;
    font-weight: 400;

    &::after {
      content: '';
      display: block;
      flex: 1;
      border-bottom: 1px dashed $gray5;
      margin-left: 10px;
    }
  }

  @media screen and (max-width: 600px) {
    font-size: 18px;
    line-height: 36px;
    color: $gray5;

    &::after {
      display: none;
    }
  }
}

.v-catalog-filter-select__arrow {
  width: 14px;
  height: 14px;
  fill: $gray5;
  cursor: pointer;
  transform: rotateX(180deg);

  @media screen and (max-width: 600px) {
    display: none;
  }
}

.v-catalog-filter-select__mobile-arrow {
  display: none;
  width: 7px;
  height: 12px;
  fill: $gray2;

  @media screen and (max-width: 600px) {
    display: block;
  }
}

.v-catalog-filter-select__mobile-arrow--active {
  fill: $primary-color;
  transform: rotateZ(90deg);
}

.v-catalog-filter-select__body {
  display: flex;
  flex-direction: column;
  padding-top: 20px;

  @media screen and (max-width: 1024px) {
    padding-top: 15px;
  }

  @media screen and (max-width: 600px) {
    padding-top: 10px;
  }
}

.v-catalog-filter-select__search {
  @media screen and (max-width: 1024px) {
    border-bottom-color: $gray5 !important;
    margin: 0 35px;
  }

  @media screen and (max-width: 600px) {
    border-bottom-color: $gray2 !important;
    margin: 0 0 25px;
  }
}

.v-catalog-filter-select__options {
  display: grid;
  grid-gap: 10px;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px 70px;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: auto;
    max-height: none;
  }
}

// .v-catalog-filter-select__options--active {
//   max-height: none;
// }

.v-catalog-filter-select__toggler {
  background-color: inherit;
  border: none;
  font-size: 12px;
  line-height: 24px;
  color: $gray3;
  margin: 15px auto 0;

  @media screen and (max-width: 1024px) {
    margin-top: 10px;
  }

  @media screen and (max-width: 600px) {
    text-transform: uppercase;
    color: $primary-color;
    text-decoration: underline;
    margin-top: 20px;
  }
}

.v-catalog-filter-select__toggler--opened {
  & .v-catalog-filter-select__toggler-arrow {
    transform: rotateX(180deg);
  }
}

.v-catalog-filter-select__toggler-arrow {
  width: 12px;
  height: 12px;
  margin-left: 5px;
  fill: $gray4;

  @media screen and (max-width: 600px) {
    display: none;
  }
}
</style>
