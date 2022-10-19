<template>
  <div class="v-product-review">
    <div class="v-product-review__head">
      {{ review.username }}
      <span class="v-product-review__rating">
        | Rating: {{ review.count_result }} <span class="v-product-review__rating-light">\ 100</span>
      </span>
    </div>
    <div class="v-product-review__main">
      <div class="v-product-review__main-top">
        <span class="v-product-review__rating v-product-review__main-top-rating">
          Rating: {{ review.count_result }} <span class="v-product-review__rating-light">\ 100</span>
        </span>
        <time class="v-product-review__date">{{ review.created_at }}</time>
      </div>

      <v-dropdown-text class="v-product-review__comment">
        <span v-html="review.description"></span>
      </v-dropdown-text>
    </div>
  </div>
</template>

<script>
import VDropdownText from './v-dropdown-text.vue'

export default {
  name: 'VProductReview',
  props: {
    review: {
      type: Object,
      required: true
    }
  },
  components: {
    VDropdownText
  }
}
</script>

<style lang="scss">
.v-product-review {
  border: 1px solid $gray6;
  padding: 20px 30px;

  @media screen and (max-width: 1024px) {
    padding: 20px;
  }

  @media screen and (max-width: 600px) {
    padding: {
      top: 15px;
      bottom: 10px;
    }
  }
}

.v-product-review__head,
.v-product-review__rating {
  font-size: 18px;
  line-height: 26px;
  font-weight: 600;

  @media screen and (max-width: 1024px) {
    font-size: 16px;
  }
}

.v-product-review__rating {
  @media screen and (max-width: 600px) {
    display: none;
  }
}

.v-product-review__rating-light {
  color: $gray4;
}

.v-product-review__date {
  font-size: 14px;
  line-height: 26px;
  color: $gray3;

  @media screen and (max-width: 1024px) {
    font-size: 12px;
  }

  @media screen and (max-width: 360px) {
    margin-top: 5px;
  }
}

.v-product-review__main,
.v-product-review__comment {
  margin-top: 10px;

  @media screen and (max-width: 1024px) {
    margin-top: 5px;
  }
}

.v-product-review__main-top {
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 360px) {
    align-items: flex-start;
    flex-direction: column;
  }
}

.v-product-review__main-top-rating {
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
  }
}

.v-product-review__comment {
  @media screen and (max-width: 1024px) {
    font-size: 12px;
    line-height: 22px;
  }

  @media screen and (max-width: 600px) {
    margin-top: 10px;
  }
}
</style>
