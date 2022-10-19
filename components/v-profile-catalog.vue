<template>
  <div class="v-profile-catalog">
    <div class="v-profile-catalog__sorter-container">
      <div class="container">
        <div class="v-profile-catalog__sorter">
          <v-catalog-sort-button class="v-profile-catalog__sorter-name" property="name" />
          <v-catalog-sort-button
            v-for="property of properties"
            :key="property"
            :property="property"
          />
        </div>
      </div>
    </div>
    <div class="v-profile-catalog__body container">
      <template v-if="items.length">
        <slot></slot>
      </template>
      <div v-else class="v-profile-catalog__body-message">
        The list is empty, first add something to this list
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    properties: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.v-profile-catalog__head {
  grid-template-columns: inherit;

  @media screen and (max-width: 600px) {
    display: none;
  }
}

.v-profile-catalog__sorter-container {
  display: contents;
  background-color: #F2F2F2;

  @media screen and (max-width: 1024px) {
    display: block;
  }

  @media screen and (max-width: 600px) {
    display: none;
  }
}

.v-profile-catalog__sorter {
  display: grid;
  align-items: center;
  grid-template-columns: 6fr repeat(6, 1fr);
  justify-items: center;
  grid-gap: 10px;
  height: 50px;
  background-color: #F2F2F2;
  padding: {
    left: 90px;
    right: 10px;
  };

  & > span:first-child {
    justify-self: flex-start;
  }
}

.v-profile-catalog__sorter-name {
  justify-self: flex-start;
}

.v-profile-catalog__body {
  display: grid;
  grid-gap: 10px;
  margin-top: 30px;
}

.v-profile-catalog__body-message {
  text-align: center;
  font-size: 24px;
  line-height: 48px;
  margin-top: 20px;

  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }
}
</style>
