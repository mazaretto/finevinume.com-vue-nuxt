<template>
  <div class="v-company-indicator">
    <img class="v-company-indicator__icon" :src="src" alt="indicator">
    <div class="v-company-indicator__info">
      <span class="v-company-indicator__count">{{ count }}</span>
      <span class="v-company-indicator__name">{{ name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss">
.v-company-indicator {
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
}

.v-company-indicator__icon {
  margin-right: 15px;

  @media screen and (max-width: 1024px) {
    margin-right: 0;
  }
}

.v-company-indicator__info {
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    text-align: center;
    margin-top: 3px;
  }
}

.v-company-indicator__count {
  font-family: $Montserrat;
  font-size: 16px;
  line-height: 20px;
  font-weight: 500;
  color: $gray1;

  &::after {
    content: '';
    display: block;
    width: 30px;
    height: 1px;
    background-color: #E0E0E0;
    margin-top: 2px;
  }

  @media screen and (max-width: 1024px) {
    &::after {
      margin: 4px auto 0;
    }
  }
}

.v-company-indicator__name {
  font-size: 10px;
  line-height: 14px;
  text-transform: uppercase;
  margin-top: 3px;
}
</style>
