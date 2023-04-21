<template>
  <div class="v-stores-catalog-view">
    <div class="v-stores-catalog-view__letters">
      <div class="v-stores-catalog-view__letters-container">
        <div class="v-stores-catalog-view__letters-container-inner">
          <span
            v-for="letter in letters"
            :key="letter"
            class="v-stores-catalog-view__letter"
            :class="{'v-stores-catalog-view__letter--active': checkedLetter === letter}"
            @click="setLetter(letter)"
          >
            {{ letter }}
          </span>
        </div>
      </div>
    </div>
    <div class="container v-stores-catalog-view__container">
      <div class="v-stores-catalog-view__head">
        <v-catalog-sort-button
          property="A-Z"
          :active="alphabetMode"
          @click="alphabetMode = !alphabetMode"
        />
        <div class="v-stores-catalog-view__head-main">
          <v-catalog-sort-button
            class="v-stores-catalog-view__sort-button"
            v-for="(property, id) of properties"
            :key="id"
            :property="property"
            :active="checkedProperty === property"
            @click="checkedProperty = checkedProperty !== property ? property : false"
          />
        </div>
      </div>
      <div v-if="filteredItems.length" class="v-stores-catalog-view__body">
        <div class="v-stores-catalog-view__body-inner">
          <div v-if="!alphabetMode && !checkedLetter" class="v-stores-catalog-view__items-list">
            <div class="v-stores-catalog-view__items-list-inner">
              <div
                v-for="(item, id) of sortItems(filteredItems)"
                :key="id"
                class="v-stores-catalog-view__item"
              >
                <nuxt-link class="v-stores-catalog-view__item-link" :to="{ name: pageName, query: { id: item.id, name: item.name } }">
                  {{ item.name }}
                </nuxt-link>
                <span
                  v-for="value in reciveValues(item)"
                  :key="value"
                  class="v-stores-catalog-view__item-value"
                >
                  {{ value }}
                </span>
              </div>
            </div>
          </div>

          <template v-else>
            <div
              v-for="(block, id) in alphabetBlocks"
              :key="id"
              class="v-stores-catalog-view__alphabet-block"
            >
              <span class="v-stores-catalog-view__big-letter">{{ block.letter }}</span>
              <div class="v-stores-catalog-view__items-list">
                <div class="v-stores-catalog-view__items-list-inner">
                  <div
                    v-for="(item, id) of sortItems(block.items)"
                    :key="id"
                    class="v-stores-catalog-view__item"
                  >
                    <nuxt-link class="v-stores-catalog-view__item-link" :to="{ name: pageName, query: { id: item.id, name: item.name }}">
                      {{ item.name }}
                    </nuxt-link>
                    <span
                      v-for="value in reciveValues(item)"
                      :key="value"
                      class="v-stores-catalog-view__item-value"
                    >
                      {{ value }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
      <div v-else class="v-stores-catalog-view__message">
        <p v-if="checkedLetter" class="v-stores-catalog-view__message-text">
          No elements starting with a letter "{{ checkedLetter.toUpperCase() }}"
        </p>
        <p v-else class="v-stores-catalog-view__message-text">
          couldn't find items with "{{ searched }}"
        </p>
      </div>
    </div>
    <the-mobile-modal :active="mobileModal === 'stores-catalog-view'">
      <span class="the-mobile-modal__title">Select:</span>
      <div class="v-stores-catalog-view__mobile-sorter">
        <v-catalog-sort-button
          property="A-Z"
          :active="alphabetModeMobile"
          @click="alphabetModeMobile = !alphabetModeMobile"
        />
        <v-catalog-sort-button
          class="v-stores-catalog-view__sort-button"
          v-for="(property, id) of properties"
          :key="id"
          :property="property"
          :active="checkedPropertyMobile === property"
          @click="checkedPropertyMobile = checkedPropertyMobile !== property ? property : false"
        />
      </div>
      <div class="buttons-container buttons-container--column buttons-container--top-auto">
        <v-button
          class="v-button--round"
          default
          @click.native="submitRestoreSettings(true)"
        >
          Enter
        </v-button>
        <span
          class="link link--center the-mobile-modal__link"
          @click="submitRestoreSettings(false)"
        >
          Close
        </span>
      </div>
    </the-mobile-modal>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

// import SvgBinoculars from '~/assets/icons/binoculars.svg?inline'

export default {
  props: {
    properties: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: false
    },
    pageName: {
      type: String,
      reuqired: true
    },
    checkedLetter: {
      type: [String, Boolean],
      required: true,
      defalt: false
    },
    searched: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      checkedProperty: false,
      checkedPropertyMobile: false,
      alphabetMode: true,
      alphabetModeMobile: false,
      letters: [
        'a', 'b', 'c', 'd', 'f',
        'g', 'h', 'i', 'j', 'k',
        'l', 'm', 'n', 'o', 'p',
        'q', 'r', 's', 't', 'u',
        'v', 'w', 'x', 'y', 'z'
      ]
    }
  },
  computed: {
    filteredItems () {
      if (this.checkedLetter) {
        return this.items.filter((item) => {
          return item.name[0].toLowerCase() === this.checkedLetter
        })
      }

      return this.items
    },
    alphabetBlocks () {
      const sortedItems = [...this.filteredItems].sort((a, b) => {
        if (a.name[0] < b.name[0]) {
          return -1
        } else if (a.name[0] > b.name[0]) {
          return 1
        } else {
          return 0
        }
      })

      const itemsGroups = []
      let firstLetter

      sortedItems.forEach((item, i, arr) => {
        if (i === 0) {
          firstLetter = item.name[0].toLowerCase()

          itemsGroups.push({
            letter: firstLetter,
            items: [item]
          })
        } else {
          const currentItemNameFirstLetter = item.name[0].toLowerCase()
          const prevItemNameFirstLetter = arr[i - 1].name[0].toLowerCase()

          if (currentItemNameFirstLetter === prevItemNameFirstLetter) {
            itemsGroups[itemsGroups.length - 1].items.push(item)
          } else {
            firstLetter = currentItemNameFirstLetter

            itemsGroups.push({
              letter: firstLetter,
              items: [item]
            })
          }
        }
      })

      return itemsGroups
    },
    ...mapGetters({
      mobileModal: 'mobile-modal/modal'
    })
  },
  methods: {
    reciveValues (item) {
      let clone = JSON.parse(JSON.stringify(item))
      delete clone.name
      delete clone.id
      const itemEntries = Object.entries(clone)
      return Object.fromEntries(itemEntries)
    },
    sortItems (items) {
      const prop = this.checkedProperty

      if (prop) {
        return [...items].sort((a, b) => {
          if (!parseInt(a[prop]) && typeof a[prop] === 'string') {
            if (a[prop] < b[prop]) {
              return -1
            } else if (a[prop] > b[prop]) {
              return 1
            } else {
              return 0
            }
          } else {
            return parseInt(b[prop]) - parseInt(a[prop])
          }
        })
      }

      return items
    },
    setLetter (letter) {
      const value = this.checkedLetter !== letter ? letter : false

      this.$emit('set-letter', value)
    },
    submitRestoreSettings (submit) {
      if (submit) {
        this.checkedProperty = this.checkedPropertyMobile
        this.alphabetMode = this.alphabetModeMobile
      } else {
        this.checkedPropertyMobile = this.checkedProperty
        this.alphabetModeMobile = this.alphabetMode
      }

      this.CHANGE_MOBILE_MODAL('stores-catalog-view')
    },
    ...mapMutations({
      CHANGE_MOBILE_MODAL: 'mobile-modal/CHANGE_MOBILE_MODAL'
    })
  },
  watch: {
    alphabetMode (alphabetMode) {
      if (alphabetMode) {
        this.$emit('remove-letter')
      }
    },
    checkedLetter (checkedLetter) {
      if (checkedLetter) {
        this.alphabetMode = false
        this.alphabetModeMobile = false
      }
    }
  }
  // components: {
  //   SvgBinoculars
  // }
}
</script>

