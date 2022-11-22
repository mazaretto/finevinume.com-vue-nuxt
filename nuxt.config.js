const { extendDefaultPlugins } = require('svgo');

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Fine Vinum',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/fonts.scss',
    '~/assets/styles/reset.scss',
    '~/assets/styles/blocks.scss',
    'swiper/css/swiper.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/vue-awesome-swiper',
    '~/plugins/vuelidate',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://dev.auth.nuxtjs.org/
    '@nuxtjs/auth-next',
    // https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://127.0.0.1:8000/api'
  },

  // Auth Next module configuration: https://dev.auth.nuxtjs.org/api-index
  auth: {
    redirect: false,
    cookie: false,
    strategies: {
      local: {
        token: {
          property: 'data.api_token'
        },
        user: {
          property: 'data'
        },
        endpoints: {
          login: { url: '/auth', method: 'post' },
          user: { url: '/profile', method: 'get' },
          logout: false
        }
      }
    }
  },

  // Global style resources configuration - https://www.npmjs.com/package/@nuxtjs/style-resources
  styleResources: {
    scss: [
      '~/assets/styles/variables.scss',
      '~/assets/styles/mixins.scss'
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, { isClient, loaders: { file }}) {
      const svgRule = config.module.rules.find(rule => rule.test.test('.svg'));

      svgRule.test = /\.(png|jpe?g|gif|webp|avif)$/i

      config.module.rules.push({
        test: /\.svg$/,
        oneOf: [
          {
            resourceQuery: /inline/,
            use: [
              {
                loader: 'vue-svg-loader'
              },
              {
                loader: 'svgo-loader',
                options: {
                  multipass: true,
                  plugins: extendDefaultPlugins([
                    {
                      name: 'removeAttrs',
                      params: { attrs: 'fill' },
                      active: true
                    },
                    {
                      name: 'removeViewBox',
                      active: true
                    },
                    {
                      name: 'removeDimensions',
                      active: true
                    }
                  ])
                }
              }
            ]
          },
          {
            loader: 'url-loader',
            options: {
              esModule: false,
              limit: 1000,
              name:  'img/[name].[contenthash:7].[ext]'
            }
          }
        ]
      })
    }
  }
}
