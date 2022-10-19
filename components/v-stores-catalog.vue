<template>
  <div class="v-stores-catalog">
    <v-page-preview class="producers__page-preview" title="Producer Directory" title-center>
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
      reuqired: true
    },
    pageName: {
      type: String,
      reuqired: true
    },
    selects: {
      type: Array,
      required: false,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      filteredItems: this.items,
      searched: '',
      letter: false
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
