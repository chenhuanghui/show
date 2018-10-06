import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import HomeEN from '@/components/HomeEN'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/en',
      name: 'HomeEN',
      component: HomeEN
    }
  ]
})
