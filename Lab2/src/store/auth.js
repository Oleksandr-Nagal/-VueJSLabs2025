import { ref, provide, inject, computed } from 'vue'

const userRef = ref(null)

export function login(email, password) {
  if (!email || !password) return false
  userRef.value = {
    id: 1,
    name: 'Admin User',
    email
  }
  return true
}

export function register({ name, email, password, confirmPassword }) {
  if (!name || !email || !password || password !== confirmPassword) {
    return false
  }
  userRef.value = {
    id: 2,
    name,
    email
  }
  return true
}

export function logout() {
  userRef.value = null
}

export function isAuthenticated() {
  return !!userRef.value
}

const AUTH_KEY = Symbol('AUTH')

export function provideAuth() {
  provide(AUTH_KEY, {
    user: computed(() => userRef.value),
    logout
  })
}

export function useAuth() {
  return inject(AUTH_KEY)
}
