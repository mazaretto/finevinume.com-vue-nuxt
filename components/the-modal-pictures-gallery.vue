<template>
  <div class="overlay">
    <transition name="modal" @before-enter="open()" @after-leave="close()">
      <div v-show="active" class="v-modal">
        <div class="container v-modal__container">
          <svg-cross class="cookie-modal__close" @click="() => this.$emit('close')"/>
          <div class="gallery">
            <div v-for="(el, ind) in pictures" :key="ind" class="gallery__item">
              <img v-if="pictureNum === ind" :src="el" alt="product picture">
            </div>
            <span class="gallery__counter">{{ pictureNum + 1 }} of {{ pictures.length }}</span>
          </div>
          <div v-if="pictures.length > 1" class="ui">
            <div class="gallery__container-button">
              <button v-if="pictureNum > 0" class="ui__button ui__button--prev" @click="pictureNum--">
                <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.707082 2.12293C0.316569 2.51345 0.316575 3.14661 0.707095 3.53713L8.46286 11.2929C8.85339 11.6834 8.85339 12.3166 8.46286 12.7071L0.707096 20.4629C0.316576 20.8534 0.31657 21.4865 0.707084 21.8771L2.12283 23.2929C2.51335 23.6834 3.14653 23.6834 3.53706 23.2929L14.1228 12.7071C14.5134 12.3166 14.5134 11.6834 14.1228 11.2929L3.53706 0.70712C3.14653 0.316591 2.51335 0.316596 2.12283 0.707132L0.707082 2.12293Z" fill="#E0E0E0"/>
                </svg>
              </button>
            </div>
            <div class="gallery__container-button">
              <button
                v-if="(pictureNum + 1) < pictures.length "
                class="ui__button ui__button--next"
                @click="pictureNum++"
              >
                <svg width="15" height="24" viewBox="0 0 15 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.707082 2.12293C0.316569 2.51345 0.316575 3.14661 0.707095 3.53713L8.46286 11.2929C8.85339 11.6834 8.85339 12.3166 8.46286 12.7071L0.707096 20.4629C0.316576 20.8534 0.31657 21.4865 0.707084 21.8771L2.12283 23.2929C2.51335 23.6834 3.14653 23.6834 3.53706 23.2929L14.1228 12.7071C14.5134 12.3166 14.5134 11.6834 14.1228 11.2929L3.53706 0.70712C3.14653 0.316591 2.51335 0.316596 2.12283 0.707132L0.707082 2.12293Z" fill="#E0E0E0"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { mapMutations, mapActions } from 'vuex'
import SvgCross from '~/assets/icons/cross.svg?inline'
import SvgArrow from '~/assets/icons/arrow-modal-gallery.svg'

export default {
  components: {
    SvgCross
  },
  props: {
    active: {
      type: Boolean
    },
    pictures: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      pictureNum: 0
    }
  },
  methods: {
    ...mapMutations({
      SET_COOKIE: 'cookie/SET_COOKIE'
    }),
    watch: {
      active () {
        if (!this.active) {
          return this.close()
        }
        return this.open()
      }
    },
    open () {
      const body = document.querySelector('body')
      const padding = window.innerWidth - body.clientWidth + 'px'

      body.style.overflow = 'hidden'
      body.style.paddingRight = padding
    },
    close () {
      const body = document.querySelector('body')

      body.style.overflow = ''
      body.style.paddingRight = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.cookie-modal__close {
  border: none;
  cursor: pointer;
  width: 18px;
  height: 17px;
  z-index: 100;
  align-self: flex-end;
}

.gallery__counter {
  margin-top: 45px;
  display: block;
  text-align: center;
  width: inherit;
}
.gallery__container-button:last-child {
  display: flex;
  justify-content: end;
}

.ui {
  position: absolute;
  display: grid;
  grid-template-columns: 50% 50%;
  height: 100%;
  width: 100%;
  left: 0;
  top: 0;
  padding: inherit;
  align-items: center;
}

.ui__button {
  width: 40px;
  height: 40px;
  border: 2px solid #E0E0E0;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.ui__button--prev {
  transform: scaleX(-1);
}

.ui__button svg {
  margin-left: 3px;
}

.cookie-modal__close {
  fill: #f2f2f2;
  margin-bottom: 30px;
}

.cookie-modal__close:hover {
  fill: #bdbdbd;
}

.container {
  display: flex;
  flex-flow: column;
}

.v-modal {
  position: fixed;
  display: flex;
  background-color: rgba(#000, 0.6);
  overflow-y: hidden;
  overflow-x: hidden;
  z-index: 999;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.v-modal__container {
  padding: 25px 40px 60px 40px;
  margin: auto;
  background-color: white;
  position: relative;
}

.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.4s;
}

.gallery__item {
  display: flex;
  align-items: center;
  justify-content: center;
}

.gallery__item img {
  height: 500px;
}

.modal-enter,
.modal-leave-to {
  opacity: 0;

  .v-modal-lightbox {
    transform: translateY(200px);
  }
}

@media screen and (max-width: 768px) {
  .gallery__item img {
    max-width: 100%;
    object-fit: contain;
  }
}
</style>
