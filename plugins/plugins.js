import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import WebFont from 'webfontloader'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  lazyComponent: true
})

WebFont.load({
  google: {
    families: ['Source+Sans+Pro:300,400,600,700']
  }
})