import { createRouter, createWebHistory } from 'vue-router'

import ProductsPage from '../pages/ProductsPage.vue'

const CartPage = () => import('../pages/CartPage.vue')
const ProfilePage = () => import('../pages/ProfilePage.vue')
const NotFound = () => import('../pages/NotFound.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'products', component: ProductsPage },
    { path: '/cart', name: 'cart', component: CartPage },
    { path: '/profile', name: 'profile', component: ProfilePage },
    { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound }
  ],
  scrollBehavior() {
    return { top: 0 }
  },
  linkActiveClass: 'active-link'
})

export default router
