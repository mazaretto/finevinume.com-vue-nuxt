<template>
  <main class="product">
    <div class="product__top container">
      <v-breadcrumbs />

      <div v-if="$auth.loggedIn" class="product__top-wishcolls">
        <v-product-wishlist
          :active="inWishlist"
          text="+ Add to Wish List"
          @togglewishcolls="toggleWishcolls"
        />
        <v-product-collection
          :active="collection"
          text="+ Add to Collection"
          @togglewishcolls="toggleWishcolls"
        />
      </div>
    </div>

    <section class="product__info">
      <div class="container product__info-container">
        <div class="product__info-main">
          <div class="product__info-head">
            <span class="product__info-title">{{ product.name }}</span>

            <div class="product__points-votes-and-ratings">
              <div class="product__points-votes">
                <v-product-points />
                <span class="product__votes">67 votes</span>
              </div>
              <div class="product__ratings">
                <div class="product__rating" v-for="(rating, id) of ['WA', 'WS', 'JR', 'JS']" :key="id">
                  <div class="product__rating-author">{{ rating }}</div>
                  <span class="product__rating-value">{{ product[rating] || 0 }}</span>
                </div>
              </div>
            </div>
          </div>

          <div v-if="$auth.loggedIn" class="product__info-wishcolls">
            <v-product-wishlist
              :active="inWishlist"
              text="+ Add to Wish List"
              @togglewishcolls="toggleWishcolls"
            />
            <v-product-collection
              :active="collection"
              text="+ Add to Collection"
              @togglewishcolls="toggleWishcolls"
            />
          </div>

          <div class="product__info-characteristics">
            <ul class="product__characteristics-list">
              <li class="product__characteristic" v-for="(characteristic, id) of characteristics" :key="id">
                <span class="product__characteristic-name">{{ characteristic.name }}</span>
                <span class="product__characteristic-value">{{ product[characteristic.property] || "Undefined" }}</span>
              </li>
            </ul>
            <v-button v-if="$auth.loggedIn" class="product__update-button v-button--uppercase">
              <svg-cogwheel class="product__update-button-icon" />
              <span class="product__update-button-text">+ add/update info</span>
            </v-button>
          </div>
        </div>

        <div class="product__info-boxes">
          <v-product-gallery :photo="product.photo" />
          <div class="product__info-box">
            <div v-if="$auth.loggedIn" class="product__overall-rating">
              <span class="product__info-box-title">Overall rating 89.40/100</span>
              <p class="product__overall-rating-notification">You have 1 rating 89</p>
              <v-button class="product__overall-rating-button v-button--uppercase">Save</v-button>
            </div>

            <span class="product__info-box-title">AVERAGE VALUE € 124,99</span>
            <div class="product__founded-shops">
              <span class="product__founded-shops-title">Found {{ shops.length }} online shops:</span>
              <div class="product__founded-shops-list">
                <v-founded-shop
                  v-for="(shop, id) in shops"
                  :key="id"
                  :shop="shop"
                />
              </div>

              <div v-if="!$auth.loggedIn" class="product__call-to-register">
                <span>Create a free Whiskybase account to view 1 additional offers and compare bottle prices of sellers all over the world</span>
                <span class="link product__call-to-register-link" @click="OPEN_MODAL('register')">Create free account</span>
              </div>

              <v-button v-else class="product__button v-button--uppercase">+ add to shoplink</v-button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="product-reviews">
      <div class="container">
        <div class="product-reviews__top">
          <button
            class="product-reviews__head-button"
            :class="{'product-reviews__head-button--active': !professionals}"
            @click="professionals = false"
          >
            Reviews
          </button>
          <button
            class="product-reviews__head-button"
            :class="{'product-reviews__head-button--active': professionals}"
            @click="professionals = true"
          >
            Reviews from professionals
          </button>
        </div>
        <div class="product-reviews__main">
          <div class="product-reviews__grid" v-if="activeReviews.length">
            <v-product-review
              v-for="(review, id) in activeReviews"
              :key="id"
              :review="review"
            />
          </div>

          <div class="product-reviews__placeholder" v-else>
            <span class="product-reviews__placeholder-text">No reviews</span>
          </div>

          <div class="product-reviews__main-buttons">
            <v-button
              v-if="currentReviews.length > step"
              default-secondary
              @click.native="onMaxLength ? limit = step : limit += step"
            >
              {{ onMaxLength ? 'Hide reviews' : 'Show More' }}
            </v-button>
            <v-button default @click.native="$auth.loggedIn ? review.modal = true : OPEN_MODAL('register')">
              Add a review
            </v-button>
          </div>
        </div>
      </div>
    </section>

    <v-modal :active="review.modal">
      <v-modal-lightbox
        class="product__review-modal"
        title="Write review"
        @close="review.modal = false"
      >
        <template #main>
          <div class="v-modal-lightbox__main-inner">
            <form class="product__review-modal-form" @submit.prevent="addReview">
              <div class="product__review-modal-rating">
                <span class="product__review-modal-rating-label">RATING:</span>
                <v-input
                  v-model="review.form.rating"
                  class="input product__review-modal-input input--small"
                  :invalid="$v.review.form.rating.$error"
                  :message="ratingErrorMessage"
                />
                <span class="product__review-modal-rating-limit">/ 100</span>
              </div>

              <v-textarea
                v-model="review.form.comment"
                class="textarea product__review-modal-textarea"
                placeholder="Write something what you want ..."
                :invalid="$v.review.form.comment.$error"
                :message="!$v.review.form.comment.required ? 'Comment is required': 'Minimal length is 10'"
              />
              <div class="buttons-container product__review-modal-form-buttons buttons-container--column">
                <span class="link link--primary-color" @click="review.modal = false">CLOSE</span>
                <v-button class="v-button--uppercase" default type="submit">Enter</v-button>
              </div>
            </form>
          </div>
        </template>
      </v-modal-lightbox>
    </v-modal>
  </main>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import { required, numeric, minValue, maxValue, minLength } from 'vuelidate/lib/validators'

