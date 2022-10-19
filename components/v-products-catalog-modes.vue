<template>
  <div class="products-catalog-modes">
    <svg-catalog-mode-rows
      class="products-catalog-modes__icon products-catalog-modes__rows"
      :class="{'products-catalog-modes__icon--active': !grid}"
      @click="$emit('toggle-mode', false)"
    />
    <svg-catalog-mode-grid
      class="products-catalog-modes__icon products-catalog-modes__grid"
      :class="{'products-catalog-modes__icon--active': grid}"
      @click="$emit('toggle-mode', true)"
    />
  </div>
</template>

<script>
import SvgCatalogModeRows from '~/assets/icons/catalog-mode-rows.svg?inline'
import SvgCatalogModeGrid from '~/assets/icons/catalog-mode-grid.svg?inline'

export default {
  props: {
    grid: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  components: {
    SvgCatalogModeRows,
    SvgCatalogModeGrid
  }
}
</script>

<style lang="scss">
.products-catalog-modes {
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  grid-gap: 15px;

  @media screen and (max-width: 600px) {
    display: none;
  }
}

.products-catalog-modes__icon {
  fill: $gray4;
  cursor: pointer;
}

.products-catalog-modes__icon--active {
  fill: $primary-color;
}

.products-catalog-modes__rows {
  width: 21px;
  height: 15px;
}

.products-catalog-modes__grid {
  width: 17px;
  height: 17px;
}
</style>
