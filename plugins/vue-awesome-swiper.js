import Vue from 'vue'
import { Swiper as SwiperClass, Navigation, Autoplay, Pagination, EffectFade } from 'swiper/js/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

SwiperClass.use([Navigation, Autoplay, Pagination, EffectFade])

Vue.use(getAwesomeSwiper(SwiperClass))
