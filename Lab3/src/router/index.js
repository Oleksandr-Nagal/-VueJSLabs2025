import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'

const Article = () => import('../pages/Article.vue')
const About = () => import('../pages/About.vue')
const NotFound = () => import('../pages/NotFound.vue')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/article/:id',
      name: 'article',
      component: Article,
      props: true
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFound
    }
  ],
  scrollBehavior() {
    return { top: 0 }
  },
  linkActiveClass: 'active-link'
})

export default router
