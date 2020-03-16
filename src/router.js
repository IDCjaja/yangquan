import Vue from 'vue'
import Router from 'vue-router'
import * as pages from './views/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/yqfw',
  routes: [
    {
      name: '',
      path: '/',
      component: pages.vis,
    },
    {
      name: 'vis',
      path: '/vis',
      component: pages.vis,
    },
  ],
})
