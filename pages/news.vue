<template>
  <main class="news">
    <section class="news-page">
      <div class="container news-page__container">
        <article class="news-page__article">
          <div class="news-page__article-head">
            <h2 class="news-page__article-title">
              How Chile’s 2021 vintage looks after year of extremes
            </h2>
            <h6 class="news-page__article-subtitle">
              Frost, drought and summer heatwaves left no shortage of challenges for
              Chile’s winemakers, but there was optimism about the quality of surviving
              grapes following an extremely early harvest.
            </h6>
          </div>
          <div class="news-page__article-content">
            <div class="news-page__article-content-block">
              <figure class="news-page__article-figure">
                <img class="news-page__article-img" src="../assets/images/article-figure-1.png" alt="">
                <figcaption class="news-page__article-figcaption">
                  Vineyards in the Casablanca Valley region. Credit: Francisco Javier Ramos Rosellon / Alamy
                </figcaption>
              </figure>
              <p class="news-page__article-paragraph">Chile’s 2020 vintage won’t only be remembered as the one harvested in the shadow of coronavirus; it was also an extremely early year, with contrasting weather sending overall yields down by almost a third.

                ‘This has been one of the most challenging vintages with unique characteristics unlike any before, ’ said Eduardo Jordan, winemaker at Miguel Torres, which has vineyards all over Chile.
              </p>
            </div>
            <div class="news-page__article-content-block">
              <h6 class="news-page__article-content-subtitle">Frost</h6>
              <p class="news-page__article-paragraph">Chile’s 2020 vintage won’t only be remembered as the one harvested in the shadow of coronavirus; it was also an extremely early year, with contrasting weather sending overall yields down by almost a third.

                ‘This has been one of the most challenging vintages with unique characteristics unlike any before, ’ said Eduardo Jordan, winemaker at Miguel Torres, which has vineyards all over Chile.
              </p>
            </div>
            <div class="news-page__article-content-block">
              <h6 class="news-page__article-content-subtitle">Early harvest</h6>
              <p class="news-page__article-paragraph">‘This year the parameters for harvest dates completely changed, ’ said Jordan.

                Ripening was accelerated by the general reduction in yield following frost. Combined with a hot summer and several heat waves, harvest dates were up to a month early in some valleys.

                ‘A hot year like this can be very challenging in terms of organisation as the window for harvest is much smaller and more complex, harvesting red and white varieties at the same time, ’ said Emily Faulconer, winemaker at Viña Carmen told Decanter.com.

                ‘But in this case, it was a blessing in disguise! Even though we didn’t know at the time that we would be faced with the Coronavirus lockdown, it meant that most of our harvest was done by the time quarantine started at the end of March.’

                Chile has faced a decade-long drought, considered one of the worst in living memory. This also impacted production alongside the frost, reducing the total harvest by almost a third, according to the Chilean Association of Winemakers.
              </p>
            </div>
            <div class="news-page__article-content-block">
              <h6 class="news-page__article-content-subtitle">Success stories</h6>
              <figure class="news-page__article-figure news-page__success-stories">
                <img class="news-page__article-img" src="../assets/images/article-figure-2.png" alt="">
                <figcaption class="news-page__article-figcaption">
                  Vineyards in the Casablanca Valley region. Credit: Francisco Javier Ramos Rosellon / Alamy
                </figcaption>
              </figure>
              <p class="news-page__article-paragraph">Some varieties, notably Merlot, suffered more from the lack of water, but many winemakers were still reporting a good balance between fresh acidity and ripe fruit for most grape varieties — including Chile’s most important variety, Cabernet Sauvignon.

                Some winemakers said that varieties with more tolerance for dry conditions have performed particularly well this year.

                ‘I think this year is going to be a very good year for Mediterranean varieties including Syrah, Carignan and Monastrell, ’ said Christian Sepúlveda, winemaker at Bouchon Family Wines in Maule.
              </p>
            </div>
            <div class="news-page__article-content-block">
              <h6 class="news-page__article-content-subtitle">Amanda Barnes</h6>
              <time class="news-page__article-release-date">May 11, 2021</time>
            </div>
          </div>
        </article>
        <div class="news-page__articles">
          <v-article
            v-for="(article, id) in articles"
            :key="id"
            :title="article.title"
            :description="article.description"
            :preview="article.preview || null"
            :class="{'news-page__top-article': article.preview || null }"
          />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data () {
    return {
      articles: [
        {
          title: 'Anson: Wines where Bordeaux meets the Rhône',
          description: "Jane Anson reports on four high-profile examples, from the personal side-project of Château Latour's. Château Latour's ..."
        },
        {
          title: 'Anson: Wines where Bordeaux meets the Rhône',
          description: "Jane Anson reports on four high-profile examples, from the personal side-project of Château Latour's. Château Latour's ..."
        },
        {
          title: 'Anson: Wines where Bordeaux meets the Rhône',
          description: "Jane Anson reports on four high-profile examples, from the personal side-project of Château Latour's. Château Latour's ..."
        },
        {
          preview: require('~/assets/images/article-preview-7.png'),
          title: 'Great wines to drink at a barbecue',
          description: 'From juicy Zinfandel with burgers to rosé Champagne with salmon and Chardonnay with your BBQ chicken, here is some inspiration on the styles to choose if you’re lucky enough to have sunshine and outdoor space this weekend.'
        },
        {
          title: 'Anson: Wines where Bordeaux meets the Rhône',
          description: "Jane Anson reports on four high-profile examples, from the personal side-project of Château Latour's. Château Latour's ..."
        },
        {
          title: 'Anson: Wines where Bordeaux meets the Rhône',
          description: "Jane Anson reports on four high-profile examples, from the personal side-project of Château Latour's. Château Latour's ..."
        },
        {
          preview: require('~/assets/images/article-preview-8.png'),
          title: 'Great wines to drink at a barbecue',
          description: 'From juicy Zinfandel with burgers to rosé Champagne with salmon and Chardonnay with your BBQ chicken, here is some inspiration on the styles to choose if you’re lucky enough to have sunshine and outdoor space this weekend.'
        },
        {
          title: 'Anson: Wines where Bordeaux meets the Rhône',
          description: "Jane Anson reports on four high-profile examples, from the personal side-project of Château Latour's. Château Latour's ..."
        },
        {
          title: 'Anson: Wines where Bordeaux meets the Rhône',
          description: "Jane Anson reports on four high-profile examples, from the personal side-project of Château Latour's. Château Latour's ..."
        },
        {
          preview: require('~/assets/images/article-preview-1.png'),
          title: 'Great wines to drink at a barbecue',
          description: 'From juicy Zinfandel with burgers to rosé Champagne with salmon and Chardonnay with your BBQ chicken, here is some inspiration on the styles to choose if you’re lucky enough to have sunshine and outdoor space this weekend.'
        },
        {
          title: 'Anson: Wines where Bordeaux meets the Rhône',
          description: "Jane Anson reports on four high-profile examples, from the personal side-project of Château Latour's. Château Latour's ..."
        },
        {
          title: 'Anson: Wines where Bordeaux meets the Rhône',
          description: "Jane Anson reports on four high-profile examples, from the personal side-project of Château Latour's. Château Latour's ..."
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.news {
  padding-top: 40px;

  @media screen and (max-width: 600px) {
    padding-top: 115px;
  }
}

.news-page__container {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 40px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: auto;
  }
}

.news-page__articles {
  display: grid;
  align-content: flex-start;
  grid-gap: 10px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: auto;
  }
}

.news-page__top-article {
  @media screen and (max-width: 1024px) {
    order: -1;
  }
}

.news-page__article-title {
  font-size: 36px;
  line-height: 48px;
  font-weight: 600;
  color: $gray1;

  @media screen and (max-width: 1024px) {
    font-size: 20px;
    line-height: 30px;
  }
}

.news-page__article-subtitle {
  font-family: $Montserrat;
  font-size: 18px;
  line-height: 30px;
  margin-top: 10px;

  @media screen and (max-width: 1024px) {
    font-size: 13px;
    line-height: 24px;
  }
}

.news-page__article-content {
  display: grid;
  grid-gap: 50px;
  font-family: $Montserrat;
  margin-top: 35px;

  @media screen and (max-width: 1024px) {
    grid-gap: 35px;
    margin-top: 25px;
  }
}

.news-page__article-figure {
  padding-bottom: 15px;
}

.news-page__article-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.news-page__article-figcaption {
  font-size: 12px;
  line-height: 16px;
  font-weight: 300;
  color: $gray3;
  margin-top: 10px;
}

.news-page__article-paragraph {
  font-size: 16px;
  line-height: 26px;
  font-weight: 300;
  white-space: pre-line;
  margin-top: 15px;

  @media screen and (max-width: 1024px) {
    font-size: 13px;
    line-height: 24px;
  }
}

.news-page__article-content-subtitle {
  font-size: 20px;
  line-height: 30px;
  font-weight: 500;

  @media screen and (max-width: 1024px) {
    font-size: 18px;
  }
}

.news-page__success-stories {
  margin-top: 20px;
}

.news-page__article-release-date {
  font-family: $Montserrat;
  font-size: 13px;
  line-height: 20px;
}
</style>
