<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const props = defineProps({
  id: {
    type: String,
    required: false
  }
})

const route = useRoute()
const router = useRouter()

const allUsers = [
  { id: 1, name: 'Admin User', email: 'admin@example.com', role: 'admin' },
  { id: 2, name: 'Test User', email: 'test@example.com', role: 'user' },
  { id: 3, name: 'Guest User', email: 'guest@example.com', role: 'guest' }
]

const user = computed(() => {
  const id = Number(props.id ?? route.params.id)
  return allUsers.find(u => u.id === id)
})
</script>

<template>
  <div>
    <button class="back-btn" @click="router.back()">← Назад</button>
    <div v-if="user" class="card">
      <h2>User #{{ user.id }}</h2>
      <p><b>Імʼя:</b> {{ user.name }}</p>
      <p><b>Email:</b> {{ user.email }}</p>
      <p><b>Роль:</b> {{ user.role }}</p>
    </div>
    <p v-else>Користувача не знайдено.</p>
  </div>
</template>

<style scoped>
.back-btn {
  margin-bottom: 10px;
}
.card {
  background: white;
  padding: 12px 14px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.1);
}
</style>