import SvgCogwheel from '~/assets/icons/cogwheel.svg?inline'

export default {
  data () {
    return {
      review: {
        modal: false,
        form: {
          rating: '',
          comment: ''
        }
      },
      characteristics: [
        {
          name: 'Country',
          property: 'country'
        },
        {
          name: 'Region',
          property: 'region'
        },
        {
          name: 'Subregion',
          property: 'subregion'
        },
        {
          name: 'Owner/Producer',
          property: 'producer'
        },
        {
          name: 'Wine Types',
          property: 'wine_types'
        },
        {
          name: 'Vintage',
          property: 'vintage'
        },
        {
          name: 'Wine Styles',
          property: 'wine_styles'
        },
        {
          name: 'Grapes',
          property: 'grapes'
        },
        {
          name: 'Classification',
          property: 'classification'
        },
        {
          name: 'Strength',
          property: 'strength'
        },
        {
          name: 'Volume',
          property: 'volume'
        }
      ],
      shops: [
        {
          name: 'Buy in the Market',
          price: '129,00'
        },
        {
          name: 'Wine-Raritaten Andermann',
          price: '129,00'
        },
        {
          name: 'Elitewine',
          price: '139,00'
        }
      ],
      professionals: false,
      successModal: false,
      step: 3,
      limit: 3
    }
  },
  validations: {
    review: {
      form: {
        rating: {
          required,
          numeric,
          minValue: minValue(0),
          maxValue: maxValue(100)
        },
        comment: {
          required,
          minLength: minLength(10)
        }
      }
    }
  },
  async asyncData ({ $axios, params, error, store }) {
    try {
      const product = await $axios.$get(`https://app.finevinume.com/public/api/products/${params.id}`)
      const reviews = await $axios.$get(`https://app.finevinume.com/public/api/reviews/${params.id}`)

      const wishlist = store.getters['wishcolls/wishlist']
      const collection = store.getters['wishcolls/collection']

      const wishlistIndices = wishlist.map(item => item.product_id)
      const collectionindices = collection.map(item => item.product_id)

      return {
        product: product.data,
        reviews: reviews.data,
        inWishlist: wishlistIndices.includes(product.data.id),
        collection: collectionindices.includes(product.data.id)
      }
    } catch (e) {
      error(e)
    }
  },
  computed: {
    reqularReviews () {
      return this.reviews.filter(item => item.type_review === 0)
    },
    professionalReviews () {
      return this.reviews.filter(item => item.type_review)
    },
    currentReviews () {
      return this.professionals ? this.professionalReviews : this.reqularReviews
    },
    activeReviews () {
      return this.currentReviews.slice(0, this.limit)
    },
    onMaxLength () {
      if (this.professionals) {
        return this.activeReviews.length === this.professionalReviews.length
      } else {
        return this.activeReviews.length === this.reqularReviews.length
      }
    },
    ratingErrorMessage () {
      const rating = this.$v.review.form.rating

      if (!rating.required) {
        return 'Rating is required'
      } else if (!rating.numeric) {
        return 'Value must be numeric'
      } else if (!rating.minValue) {
        return 'To low value'
      } else {
        return 'To big value'
      }
    }
  },
  methods: {
    async toggleWishcolls (type) {
      const currentType = type ? 'inWishlist' : 'collection'

      if (!this[currentType]) {
        try {
          await this.ADD_TO_WISHCOLLS({
            product_id: this.product.id,
            type_coll: type
          })

          this[currentType] = true

          this.ADD_NOTIFICATION({
            reject: false,
            product: {
              name: this.product.name,
              type: currentType,
              added: true
            }
          })
        } catch (e) {
          this.ADD_NOTIFICATION({
            reject: true,
            error: 'Something went wrong, try add this product later'
          })
        }
      }
    },
    async addReview () {
      this.$v.review.form.$touch()

      if (!this.$v.review.form.$invalid) {
        try {
          await this.$axios.$post('reviews', {
            product_id: this.product.id,
            type_review: 0,
            count_result: this.review.form.rating,
            description: this.review.form.comment,
            count_stars: 0,
            username: this.$auth.user.name
          })

          this.review.modal = false

          const reviews = await this.$axios.$get(`https://app.finevinume.com/public/api/reviews/${this.$route.params.id}`)

          this.reviews = reviews.data
        } catch (e) {
          console.log(e)
        }
      }
    },
    ...mapActions({
      ADD_TO_WISHCOLLS: 'wishcolls/ADD_TO_WISHCOLLS'
    }),
    ...mapMutations({
      ADD_NOTIFICATION: 'notifications/ADD_NOTIFICATION',
      OPEN_MODAL: 'auth-modal/OPEN_MODAL'
    })
  },
  components: {
    SvgCogwheel
  }
}
</script>

