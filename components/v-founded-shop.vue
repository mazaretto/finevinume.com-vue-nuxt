<template>
  <div class="v-founded-shop" :class="{'v-founded-shop--logged-in': $auth.loggedIn}">
    <span class="link v-founded-shop__link">{{ shop.name }}</span>
    <span class="v-founded-shop__price">€ {{ shop.price }}</span>
    <template v-if="$auth.loggedIn">
      <svg-bell class="v-founded-shop__bell" />
      <svg-pen class="v-founded-shop__pen" />
    </template>
  </div>
</template>

<script>
import SvgBell from '~/assets/icons/bell.svg?inline'
import SvgPen from '~/assets/icons/pen.svg?inline'

export default {
  props: {
    shop: {
      type: Object,
      required: true
    }
  },
  components: {
    SvgBell,
    SvgPen
  }
}
</script>

<style lang="scss">
.v-founded-shop {
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-auto-flow: column;
  grid-gap: 10px;
  font-family: $Montserrat;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  color: $green;
  fill: $gray4;
  text-align: left;

  @media screen and (max-width: 1024px) {
    font-size: 12px;
    line-height: 18px;
  }

  @media screen and (max-width: 767px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (max-width: 600px) {
    font-size: 12px;
    line-height: 18px;
  }
}

.v-founded-shop--logged-in {
  grid-template-columns: 1fr repeat(3, auto);

  .v-founded-shop__link {
    font-size: 12px;
    line-height: 14px;

    @media screen and (max-width: 1024px) {
      font-size: 10px;
    }
  }

  .v-founded-shop__price {
    font-size: 14px;
    line-height: 24px;

    @media screen and (max-width: 1024px) {
      font-size: 12px;
    }
  }
}

.v-founded-shop__bell,
.v-founded-shop__pen {
  cursor: pointer;

  &:hover {
    fill: darken($gray4, 50%);
  }
}

.v-founded-shop__bell {
  width: 13px;
  height: 14px;
}

.v-founded-shop__pen {
  width: 14px;
  height: 14px;
}
</style>
