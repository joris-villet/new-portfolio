import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Iphone from '@/views/Iphone'
import Shop from '@/views/Shop'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/iphone',
    name: 'Iphone',
    component: Iphone
  },
  {
    path: '/shop',
    name: 'Shop',
    component: Shop
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