<style lang="scss">
.v-stores-catalog-view {
  padding-top: 35px;
  grid-template-columns: inherit;
  overflow: hidden;

  @media screen and (max-width: 1024px) {
    padding-top: 15px;
  }
}

.v-stores-catalog-view__container {
  padding-left: 30px;
  grid-template-columns: inherit;

  @media screen and (max-width: 1024px) {
    padding-left: 0;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    margin-left: 20px;
  }
}

.v-stores-catalog-view__head {
  display: flex;
  justify-content: space-between;
  grid-template-columns: inherit;
  border-bottom: 1px solid $gray6;
  font-size: 18px;
  line-height: 24px;
  text-transform: uppercase;
  padding-bottom: 25px;

  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
}

.v-stores-catalog-view__body-inner,
.v-stores-catalog-view__head {
  margin-right: 30px;

  @media screen and (max-width: 1024px) {
    margin-right: 0;
  }
}

.v-stores-catalog-view__head-main {
  display: grid;
  justify-items: flex-start;
  grid-template-columns: inherit;
  grid-gap: 10px;
  width: calc(100% - 80px);

  @media screen and (max-width: 1024px) {
    width: calc(100% - 60px);
  }
}

.v-stores-catalog-view__letters {
  display: none;
  overflow-x: scroll;
  @include noScrollbar;

  @media screen and (max-width: 767px) {
    display: block;
  }
}

