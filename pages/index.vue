<template>
  <main class="home">
    <section class="home__preview">
      <div class="home__slider">
        <div v-swiper="sliderOptions">
          <div class="swiper-wrapper">
            <div v-for="(banner, id) in banners" :key="id" class="swiper-slide">
              <v-banner class="home__banner" :src="banner" />
            </div>
          </div>
          <div class="home__slider-pagination" />
        </div>
      </div>
      <div class="float-box home__float-box">
        <v-company-indicator
          v-for="(indicator, id) in indicators"
          :key="id"
          :src="indicator.src"
          :count="indicator.count"
          :name="indicator.name"
        />
      </div>
    </section>
    <section class="recommend">
      <div class="container">
        <span class="title title--center">We recommend</span>
        <v-products-slider :products="products1" />
      </div>
    </section>
    <section class="about-wines">
      <div class="container about-wines__grid">
        <article class="about-wines__article">
          <span class="about-wines__cell-title">Ticket sale started for the Gathering 2021</span>
          <div class="about-wines__article-main">
            <p>
              We would like to thank all the people who joined
              us at the Gathering. It was a fantastic event!
              The vibe from the very beginning, and the smiles
              from the people walking around, who were enjoying their.
            </p>
          </div>
        </article>
        <div class="about-wines__positions about-wines__grid-row">
          <v-positions-card
            v-for="(position, id) in positions"
            :key="id"
            :icon="position.icon"
            :title="position.title"
            :subtitle="position.subtitle"
          />
        </div>
        <article class="about-wines__article">
          <span class="about-wines__cell-title">Brands</span>
          <div class="about-wines__article-main">
            <span v-for="(link, id) of links" :key="id" class="about-wines__link">
              {{ link }}
            </span>
          </div>
        </article>
        <div class="about-wines__grid-row">
          <span class="about-wines__cell-title">Vintages</span>
          <div class="about-wines__vintages">
            <div v-for="vintage in vintages" :key="vintage" class="about-wines__vintage">
              {{ vintage }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bids-orders">
      <span class="title title--center">Recent bids & orders</span>
      <div class="container bids-orders__container">
        <div class="bids-orders__regions">
          <div class="bids-orders__regions-inner">
            <v-region-button
              v-for="(region, id) in regions"
              :key="id"
              :title="region.title"
              :flag="region.flag"
              :country="region.country"
              :image="region.image"
            />
          </div>
        </div>
      </div>
      <div class="container">
        <v-products-slider class="bids-orders__slider" :products="products2" narrow />
      </div>
    </section>
    <section class="last-added-bottles">
      <div class="container">
        <span class="title title--center">Last added bottles</span>
        <v-products-slider class="last-added-bottles__slider" :products="products1" />
      </div>
    </section>
  </main>
</template>

<script>
export default {
  async asyncData ({ $axios, error }) {
    try {
      const response = await $axios.$get('http://127.0.0.1:8000/api/products')

      return {
        products: response.data
      }
    } catch (e) {
      error(e)
    }
  },
  data () {
    return {
      sliderOptions: {
        slidesPerView: 'auto',
        simulateTouch: false,
        speed: 900,
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        autoplay: {
          delay: 5000
        },
        pagination: {
          el: '.home__slider-pagination',
          bulletClass: 'home__slider-pagination-bullet',
          bulletActiveClass: 'home__slider-pagination-active-bullet'
        }
      },
      banners: [
        require('~/assets/images/banner-1.png'),
        require('~/assets/images/banner-2.png'),
        require('~/assets/images/banner-3.png'),
        require('~/assets/images/banner-4.png')
      ],
      indicators: [
        {
          src: require('~/assets/icons/indicator-bottlers.svg'),
          alt: 'bottles',
          name: 'Bottlers',
          count: 119020
        },
        {
          src: require('~/assets/icons/indicator-brands.svg'),
          alt: 'brands',
          name: 'Brands',
          count: 5409
        },
        {
          src: require('~/assets/icons/indicator-rates.svg'),
          alt: 'stars',
          name: 'Rates',
          count: 1802203
        },
        {
          src: require('~/assets/icons/indicator-reviews.svg'),
          alt: 'review',
          name: 'Reviews',
          count: 1002207
        },
        {
          src: require('~/assets/icons/indicator-collections.svg'),
          alt: 'bottles',
          name: 'Collections',
          count: 19006
        },
        {
          src: require('~/assets/icons/indicator-membres.svg'),
          alt: 'membres',
          name: 'Membres',
          count: 69011
        }
      ],
      positions: [
        {
          icon: require('~/assets/icons/positions-red-wines.svg'),
          title: 'Red wines',
          subtitle: '14062 positions'
        },
        {
          icon: require('~/assets/icons/positions-white-wines.svg'),
          title: 'White wines',
          subtitle: '14062 positions'
        },
        {
          icon: require('~/assets/icons/positions-rose-wines.svg'),
          title: 'Rose wines',
          subtitle: '14062 positions'
        },
        {
          icon: require('~/assets/icons/positions-collection.svg'),
          title: 'Wine collection',
          subtitle: 'Top 100 positions'
        }
      ],
      vintages: [
        '1976', '1987', '1995', '1996', '1997', '1998', '2004',
        '2005', '2006', '2007', '2008', '2009', '1998/99', '1999',
        '2000', '2001', '2002', '2003', '2010', '2011', '2012',
        '2013', '2014', '2015', '2016', '2017', '2018', '2019'
      ],
      links: [
        'Remoissenet Pere et Fils',
        'Domaine Chavy-Chouet',
        'Domaine Christian Confuron et Fils',
        'Hubert Lignier',
        'Remoissenet Pere et Fils',
        'Louis Jadot',
        'Domaine Chavy-Chouet',
        'Domaine Christian Confuron et Fils',
        'Hubert Lignier'
      ],
      regions: [
        {
          title: 'Bordeaux',
          flag: require('~/assets/icons/region-flag-france.svg'),
          country: 'France',
          image: require('~/assets/icons/region-map-bordeaux.svg')
        },
        {
          title: 'Burgundy',
          flag: require('~/assets/icons/region-flag-france.svg'),
          country: 'France',
          image: require('~/assets/icons/region-map-burgundy.svg')
        },
        {
          title: 'Rhone',
          flag: require('~/assets/icons/region-flag-france.svg'),
          country: 'France',
          image: require('~/assets/icons/region-map-rhone.svg')
        },
        {
          title: 'Other regions',
          flag: require('~/assets/icons/region-flag-france.svg'),
          country: 'France',
          image: require('~/assets/icons/region-other.svg')
        }
      ],
      articles: [
        {
          preview: require('~/assets/images/article-preview-1.png'),
          title: 'Bordeaux wine consultants in lockdown: ‘We have to adapt’',
          description: 'From juicy Zinfandel with burgers to rosé Champagne with salmon and Chardonnay with your BBQ chicken, here is some'
        },
        {
          preview: require('~/assets/images/article-preview-2.png'),
          title: 'Bordeaux wine consultants in lockdown: ‘We have to adapt’',
          description: 'From juicy Zinfandel with burgers to rosé Champagne with salmon and Chardonnay with your BBQ chicken, here is some'
        },
        {
          preview: require('~/assets/images/article-preview-3.png'),
          title: 'Bordeaux wine consultants in lockdown: ‘We have to adapt’',
          description: 'From juicy Zinfandel with burgers to rosé Champagne with salmon and Chardonnay with your BBQ chicken, here is some'
        },
        {
          preview: require('~/assets/images/article-preview-4.png'),
          title: 'Bordeaux wine consultants in lockdown: ‘We have to adapt’',
          description: 'From juicy Zinfandel with burgers to rosé Champagne with salmon and Chardonnay with your BBQ chicken, here is some'
        },
        {
          preview: require('~/assets/images/article-preview-5.png'),
          title: 'Bordeaux wine consultants in lockdown: ‘We have to adapt’',
          description: 'From juicy Zinfandel with burgers to rosé Champagne with salmon and Chardonnay with your BBQ chicken, here is some'
        },
        {
          preview: require('~/assets/images/article-preview-6.png'),
          title: 'Bordeaux wine consultants in lockdown: ‘We have to adapt’',
          description: 'From juicy Zinfandel with burgers to rosé Champagne with salmon and Chardonnay with your BBQ chicken, here is some'
        }
      ]
    }
  },
  computed: {
    products1 () {
      const products = this.products.slice()
      products.reverse()
      return products.slice(0, 20)
    },
    products2 () {
      const products = this.products.slice()
      products.reverse()
      return products.slice(0, 24)
    }
  }
}
</script>

<style lang="scss">
.home {
  padding-bottom: 80px;
}

.home__slider-pagination {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 10;
  left: 0;
  right: 0;
  bottom: 50px !important;
  transition: 0.3s opacity;

  @media screen and (max-width: 1024px) {
    bottom: 70px !important;
  }

  @media screen and (max-width: 600px) {
    bottom: 130px !important;
  }
}

.home__slider-pagination-bullet {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: 1px solid #fff;
  margin: 0 5px;
}

.home__slider-pagination-active-bullet {
  width: 10px;
  height: 10px;
  background-color: #fff;
}

.home__banner {
  height: 220px !important;

  @media screen and (max-width: 600px) {
    height: 280px !important;
  }
}

.home__float-box {
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 4px 4px rgba(#cecece, 0.2);
  z-index: 1;
  padding: {
    top: 20px !important;
    bottom: 20px !important;
  }
  margin-top: -40px;

  @media screen and (max-width: 1024px) {
    margin-top: -60px;
  }

  @media screen and (max-width: 600px) {
    display: grid;
    justify-content: space-evenly;
    grid-template-columns: repeat(3, 85px);
    grid-gap: 15px 0;
    padding: {
      left: 15px;
      right: 15px;
    }
    margin-top: -120px;

    .v-company-indicator:nth-child(-n+3) {
      padding-bottom: 20px;
      border-bottom: 1px solid $gray6;
    }
  }

  @media screen and (max-width: 414px) {
    justify-content: space-between;
  }

  @media screen and (max-width: 360px) {
    grid-template-columns: repeat(2, 85px);
    justify-content: space-evenly;

    .v-company-indicator:nth-child(-n+3) {
      padding-bottom: 0;
      border-bottom: 0;
    }
  }
}

.recommend {
  padding: 15px 0 50px;

  @media screen and (max-width: 1024px) {
    padding: 20px 0 25px;
  }
}

.about-wines {
  padding: 50px 0;
  background-color: #F7F3F0;
}

.about-wines__grid {
  display: grid;
  grid-template-columns: 380px repeat(2, 1fr);
  grid-gap: 20px 40px;

  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 30px;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}

.about-wines__cell-title {
  font-size: 20px;
  line-height: 30px;
  color: $gray1;
}

.about-wines__article-main {
  font-family: $Montserrat;
  font-size: 14px;
  line-height: 20px;
  font-weight: 300;
  margin-top: 10px;
}

.about-wines__link {
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}

.about-wines__positions {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px;

  @media screen and (max-width: 600px) {
    grid-auto-flow: row;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 15px;
  }

  @media screen and (max-width: 320px) {
    grid-template-columns: 1fr;
  }
}

.about-wines__grid-row {
  grid-column: span 2;

  @media screen and (max-width: 1280px) {
    order: 1;
  }

  @media screen and (max-width: 600px) {
    grid-column: span 1;
  }
}

.about-wines__vintages {
  display: grid;
  grid-template-columns: repeat(auto-fill, 60px);
  grid-auto-rows: 25px;
  grid-gap: 10px 4px;
  margin-top: 15px;

  @media screen and (max-width: 600px) {
    grid-gap: 2px;
  }
}

.about-wines__vintage {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  font-size: 12px;
  line-height: 20px;
  cursor: pointer;
  transition-property: box-shadow;
  transition-duration: 0.4s;

  &:hover {
    box-shadow:
      0px -4px 4px rgba(#cecece, 0.1),
      0px 4px 4px rgba(#1b1b1b, 0.1);
  }
}

.bids-orders {
  padding: 35px 0 15px;
}

.bids-orders__container {
  margin-top: 15px;

  @media screen and (max-width: 767px) {
    display: flex;
    width: 100%;
    overflow-x: scroll;
    @include noScrollbar;
    margin-top: 20px;
  }
}

.bids-orders__regions-inner {
  display: flex;
  justify-content: center;

  @media screen and (max-width: 767px) {
    padding: 0 20px;
  }
}

.bids-orders__slider {
  margin-top: 30px !important;
}

.articles {
  padding-top: 35px;
}

.articles__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

.last-added-bottles {
  padding-top: 35px
}
</style>
