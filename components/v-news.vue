<template>
  <div class="news">
    <v-news-item v-for="(item, index) in items" v-bind:item="item" v-bind:key="index" />
  </div>
</template>
<script>
export default {
  data () {
    return {
      items: [
        {
          name: 'Bordeaux wine consultants in lockdown: ‘We have to adapt’',
          description: 'From juicy Zinfandel with burgers to rosé Champagne with salmon and Chardonnay with your BBQ chicken, here is some',
          phono: 'preview.png',
          link: 'news1'
        },
        {
          name: 'Bordeaux wine consultants in lockdown: ‘We have to adapt’',
          description: 'From juicy Zinfandel with burgers to rosé Champagne with salmon and Chardonnay with your BBQ chicken, here is some',
          phono: 'preview.png',
          link: 'news1'
        },
        {
          name: 'Bordeaux wine consultants in lockdown: ‘We have to adapt’',
          description: 'From juicy Zinfandel with burgers to rosé Champagne with salmon and Chardonnay with your BBQ chicken, here is some',
          phono: 'preview.png',
          link: 'news1'
        }
      ]
    }
  }
}
</script>
<style scoped>
.news {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  justify-content: space-between;
}

@media screen and (max-width: 600px) {
  .news {
    grid-template-columns: 1fr;
    padding-top: 0;
  }
}
</style>
