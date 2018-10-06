// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import jQuery from 'jquery'

window.jQuery = jQuery
window.$ = jQuery

import Vue from 'vue'
import App from './App'
import router from './router'
import LightBootstrap from './light-bootstrap-main'

Vue.config.productionTip = false

Vue.use(LightBootstrap)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
