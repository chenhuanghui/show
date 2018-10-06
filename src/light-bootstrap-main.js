// alert('day la light-bootstrap-main.js');
// //script import
import GlobalScript from './assets/js/global'
// import Swiper from './assets/js/swiper.jquery.min.js' 
import Skrollr from './assets/js/skrollr.min.js'

// import map from './assets/js/map'
// // assset imports
import './assets/css/style.css'
import './assets/css/animate.css'
import './assets/css/swiper.min.css'
import './assets/css/font-awesome.min.css'
// /**
//  * This is the main Light Bootstrap Dashboard Vue plugin where dashboard related plugins are registerd.
//  */
export default {
  install (Vue) {
    Vue.use(GlobalScript)
    // Vue.use(Swiper)
    Vue.use(Skrollr)
  }
}

