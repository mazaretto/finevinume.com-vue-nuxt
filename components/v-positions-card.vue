<template>
  <div class="v-positions-card">
    <img class="v-positions-card__icon" :src="icon" alt="position">
    <span class="v-positions-card__title">{{ title }}</span>
    <span class="v-positions-card__subtitle">{{ subtitle }}</span>
  </div>
</template>

<script>
export default {
  name: 'VPositionsCard',
  props: {
    icon: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
.v-positions-card {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 140px;
  background-color: #fff;
  transition-property: box-shadow;
  transition-duration: 0.4s;

  &:hover {
    box-shadow:
      0px -4px 4px rgba(#cecece, 0.1),
      0px 4px 4px rgba(#1b1b1b, 0.1);
  }
}

.v-positions-card__title {
  font-size: 14px;
  line-height: 20px;
  color: $gray1;
  margin-top: 10px;
}

.v-positions-card__subtitle {
  font-family: $Montserrat;
  font-size: 12px;
  line-height: 20px;
  margin-top: 5px;
}
</style>
