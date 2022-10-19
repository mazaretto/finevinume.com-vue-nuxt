<template>
  <div class="v-pagination" v-if="allPages !== 1">
    <div class="v-pagination__button v-pagination__arrow" @click="prev">
      <svg-pagination-arrow-prev class="v-pagination__button-arrow"  />
    </div>

    <div
      class="v-pagination__button"
      :class="{'v-pagination__button--active': item === currentPage}"
      v-for="(item, id) of pages"
      :key="id"
      @click="currentPage = item"
    >
      {{ (id === 1 && integer !== 0) || (id === pagesLength - 2 && integer !== lastInteger) ? '...' : item }}
    </div>

    <div class="v-pagination__button v-pagination__arrow" @click="next">
      <svg-pagination-arrow-next class="v-pagination__button-arrow" />
    </div>
  </div>
</template>

<script>
import SvgPaginationArrowNext from '~/assets/icons/pagination-arrow-next.svg?inline'
import SvgPaginationArrowPrev from '~/assets/icons/pagination-arrow-prev.svg?inline'

export default {
  props: {
    indices: {
      type: Array,
      required: true
    },
    itemsLength: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      endIndex: this.indices[1],
      pagesLength: 9,
      currentPage: 1,
      integer: 0
    }
  },
  computed: {
    pages () {
      const pages = []

      for (let i = 1; i <= this.pagesLength; i++) {
        if (pages.length === this.allPages) {
          break
        }

        switch (i) {
          case 1:
            pages.push(1)
            break
          case this.pagesLength:
            pages.push(this.allPages)
            break
          default:
            pages.push(i + this.integer)
        }
      }

      return pages
    },
    allPages () {
      return Math.ceil(this.itemsLength / this.endIndex)
    },
    lastInteger () {
      return this.allPages - this.pagesLength
    }
  },
  methods: {
    prev () {
      if (this.currentPage !== 1) {
        this.currentPage--
      }
    },
    next () {
      if (this.currentPage < this.allPages) {
        this.currentPage++
      }
    },
    setPagesLength () {
      const width = document.documentElement.clientWidth

      if (width <= 400) {
        this.pagesLength = 5
      } else if (width <= 1024) {
        this.pagesLength = 7
      }
    }
  },
  watch: {
    currentPage (page) {
      if (this.pages.length >= this.pagesLength) {
        const pageID = this.pages.findIndex(item => item === page)
        const step = pageID - (Math.floor(this.pagesLength / 2))
        const totalInteger = this.integer + step

        if (page === 1 || totalInteger <= 0) {
          this.integer = 0
        } else if (page === this.allPages || totalInteger > this.lastInteger) {
          this.integer = this.lastInteger
        } else {
          this.integer = totalInteger
        }
      }

      const endIndex = this.endIndex * page

      this.$emit('update-indices', [endIndex - this.endIndex, endIndex])
    },
    itemsLength () {
      this.currentPage = 1
    }
  },
  mounted () {
    this.setPagesLength()

    window.addEventListener('resize', this.setPagesLength)
  },
  destroyed () {
    window.removeEventListener('resize', this.setPagesLength)
  },
  components: {
    SvgPaginationArrowPrev,
    SvgPaginationArrowNext
  }
}
</script>

<style lang="scss">
.v-pagination {
  display: grid;
  justify-content: center;
  grid-auto-flow: column;
  grid-gap: 20px;

  @media screen and (max-width: 480px) {
    grid-gap: 0;
    justify-content: space-between;
  }

  @media screen and (max-width: 400px) {
    grid-gap: 10px;
    justify-content: center;
  }
}

.v-pagination__button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  background-color: #fff;
  border: 1px solid $gray3;
  color: $gray3;
  fill: $gray3;
  cursor: pointer;
  user-select: none;

  &:hover {
    border-color: $primary-color;
    color: $primary-color;
    fill: $primary-color;
  }
}

.v-pagination__button--active {
  background-color: $primary-color;
  border-color: $primary-color;
  color: #fff;
  fill: #fff;

  &:hover {
    color: #fff;
    fill: #fff;
  }
}

.v-pagination__arrow {
  @media screen and (max-width: 400px) {
    display: none;
  }
}

.v-pagination__button-arrow {
  width: 12px;
  height: 19px;
}
</style>
