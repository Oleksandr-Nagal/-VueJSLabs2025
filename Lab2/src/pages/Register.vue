<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import AuthWrapper from '../components/layout/AuthWrapper.vue'
import BaseInput from '../components/inputs/BaseInput.vue'
import { register } from '../store/auth.js'

const router = useRouter()

const name = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const error = ref('')

function onSubmit() {
  error.value = ''
  const ok = register({
    name: name.value,
    email: email.value,
    password: password.value,
    confirmPassword: confirmPassword.value
  })
  if (!ok) {
    error.value = 'Перевірте правильність заповнення полів'
    return
  }
  router.push({ name: 'admin-dashboard' })
}
</script>

<template>
  <AuthWrapper
    title="Register"
    subtitle="Створіть новий акаунт"
  >
    <form @submit.prevent="onSubmit">
      <BaseInput v-model="name" label="Імʼя" name="name" />
      <BaseInput v-model="email" label="Email" type="email" name="email" />
      <BaseInput v-model="password" label="Пароль" type="password" name="password" />
      <BaseInput
        v-model="confirmPassword"
        label="Підтвердження пароля"
        type="password"
        name="confirmPassword"
      />
      <p v-if="error" class="form-error">{{ error }}</p>
      <button type="submit" class="primary-btn">Зареєструватися</button>
    </form>

    <template #footer>
      Вже є акаунт?
      <RouterLink to="/login">Увійти</RouterLink>
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
  background: #16a34a;
  border: none;
  color: white;
  font-weight: 600;
}
</style>
