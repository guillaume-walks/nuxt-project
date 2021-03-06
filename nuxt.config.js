import { productPath } from "./const/config";
import axios from 'axios'
const config = require('./.contentful.json')


const env = (process.env.DEPLOY_ENV === 'GH_PAGES') ? '/nuxt-project/' : ''
const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/nuxt-project/'
  }
} : {}
// TUTO DEMO https://css-tricks.com/simple-server-side-rendering-routing-page-transitions-nuxt-js/
// OTHER DEMO https://scotch.io/tutorials/build-a-server-side-rendered-vue-app-with-nuxtjs
// GIT{PAGES} DEPLOYMENT https://nuxtjs.org/faq/github-pages/

module.exports = {
  ...routerBase,
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_HOME: config.CTF_HOME,
    CTF_BLOG_POST_TYPE_ID: config.CTF_BLOG_POST_TYPE_ID
  },
  server: {
    port: 8000, // default: 3000
    host: 'localhost', // default: localhost, '0.0.0.0'
  },
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt-project',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: env + 'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css' },
    ]
  },
  css: [
    '@/assets/sass/main.scss',
    // '@/assets/style/custom.scss'
  ],
  plugins: [
    { src: '~/plugins/VueSlideoutPanel', ssr: false }
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: 'white' },
  /*
  ** Build configuration
  */
  build: {
    // splitChunks: {
    //   layouts: true,
    //   pages: true,
    //   commons: true
    // },
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    extend(config, { isClient }) {
      // display source map as expected
      if (isClient) {
        config.devtool = '#source-map'
      }
    }
  }
}