.v-stores-catalog-view__letters-container {
  width: 768px;
  font-size: 14px;
  line-height: 24px;
  text-transform: uppercase;
  padding: 0 calc((100% - 93.75%) / 2);

  @media screen and (max-width: 600px) {
    padding: 0 20px;
  }
}

.v-stores-catalog-view__letters-container-inner {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid $gray6;
  padding-bottom: 20px;
}

.v-stores-catalog-view__letter {
  &:hover {
    font-weight: 600;
  }
}

.v-stores-catalog-view__letter--active {
  color: $primary-color;
}

.v-stores-catalog-view__body {
  grid-template-columns: inherit;
  max-height: 1080px;
  overflow-y: scroll;
  margin-top: 30px;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: $gray6
  }

  &::-webkit-scrollbar-thumb {
    background-color: $primary-color;
  }

  @media screen and (max-width: 767px) {
    direction: rtl;
    overflow-x: hidden;
    margin-top: 25px;
  }
}

.v-stores-catalog-view__body-inner {
  margin-right: 30px;

  @media screen and (max-width: 1024px) {
    margin-right: 0;
  }

  @media screen and (max-width: 1024px) {
    direction: ltr;
  }
}

.v-stores-catalog-view__body-inner,
.v-stores-catalog-view__items-list,
.v-stores-catalog-view__items-list-inner {
  grid-template-columns: inherit;
}

.v-stores-catalog-view__items-list-inner {
  min-width: 657px;
}

.v-stores-catalog-view__alphabet-block {
  display: flex;
  justify-content: space-between;
  grid-template-columns: inherit;
  border-bottom: 1px solid $gray6;
  padding-bottom: 40px;

  &:not(:first-child) {
    padding-top: 20px;
  }

  @media screen and (max-width: 767px) {
    padding-bottom: 0;
  }
}

.v-stores-catalog-view__big-letter {
  font-size: 36px;
  line-height: 100%;
  text-transform: uppercase;
  color: $gray1;
  margin-top: 5px;

  @media screen and (max-width: 1024px) {
    font-size: 24px;
  }

  @media screen and (max-width: 767px) {
    margin-left: 17px;
    margin-top: 0;
  }
}

.v-stores-catalog-view__message {
  font-size: 24px;
  line-height: 48px;
  text-align: center;
  margin-top: 20px;

  @media screen and (max-width: 600px) {
    width: calc(100% - 40px);
  }
}

.v-stores-catalog-view__items-list {
  width: calc(100% - 80px);
  font-size: 16px;
  line-height: 30px;
  margin-left: auto;

  @media screen and (max-width: 1024px) {
    width: calc(100% - 60px);
    font-size: 12px;
    line-height: 26px;
  }

  @media screen and (max-width: 767px) {
    width: calc(100% - 105px);
    overflow-x: scroll;
    padding-bottom: 20px;
    margin-left: 80px;

    &::-webkit-scrollbar {
      height: 3px;
    }

    &::-webkit-scrollbar-track {
      background-color: $gray6;
    }

    &::-webkit-scrollbar-thumb {
      background-color: $gray5;
    }
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
}

.v-stores-catalog-view__item {
  display: grid;
  grid-template-columns: inherit;
  grid-gap: 10px;
}

.v-stores-catalog-view__item-link {
  &:hover {
    text-decoration: underline;
  }
}

.v-catalog-sort-button--active {
  color: $primary-color;
}
@media screen and (max-width: 767px) {
  .v-stores-catalog-view__items-list {
    margin-left: 15px;
  }
  .v-stores-catalog-view__alphabet-block {
    justify-content: start;
  }
  .v-stores-catalog-view__item {
    display: flex;
    justify-content: start;
    span, a {
      min-width: 100px;
      max-width: 100px;
      margin: 0 !important;
    }
  }
}
@media screen and (max-width: 767px) {
  .v-stores-catalog-view__item {
    gap: 5px;
    span, a {
      white-space: pre-wrap;
      margin: 0 !important;
    }
  }
}

</style>
