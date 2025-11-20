import { createRouter, createWebHistory } from 'vue-router'
import { isAuthenticated } from '../store/auth.js'

const Login = () => import('../pages/Login.vue')
const Register = () => import('../pages/Register.vue')
const NotFound = () => import('../pages/NotFound.vue')

const AdminLayout = () => import('../pages/admin/AdminLayout.vue')
const Dashboard = () => import('../pages/admin/Dashboard.vue')
const Users = () => import('../pages/admin/Users.vue')
const UserDetails = () => import('../pages/admin/UserDetails.vue')
const Reports = () => import('../pages/admin/Reports.vue')

const routes = [
  {
    path: '/',
    name: 'root',
    component: Login,
    meta: { public: true }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { public: true }
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { public: true }
  },
  {
    path: '/admin',
    component: AdminLayout,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'dashboard',
        name: 'admin-dashboard',
        component: Dashboard
      },
      {
        path: 'users',
        name: 'admin-users',
        component: Users
      },
      {
        path: 'user/:id',
        name: 'admin-user-details',
        component: UserDetails,
        props: true
      },
      {
        path: 'reports',
        name: 'admin-reports',
        component: Reports
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFound,
    meta: { public: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
  linkActiveClass: 'active-link'
})

router.beforeEach((to) => {
  if (!to.meta.public && to.meta.requiresAuth && !isAuthenticated()) {
    return { name: 'login' }
  }
})

export default router
