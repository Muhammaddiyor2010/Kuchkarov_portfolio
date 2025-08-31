import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Portfolio from '../views/Portfolio.vue'
import Contact from '../views/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { transition: 'fade' }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: { transition: 'slide-left' }
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: Portfolio,
    meta: { transition: 'slide-up' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: { transition: 'slide-right' }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router
