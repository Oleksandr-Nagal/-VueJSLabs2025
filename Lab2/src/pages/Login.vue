<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AuthWrapper from '../components/layout/AuthWrapper.vue'
import BaseInput from '../components/inputs/BaseInput.vue'
import { login } from '../store/auth.js'

const router = useRouter()
const email = ref('')
const password = ref('')
const error = ref('')

function onSubmit() {
  error.value = ''
  if (!email.value || !password.value) {
    error.value = 'Заповніть всі поля'
    return
  }
  const ok = login(email.value, password.value)
  if (!ok) {
    error.value = 'Невдала авторизація'
    return
  }
  router.push({ name: 'admin-dashboard' })
}
</script>

<template>
  <AuthWrapper
    title="Login"
    subtitle="Увійдіть до міні-адмінки"
  >
    <form @submit.prevent="onSubmit">
      <BaseInput
        v-model="email"
        label="Email"
        type="email"
        name="email"
      />
      <BaseInput
        v-model="password"
        label="Пароль"
        type="password"
        name="password"
      />
      <p v-if="error" class="form-error">{{ error }}</p>
      <button type="submit" class="primary-btn">Увійти</button>
    </form>

    <template #footer>
      Немає акаунту?
      <RouterLink to="/register">Зареєструватися</RouterLink>
    </template>
  </AuthWrapper>
</template>

<style scoped>
.form-error {
  color: #dc2626;
  font-size: 0.85rem;
  margin-bottom: 6px;
}
.primary-btn {
  width: 100%;
  padding: 8px 12px;
  border-radius: 6px;
  background: #2563eb;
  border: none;
  color: white;
  font-weight: 600;
}
</style>
