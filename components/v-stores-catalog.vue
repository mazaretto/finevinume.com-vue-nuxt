<template>
  <div class="v-stores-catalog">
    <v-page-preview v-if="updated" class="producers__page-preview" title="Producer Directory" title-center>
      <v-stores-catalog-filter
        :items="items"
        :selects="selects"
        :checked-letter="letter"
        @set-letter="letter = $event"
        @recieve-items="filteredItems = $event"
        @recieve-searched="searched = $event"
      />
    </v-page-preview>
    <div class="v-stores-catalog__main">
      <slot name="over-catalog-view"></slot>
      <v-stores-catalog-view
        :items="filteredItems"
        :properties="properties"
        :checked-letter="letter"
        :searched="searched"
        :page-name="pageName"
        @remove-letter="letter = false"
        @set-letter="letter = $event"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true
    },
    properties: {
      type: Array,
      required: true
    },
    pageName: {
      type: String,
      required: true
    },
    selects: {
      type: Array,
      required: false,
      default () {
        return []
      }
    }
  },
  mounted () {
    if (this.items) {
      this.updated = true
    }
  },
  data () {
    return {
      filteredItems: this.items,
      searched: '',
      letter: false,
      updated: false
    }
  },
  watch: {
    filteredItems (oldVal, newVal) {
      return this.$emit('callbackCount', newVal)
    }
  }
}
</script>

<style lang="scss">
.v-stores-catalog {
  display: contents;
}

.v-stores-catalog__main {
  display: flex;
  flex-direction: column;
  grid-template-columns: inherit;
}
</style>
