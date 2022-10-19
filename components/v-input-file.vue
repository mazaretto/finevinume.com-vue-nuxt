<template>
  <div class="v-input-file">
    <input
      ref="input"
      class="v-input-file__hidden"
      type="file"
      accept="image/jpeg,image/png"
      :name="name"
      @change="addFile"
    >

    <div v-if="!files.length" class="v-input-file__placeholder">
      <img
        class="v-input-file__placeholder-img"
        src="../assets/icons/file-input-placeholder.svg"
        alt="placeholder"
      >

      <v-button
        class="v-input-file__button v-button--uppercase"
        default-secondary
        @click.native="$refs.input.click()"
      >
        + add photo
      </v-button>
    </div>

    <template v-else>
      <div class="v-input-file__slider-top">
        <span><span class="v-input-file__slider-index">{{ activeIndex + 1 }}</span>/{{ files.length }}</span>
        <div class="v-input-file__slider-remove" @click="removeFile">
          <svg-cross class="v-input-file__slider-top-cross" />
        </div>
      </div>

      <swiper
        ref="slider"
        class="v-input-file__slider"
        :options="slider"
        @slide-change="activeIndex = $refs.slider.$swiper.activeIndex"
      >
        <swiper-slide v-for="(image, id) in images" :key="id">
          <div class="v-input-file__image-figuire">
            <div class="v-input-file__image-figuire-inner">
              <div class="v-input-file__image-wrap">
                <img class="v-input-file__image" :src="image" alt="user image">
              </div>
            </div>
          </div>
        </swiper-slide>
        <div class="v-input-file__slider-prev" slot="button-prev">
          <svg-slider-prev class="v-input-file__slider-prev-arrow" />
        </div>
        <div class="v-input-file__slider-next" slot="button-next">
          <svg-slider-next class="v-input-file__slider-next-arrow" />
        </div>
      </swiper>

      <v-button
        class="v-input-file__preview-button v-button--uppercase"
        default
        @click.native="$refs.input.click()"
      >
        Add more photo
      </v-button>
    </template>
  </div>
</template>

<script>
import SvgCross from '~/assets/icons/cross.svg?inline'
import SvgSliderPrev from '~/assets/icons/slider-prev.svg?inline'
import SvgSliderNext from '~/assets/icons/slider-next.svg?inline'

export default {
  props: {
    name: {
      type: String,
      required: false,
      default: 'photo'
    }
  },
  data () {
    return {
      files: [],
      images: [],
      activeIndex: 0,
      slider: {
        slidesPerView: 'auto',
        spaceBetween: 0,
        centeredSlides: true,
        simulateTouch: false,
        navigation: {
          nextEl: '.v-input-file__slider-next',
          prevEl: '.v-input-file__slider-prev',
          disabledClass: 'v-input-file__slider-disabled'
        }
      }
    }
  },
  methods: {
    addFile () {
      const reader = new FileReader()

      if (this.$refs.input.files.length) {
        const file = this.$refs.input.files[0]

        reader.readAsDataURL(file)
        reader.onload = () => {
          this.files.push(file)
          this.images.push(reader.result)
        }
      }
    },
    removeFile () {
      this.files.splice(this.activeIndex, 1)
      this.images.splice(this.activeIndex, 1)
    }
  },
  watch: {
    files: {
      handler (files) {
        this.$emit('recieve-files', files)
      },
      deep: true
    }
  },
  components: {
    SvgCross,
    SvgSliderPrev,
    SvgSliderNext
  }
}
</script>

<style lang="scss">
.v-input-file {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid $gray5
}

.v-input-file__placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.v-input-file__hidden {
  display: none;
}

.v-input-file__button {
  width: calc(100% - 40px);
  margin-top: 30px;
}

.v-input-file__slider-top {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
  line-height: 26px;
  padding-left: 10px;
  z-index: 2;
  top: 0;
}

.v-input-file__slider-top-cross {
  width: 17px;
  height: 18px;
}

.v-input-file__slider-index {
  font-size: 20px;
}

.v-input-file__slider-remove {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: $gray6;
  width: 40px;
  height: 40px;
  fill: #fff;
  cursor: pointer;

  &:hover {
    background-color: darken($gray6, 15%);
  }
}

.v-input-file__image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.v-input-file__preview-button {
  position: absolute;
  width: calc(100% - 40px);
  bottom: 20px;
  z-index: 2;
  margin: 0 auto;
}

.v-input-file__slider,
.v-input-file__image-figuire {
  width: 100%;
  height: 100%;
}

.v-input-file__image-figuire {
  display: flex;
  align-items: center;
}

.v-input-file__image-figuire-inner {
  position: relative;
  width: 100%;
  padding-top: 100%;
}

.v-input-file__image-wrap {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
}

// .v-input-file__slider-nav {
//   position: absolute;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   width: calc(100% - 20px);
//   height: 0;
//   transform: translateY(-50%);
//   z-index: 4;
//   top: 50%;
//   left: 0;
//   right: 0;
//   margin: 0 auto;
// }

.v-input-file__slider-prev,
.v-input-file__slider-next {
  position: absolute;
  top: 50%;
  z-index: 9991;
  user-select: none;
  fill: $primary-color;
  cursor: pointer;
}

.v-input-file__slider-prev {
  left: 20px;
}

.v-input-file__slider-next {
  right: 20px;
}

.v-input-file__slider-prev-arrow,
.v-input-file__slider-next-arrow {
  width: 15px;
  height: 24px;
}

.v-input-file__slider-disabled,
.v-input-file__slider-disabled {
  fill: $gray6;
}
</style>