<style lang="scss">
.product {
  padding: 40px 0 80px;

  @media screen and (max-width: 600px) {
    padding-top: 125px;
  }
}

.product__top {
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    align-items: flex-start;
    flex-direction: column;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
}

.product__top-wishcolls {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 20px;

  @media screen and (max-width: 767px) {
    margin-top: 20px;
  }

  @media screen and (max-width: 600px) {
    margin-top: 0;
  }
}

.product__wishcolls {
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  grid-gap: 35px;
  font-size: 18px;
  line-height: 20px;
}

.product__wishlist,
.product__collection {
  display: flex;
  align-items: center;
}

.product__wishlist {
  color: $yellow;
}

.product__collection {
  color: $blue;
}

.product__wishcolls-add {
  margin-left: 10px;
}

.product__info {
  padding-top: 20px;

  @media screen and (max-width: 600px) {
    padding-top: 0;
  }
}

.product__info-container {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: initial;
  }
}

.product__info-main {
  flex: 1;
  max-width: 480px;
  margin-right: 15px;
}

.product__info-main {
  @media screen and (max-width: 767px) {
    display: contents;
  }
}

.product__info-boxes {
  display: flex;
  justify-content: space-between;
  max-width: 580px;
  flex: 1;
  margin-left: auto;

  @media screen and (max-width: 767px) {
    max-width: none;
    margin: {
      top: 30px;
      left: 0;
    }
  }

  @media screen and (max-width: 413px) {
    flex-direction: column;
  }
}

.product__info-box {
  width: 280px;
  border: 1px solid $gray6;
  text-align: center;
  padding: 30px 20px;

  @media screen and (max-width: 1024px) {
    width: 230px;
    padding: 25px 15px;
  }

  @media screen and (max-width: 767px) {
    flex: 1;
    min-width: 320px;
    padding: 30px 20px;
  }

  @media screen and (max-width: 600px) {
    min-width: 230px;
    padding: 25px 15px;
  }

  @media screen and (max-width: 413px) {
    width: 100%;
  }
}

.product__overall-rating {
  margin-bottom: 40px;
}

.product__overall-rating-notification {
  font-family: $Montserrat;
  font-size: 14px;
  line-height: 24px;
  margin-top: 15px;

  @media screen and (max-width: 1024px) {
    margin-top: 10px;
  }
}

