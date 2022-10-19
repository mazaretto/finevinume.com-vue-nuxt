<template>
  <main class="store">
    <v-banner :src="require('~/assets/images/banner-4.png')" />
    <v-page-preview title="Goodwine">If you would like to find out more about our services, the team is here to help - so no matter whether you're looking for a valuation, have a collection of bottles you'd like to sell or even if you just have a query about buying whisky at auction.
      Please don't hesitate to get in touch with us.
    </v-page-preview>
    <section class="store-banner">
      <div class="container store-banner__container container--narrow">
        <div class="store-banner__grid store-banner__grid--main">
          <div class="store-banner__grid-cell">
            <img class="store-banner__photo" :src="require('~/assets/images/store-photo.png')" alt="store photo">
          </div>
          <div class="store-banner__grid-cell">
            <img class="store-banner__info-icon" :src="require('~/assets/icons/store-info-bottles.svg')" alt="bottles">
            <span class="store-banner__info-title">Wines 1.000.00+</span>
            <div class="store-banner__info-list">
              <ul class="store-banner__info-list-inner">
                <li class="store-banner__info-list-item">Country - UNITED KINGDOM</li>
                <li class="store-banner__info-list-item">City - Basingstoke Postal</li>
                <li class="store-banner__info-list-item">code - EC1Y 8SY</li>
                <li class="store-banner__info-list-item">Street name - Old Common Rd, 23</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="store-banner__grid store-banner__grid--bottom">
          <div class="store-banner__grid-cell">
            <div class="store-banner__bottom-link">
              <svg-store-banner-site class="store-banner__grid-cell-icon" />
              <a href="#">http://goodwine.ua</a>
            </div>
          </div>
          <div class="store-banner__grid-cell">
            <div class="store-banner__bottom-link">
              <svg-store-banner-mail class="store-banner__grid-cell-icon" />
              <a href="#">goodwine@gmail.com</a>
            </div>
          </div>
          <div class="store-banner__grid-cell">
            <div class="store-banner__bottom-link">
              <svg-store-banner-phone class="store-banner__grid-cell-icon" />
              <a href="#">(044) 390 79 62</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import SvgStoreBannerSite from '~/assets/icons/store-banner-site.svg?inline'
import SvgStoreBannerMail from '~/assets/icons/store-banner-mail.svg?inline'
import SvgStoreBannerPhone from '~/assets/icons/store-banner-phone.svg?inline'

export default {
  components: {
    SvgStoreBannerSite,
    SvgStoreBannerMail,
    SvgStoreBannerPhone
  }
}
</script>

<style lang="scss">
.store {
  padding-bottom: 80px;
}

.store-banner {
  padding-top: 30px;
}

.store-banner__container {
  padding-bottom: 40px;
  border-bottom: 1px solid $gray6;
}

.store-banner__photo {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.store-banner__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1px;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
}

.store-banner__grid--main {
  background-color: $gray6;
  border: 1px solid $gray6;
  border-bottom: 0;

  .store-banner__grid-cell {
    height: 440px;
    flex-direction: column;
    background-color: #fff;

    &:first-child {
      grid-column: span 2;
    }
  }

  @media screen and (max-width: 1024px) {
    .store-banner__grid-cell {
      height: 245px;
    }
  }
}

.store-banner__info-icon {
  width: 50px;
  height: auto;
}

.store-banner__grid--bottom {
  background-color: $gray5;
  border: 1px solid $gray5;

  .store-banner__grid-cell {
    height: 50px;
    background-color: #F7F3F0;
    font-size: 18px;
    line-height: 24px;
  }

  @media screen and (max-width: 1024px) {
    .store-banner__grid-cell {
      font-size: 14px;
      line-height: 20px;
    }
  }
}

.store-banner__grid-cell {
  display: flex;
  align-items: center;
  justify-content: center;
}

.store-banner__bottom-link {
  display: flex;
  align-items: center;

  @media screen and (max-width: 600px) {
    width: 190px
  }

  @media screen and (max-width: 320px) {
    justify-content: center;
    width: 100%;
  }
}

.store-banner__grid-cell-icon {
  width: 24px;
  height: 24px;
  fill: $gray1;
  margin-right: 20px;

  @media screen and (max-width: 1024px) {
    margin-right: 15px;
  }
}

.store-banner__info-title {
  font-size: 18px;
  line-height: 24px;
  font-weight: 600;
  color: $gray1;
  text-transform: uppercase;
  margin-top: 20px;

  @media screen and (max-width: 1024px) {
    font-size: 14px;
    line-height: 20px;
    margin-top: 15px;
  }
}

.store-banner__info-list {
  height: 165px;
  margin-top: 20px;

  @media screen and (max-width: 1024px) {
    height: 110px;
    margin-top: 10px;
  }
}

.store-banner__info-list-inner {
  font-size: 14px;
  line-height: 24px;
  font-weight: 600;
  text-align: center;

  @media screen and (max-width: 1024px) {
    font-size: 12px;
    line-height: 18px;
  }
}
</style>
