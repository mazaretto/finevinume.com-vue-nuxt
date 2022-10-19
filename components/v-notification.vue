<template>
  <div class="v-notification">
    <div class="v-notification__type" :class="{'v-notification__type--reject': notification.reject}">
      <template v-if="notification.product">
        <svg-notification-arrow v-if="notification.product.added" style="width: 24px; height: 18px" />
        <svg-notification-cross v-else style="width: 24px; height: 18px" />
      </template>
      <svg-notification-error v-else style="width: 8px; height: 24px" />
    </div>
    <div class="v-notification__main">
      <template v-if="notification.product">
        <nuxt-link :to="link" class="v-notification__link">{{ notification.product.name }}</nuxt-link>
        <span>Added to your {{ notification.product.type }}</span>
      </template>
      <span v-else>{{ notification.error }}</span>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import SvgNotificationArrow from '~/assets/icons/notification-arrow.svg?inline'
import SvgNotificationCross from '~/assets/icons/notification-cross.svg?inline'
import SvgNotificationError from '~/assets/icons/notification-error.svg?inline'

export default {
  props: {
    notification: {
      type: Object,
      required: true
    }
  },
  computed: {
    link () {
      return {
        name: 'products-id',
        params: {
          id: 1
        }
      }
    }
  },
  methods: {
    ...mapMutations({
      REMOVE_NOTIFICATION: 'notifications/REMOVE_NOTIFICATION'
    })
  },
  mounted () {
    setTimeout(() => {
      this.REMOVE_NOTIFICATION()
    }, 3000)
  },
  components: {
    SvgNotificationArrow,
    SvgNotificationCross,
    SvgNotificationError
  }
}
</script>

<style lang="scss">
.v-notification {
  display: flex;
  background-color: #fff;
  border-radius: 2px;
  box-shadow:
    0px -4px 4px rgba(206, 206, 206, 0.1),
    0px 4px 4px rgba(27, 27, 27, 0.1);
  margin: 0 0 20px auto;
}

.v-notification__type {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 70px;
  height: 70px;
  background-color: $green2;
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
  fill: #fff;
}

.v-notification__type--reject {
  background-color: $red2;
}

.v-notification__main {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  height: 70px;
  font-size: 12px;
  line-height: 18px;
  padding: 0 20px;
}

.v-notification__link {
  color: $blue;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
}
</style>