.product__overall-rating-button {
  width: 100%;
  @include button($green, false, 4px);
  margin-top: 15px;

  @media screen and (max-width: 1024px) {
    margin-top: 25px;
  }
}

.product__info-title {
  font-size: 24px;
  line-height: 150%;
  color: $gray1;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }

  @media screen and (max-width: 767px) {
    font-size: 24px;
  }

  @media screen and (max-width: 600px) {
    font-size: 20px;
  }
}

.product__name {
  font-size: 24px;
  line-height: 150%;
  text-transform: uppercase;
  color: $gray1;
}

.product__points-votes-and-ratings {
  margin-top: 15px;

  @media screen and (max-width: 767px) {
    display: flex;
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
}

.product__points-votes {
  display: flex;
  align-items: center;
  font-size: 18px;
  line-height: 20px;
  font-weight: 600;

  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
}

.product__votes {
  color: $green;
  margin-left: 20px;
}

.product__ratings {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px;
  width: fit-content;
  margin-top: 25px;

  @media screen and (max-width: 1024px) {
    margin-top: 15px;
  }

  @media screen and (max-width: 767px) {
    margin: {
      top: 0;
      left: 50px;
    }
  }

  @media screen and (max-width: 600px) {
    margin: {
      top: 15px;
      left: 0;
    }
  }
}

.product__rating {
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 20px;
}

.product__rating-author {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border: 1px solid $gray2;
  border-radius: 50%;
  text-transform: uppercase;
}

.product__rating-value {
  margin-left: 5px;
}

.product__info-wishcolls {
  display: none;
  align-items: baseline;
  grid-template-columns: minmax(0, 180px) minmax(160px, 1fr);
  grid-gap: 10px;
  font-size: 18px;
  line-height: 20px;
  margin-top: 25px;
  order: 2;

  @media screen and (max-width: 600px) {
    display: grid;
  }

  @media screen and (max-width: 413px) {
    grid-template-columns: 1fr;
    grid-gap: 20px;
  }
}

.product__info-characteristics {
  margin-top: 15px;

  @media screen and (max-width: 1024px) {
    margin-top: 30px;
  }

  @media screen and (max-width: 767px) {
    order: 2;
  }
}

.product__characteristics-list {
  font-family: $Montserrat;
  font-size: 16px;
  line-height: 36px;

  @media screen and (max-width: 1024px) {
    font-size: 12px;
    line-height: 26px;
  }

  @media screen and (max-width: 1024px) {
    font-size: 16px;
    line-height: 36px;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;
    line-height: 26px;
  }
}

.product__characteristic {
  display: grid;
  align-items: baseline;
  grid-template-columns: minmax(0, 180px) minmax(160px, 1fr);
  grid-gap: 20px;

  @media screen and (max-width: 1024px) {
    grid-gap: 10px;
  }

  @media screen and (max-width: 767px) {
    grid-template-columns: minmax(0, 270px) minmax(320px, 1fr);
    grid-gap: 20px;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }
}

.product__characteristic-name {
  display: flex;
  align-items: baseline;

  &::after {
    content: "";
    flex: 1;
    border-bottom: 1px dotted $gray2;
    margin-left: 5px;
  }
}

.product__characteristic-value {
  font-weight: 500;
  color: $primary-color;
}

.product__update-button {
  width: 100%;
  max-width: 480px;
  @include button($gray2, true);
  border-radius: 4px;
  margin-top: 20px;

  @media screen and (max-width: 1024px) {
    font-size: 14px;
  }

  @media screen and (max-width: 767px) {
    font-size: 16px;
  }

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }
}

.product__update-button-icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
}

.product__info-box-title {
  font-size: 24px;
  line-height: 150%;
  color: $gray1;
  text-transform: uppercase;

  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }

  @media screen and (max-width: 767px) {
    font-size: 24px;
  }

  @media screen and (max-width: 600px) {
    font-size: 18px;
  }
}

.product__founded-shops {
  font-family: $Montserrat;
  margin-top: 15px;

  @media screen and (max-width: 1024px) {
    margin-top: 20px;
  }
}

.product__founded-shops-title {
  font-size: 14px;
  line-height: 24px;
}

