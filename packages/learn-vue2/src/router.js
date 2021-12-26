import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from './components/Dashboard.vue'
import Hello from './components/Hello.vue'
import About from './components/About.vue'
import Grids from './components/Grids.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/photos',
      name: 'photos',
      component: Hello
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/grids',
      name: 'grids',
      component: Grids
    },
  ]
})