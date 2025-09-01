import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Products from '../views/Products.vue'
import About from '../views/About.vue'
import Cart from '../views/Cart.vue'
import Contact from '../views/contact.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/products', name: 'products', component: Products },
  { path: '/about', name: 'about', component: About },
  { path: '/cart', name: 'cart', component: Cart },
  { path: '/contact', name: 'contact', component: Contact },
  // 404 بسيطة (اختياري)
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