.product__founded-shops-list {
  display: grid;
  grid-gap: 10px;
  margin-top: 35px;

  @media screen and (max-width: 1024px) {
    // font-size: 12px;
    // line-height: 18px;
    margin-top: 20px;
  }

  @media screen and (max-width: 767px) {
    // font-size: inherit;
    // line-height: 24px;
    margin-top: 35px;
  }

  @media screen and (max-width: 600px) {
    grid-gap: 5px;
    // font-size: 12px;
    // line-height: 18px;
    margin-top: 20px;
  }
}

.product__call-to-register {
  display: flex;
  flex-direction: column;
  font-family: $Montserrat;
  font-size: 12px;
  line-height: 20px;
  margin-top: 40px;

  @media screen and (max-width: 1024px) {
    margin-top: 20px;
  }

  @media screen and (max-width: 767px) {
    margin-top: 40px;
  }

  @media screen and (max-width: 600px) {
    margin-top: 20px;
  }
}

.product__call-to-register-link {
  font-size: 14px;
  line-height: 24px;
  color: $primary-color;
  margin-top: 20px;
}

.product__button {
  width: 100%;
  @include button($green, true, 4px);
  font-family: $Open-Sans;
  margin-top: 35px;

  @media screen and (max-width: 1024px) {
    font-size: 14px;
    margin-top: 25px;
  }
}

.product-reviews {
  padding-top: 50px;
}

.product-reviews__top {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;
  border: 1px solid $gray6;
  background-color: $gray6;
  grid-gap: 1px;
}

.product-reviews__head-button {
  height: 60px;
  background-color: #fff;
  font-size: 18px;
  line-height: 200%;
  text-transform: uppercase;
  border: 1px solid $gray6 !important;
  cursor: pointer;
  color: $gray1;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;
  }
}

.product-reviews__head-button--active {
  background-color: transparent;
}

.product-reviews__main {
  border-bottom: 1px solid $gray6;
  padding-bottom: 50px;
  margin-top: 30px;
}

.product-reviews__grid {
  display: grid;
  grid-gap: 20px;
}

.product-reviews__placeholder {
  font-size: 20px;
  text-align: center;
  margin: 0 auto;
}

.product-reviews__main-buttons {
  display: grid;
  justify-content: center;
  grid-auto-flow: column;
  grid-auto-columns: 240px;
  grid-gap: 20px;
  font-size: 18px;
  margin: {
    top: 50px;
    left: auto;
    right: auto;
  }
}

.product-reviews__main-button {
  font-size: 18px;
  line-height: 26px;
  height: 55px;
}

.product-modal__form {
  border-top: 1px solid $gray6;
  padding-top: 15px;
  margin-top: 15px;
  font-size: 14px;
}

.product-modal__form-top {
  display: flex;
  align-items: center;
}

.product-modal__rating {
  display: flex;
  align-items: baseline;
}

.product-modal__rating-label {
  text-transform: uppercase;
}

.product-modal__rating-input {
  width: 60px;
  height: 40px;
  text-align: center;
  margin-left: 5px;
  padding: 0;
}

.product-modal__rating-limit {
  width: 50px;
  text-align: center;
  color: $gray4
}

.product-modal__textarea {
  width: 100%;
  height: 320px;
  font-family: $Montserrat;
  line-height: 26px;
  margin-top: 15px;
}

.product-modal__form-buttons {
  display: grid;
  align-items: center;
  justify-content: flex-end;
  grid-auto-flow: column;
  grid-gap: 30px;
  margin-top: 40px;
  font-size: 14px;
}

.product-modal__button {
  width: 180px;
}

.product__review-modal {
  .v-modal-lightbox__main {
    max-width: 780px;
  }

  .v-modal-lightbox__title {
    font-size: 18px;
  }
}

.product__review-modal-form {
  font-size: 14px;
}

.product__review-modal-input {
  width: 60px;
  height: 40px;
}

.product__review-modal-rating-label {
  margin-right: 5px;
}

.product__review-modal-rating-limit {
  color: $gray4;
  margin-left: 10px;
}

.product__review-modal-rating {
  display: flex;
  align-items: center;
}

.product__review-modal-textarea {
  font-family: $Montserrat;
  height: 320px;
  margin-top: 15px;
}

.product__review-modal-form-buttons {
  justify-content: flex-end;
  grid-template-columns: auto 180px;
  align-items: center;
  margin-top: 40px;
}
</style>
