import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Iphone from '@/views/Iphone'
import Shop from '@/views/Shop'
import About from '@/views/About'
import Contact from '@/views/Contact'

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
    component: About
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
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from) {
    console.log("to =>", to)
    console.log("from =>", from)
    setTimeout(() => {
      to = window.scrollTo(0, 0)
    },900)
  }  
})

export default router
