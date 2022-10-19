<template>
  <div class="v-dropdown-text">
    <div class="v-dropdown-text__main" :class="{'v-dropdown-text__main--active': active}" ref="main">
      <p class="v-dropdown-text__content" ref="content">
        <slot></slot>
      </p>
    </div>
    <template v-if="isLarge">
      <transition name="dropdown-text-controlers" mode="out-in">
        <span class="v-dropdown-text__open" @click="active = true" v-if="!active">Read all text</span>
        <span class="v-dropdown-text__close" @click="active = false" v-else>Close all text</span>
      </transition>
    </template>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: false,
      isLarge: false
    }
  },
  watch: {
    active (active) {
      const main = this.$refs.main

      main.style.maxHeight = active ? this.fullHeight + 'px' : ''
    }
  },
  computed: {
    fullHeight () {
      return this.$refs.content.offsetHeight
    }
  },
  mounted () {
    this.isLarge = this.fullHeight > 78
  }
}
</script>

<style lang="scss">
$transition-duration: 0.4s;

.v-dropdown-text {
  display: flex;
  flex-direction: column;
  font-family: $Montserrat;
  font-size: 14px;
  line-height: 26px;
  white-space: pre-line;
  color: $gray3;
}

.v-dropdown-text__main,
.v-dropdown-text__preview {
  max-height: 78px;
  overflow: hidden;
}

.v-dropdown-text__main {
  position: relative;
  transition-property: max-height;
  transition-duration: $transition-duration;

  &::after {
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: calc(100% - 78px);
    background-color: #fff;
    bottom: 0;
    transition-property: opacity;
    transition-duration: $transition-duration;
  }
}

.v-dropdown-text__main--active {
  &::after {
    opacity: 0;
  }
}

.v-dropdown-text__open,
.v-dropdown-text__close {
  font-family: $Open-Sans;
  font-weight: 600;
  text-decoration: underline;
  cursor: pointer;
  color: $gray1;

  &:hover {
    text-decoration: none;
  }
}

.v-dropdown-text__open {
  margin-top: 10px;
}

.v-dropdown-text__close {
  text-transform: uppercase;
  margin: {
    top: 10px;
    left: auto;
    right: auto;
  }
}

.dropdown-text-controlers-enter,
.dropdown-text-controlers-leave-to {
  opacity: 0;
}

.dropdown-text-controlers-enter-active,
.dropdown-text-controlers-leave-active {
  transition-property: opacity;
  transition-duration: $transition-duration;
}
</style>
