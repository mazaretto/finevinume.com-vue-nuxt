<template>
  <div class="v-product-gallery">
    <div class="v-product-gallery__main">
      <div class="v-product-gallery__main-photo">
        <img class="v-product-gallery__img" :src="`https://asd777.ru/storage/${photo}`" alt="bottle">
      </div>
    </div>
    <div class="v-product-gallery__bottom">
      <div class="v-product-gallery__bottom-cell">
        <img class="v-product-gallery__img" :src="require('~/assets/images/empty-bottle.png')" alt="bottle">
      </div>
      <div class="v-product-gallery__bottom-cell">
        <img class="v-product-gallery__img" :src="require('~/assets/images/empty-bottle.png')" alt="bottle">
      </div>
      <div class="v-product-gallery__bottom-cell">
        <img class="v-product-gallery__img" :src="require('~/assets/images/empty-bottle.png')" alt="bottle">
      </div>
    </div>
    <div class="v-product-gallery__add-photo">
      <svg-camera class="v-product-gallery__add-photo-icon" />
      <span class="v-product-gallery__add-photo-text">Send a photo</span>
    </div>
  </div>
</template>

<script>
import SvgCamera from '~/assets/icons/camera.svg?inline'

export default {
  name: 'VProductGallery',
  props: {
    photo: {
      type: String,
      required: true
    }
  },
  components: {
    SvgCamera
  }
}
</script>

<style lang="scss">
.v-product-gallery {
  flex: 1;
  min-width: 200px;
  max-width: 270px;
  margin-right: 30px;

  @media screen and (max-width: 1024px) {
    min-width: 145px;
    margin-right: 15px;
  }

  @media screen and (max-width: 600px) {
    margin-right: 0;
  }

  @media screen and (max-width: 413px) {
    max-width: none;
  }
}

.v-product-gallery__main {
  position: relative;
  width: 100%;
  max-height: 420px;
  padding-top: 150%;
  border: 1px solid $gray6;

  @media screen and (max-width: 600px) {
    border-right: 0;
    min-height: 260px;
  }

  @media screen and (max-width: 413px) {
    border-right: 1px solid $gray6;
    padding-top: 100%;
  }
}

.v-product-gallery__main-photo {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 10px;
  top: 0;
}

.v-product-gallery__bottom {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1px;
  background-color: $gray6;
  border: 1px solid $gray6;
  border-top: 0;

  @media screen and (max-width: 600px) {
    border-right: 0;
  }

  @media screen and (max-width: 413px) {
    border-right: 1px solid $gray6;
    border-bottom: 0;
  }
}

.v-product-gallery__bottom-cell {
  height: 100px;
  background-color: #fff;
  padding: 10px;
}

.v-product-gallery__img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.v-product-gallery__add-photo {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  @media screen and (max-width: 1024px) {
    margin-top: 10px;
  }

  @media screen and (max-width: 600px) {
    margin-top: 30px;
  }
}

.v-product-gallery__add-photo-icon {
  width: 24px;
  height: 22px;
  fill: #000;
}

.v-product-gallery__add-photo-text {
  font-size: 16px;
  line-height: 26px;
  margin-left: 10px;
  color: #000;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 1024px) {
    font-size: 14px;
    text-decoration: underline;
  }
}
</style>
