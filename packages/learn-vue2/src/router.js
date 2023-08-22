import Vue from 'vue'
import Router from 'vue-router'
import Home from './modules/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/testpage',
      name: 'testpage',
      component: resolve => require(['@/modules/testpage'], resolve)
    },
  ]
})