<template>
  <main class="about-us">
    <v-banner :src="require('~/assets/images/banner-5.png')" /></v-banner>
    <v-page-preview title="Our company">
      <span class="about-us__subtitle">About the whisky exchange</span>
      <p class="about-us__preview-paragraph">The Whisky Exchange (TWE) is a family business founded in 1999, and has since grown to be the internet’s number-one specialist retailer of whisky
        and other spirits, serving thousands of satisfied customers every week.

        The Whisky Exchange has flourished since the turn of the Millennium, surviving the dotcom crisis and continuing to diversify and strengthen its business.
        TWE’s remarkable growth over the past five years has been driven by genuine word-of-mouth recommendations based on our excellence of product,
        fairness of price and reliability of service.

        As a family company, we believe that these qualities are what our customers value. As a long-established leader in our field, we don’t need to use cheap
        marketing tricks to get attention. We let our hard work do the talking.

        Our philosophy is simple — we never rest on our laurels. We are constantly trying to find new products with genuine heritage and quality in all categories
        of spirits and liqueurs to add to our range, while continuing to innovate and improve our online functionality and the outstanding customer service that
        has won us a loyal and ever-expanding fanbase.

        The Whisky Exchange has won a string of industry awards, including Independent Spirits Retailer of the Year and Whisky Magazine’s Online Retailer
        of the Year.
      </p>
    </v-page-preview>
    <section class="company-info">
      <div class="container container--narrow">
        <div class="company-info__blocks">
          <div class="company-info__block">
            <div class="company-info__block-figure company-info__conference-figure">
              <img class="company-info__block-img" :src="require('~/assets/images/about-us-img.png')" alt="conference">
            </div>
            <!-- <span class="company-info__block-title">ABOUT THE WHISKY EXCHANGE</span>
            <p class="company-info__block-paragraph">The Whisky Exchange currently stocks nearly 3,500 whiskies, of which about 2,300 are single malt Scotch whiskies, with 250 bourbons available and the remainder being made up of blended Scotch, grain, Irish, Japanese and other whiskies from countries including Wales, South Africa, India, Sweden and Australia.

              In addition to this, there are more than 500 rums, around 400 vodkas, more than 550 Cognacs/Armagnacs, 400 gins, 150 Tequilas and nearly1,000 specialist liqueurs.

              In all, something in the  egion of 9,500 products are active on the site and available to order online at any given time; this number is increasing as we continue to stock the best of the thousands of new products released each year.
            </p> -->
            <div class="company-info__block-content">
              <span class="company-info__block-title">ABOUT THE WHISKY EXCHANGE</span>
              <p class="company-info__block-paragraph">The Whisky Exchange currently stocks nearly 3,500 whiskies, of which about 2,300 are single malt Scotch whiskies, with 250 bourbons available and the remainder being made up of blended Scotch, grain, Irish, Japanese and other whiskies from countries including Wales, South Africa, India, Sweden and Australia.

                In addition to this, there are more than 500 rums, around 400 vodkas, more than 550 Cognacs/Armagnacs, 400 gins, 150 Tequilas and nearly1,000 specialist liqueurs.

                In all, something in the  egion of 9,500 products are active on the site and available to order online at any given time; this number is increasing as we continue to stock the best of the thousands of new products released each year.
              </p>
            </div>
          </div>
          <div class="company-info__block company-info__address-info">
            <div class="company-info__block-figure company-info__map-figure">
              <img class="company-info__block-img" :src="require('~/assets/images/about-us-img-2.png')" alt="map">
            </div>
            <div class="company-info__block-content">
              <span class="company-info__block-title">REGISTERED OFFICE ADDRESS</span>
              <p class="company-info__block-paragraph">Speciality Drinks Limited
                Elixir House
                Whitby Avenue, Park Royal
                London
                NW10 7SF
                United Kingdom

                Company No. 4449145
                VAT Registration No. GB735785005

                Registered in England and Wales
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.about-us {
  @media screen and (max-width: 600px) {
    padding-top: 85px;
  }
}

.about-us__subtitle,
.company-info__block-title {
  font-size: 18px;
  line-height: 36px;
  color: $gray1;
  text-transform: uppercase;

  @media screen and (max-width: 1024px) {
    font-size: 14px;
    line-height: 20px;
    font-weight: 600;
  }
}

.about-us__preview-paragraph,
.company-info__block-paragraph {
  font-family: $Montserrat;
  font-size: 14px;
  line-height: 26px;
  white-space: pre-line;

  @media screen and (max-width: 1024px) {
    font-size: 13px;
    line-height: 24px;
  }
}

.company-info__block-paragraph {
  margin-top: 10px;

  @media screen and (max-width: 1024px) {
    margin-top: 15px;
  }
}

.about-us__preview-paragraph {
  margin-top: 10px;

  @media screen and (max-width: 1024px) {
    margin-top: 15px;
  }
}

.company-info {
  padding-top: 25px;
}

.company-info__blocks {
  display: grid;
  grid-gap: 50px;

  @media screen and (max-width: 1024px) {
    grid-gap: 35px;
  }
}

.company-info__block {
  border-top: 1px solid $gray6;
  padding-top: 50px;

  @media screen and (max-width: 1024px) {
    border-top: 0;
    padding-top: 0;
  }
}

.company-info__block-figure {
  width: 550px;
  float: left;
  margin-right: 30px;

  @media screen and (max-width: 1024px) {
    width: auto;
    float: none;
  }

  @media screen and (max-width: 600px) {
    margin-right: 0;
  }
}

.company-info__conference-figure {
  height: 410px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    height: 485px;
  }

  @media screen and (max-width: 767px) {
    width: 100%;
    height: auto;
  }
}

.company-info__map-figure {
  height: 332px;

  @media screen and (max-width: 1024px) {
    height: 290px;
  }
}

.company-info__block-content {
  display: contents;

  @media screen and (max-width: 1024px) {
    display: block;
    margin-top: 25px;
  }
}

.company-info__block-img {
  width: 100%;
  height: 100%;
  object-fit: contain;

  @media screen and (max-width: 1024px) {
    object-fit: cover;
  }
}

.company-info__address-info {
  @media screen and (max-width: 1024px) {
    display: flex;

    .company-info__block-content {
      min-width: 250px;
      margin-top: 0;
    }
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;

    .company-info__block-content {
      margin-top: 25px;
    }
  }
}
</style>
