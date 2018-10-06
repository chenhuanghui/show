// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import jQuery from 'jquery'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import LightBootstrap from './light-bootstrap-main'

// require styles
import 'swiper/dist/css/swiper.css'

window.jQuery = jQuery
window.$ = jQuery

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.use(LightBootstrap)
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  methods: {
    onSlideChangeStart (currentPage) {
      console.log('onSlideChangeStart', currentPage);
    },
    onSlideChangeEnd (currentPage) {
        console.log('onSlideChangeEnd', currentPage);
    }
  }
})
