<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()

const users = ref([
  { id: 1, name: 'Admin User', email: 'admin@example.com', role: 'admin' },
  { id: 2, name: 'Test User', email: 'test@example.com', role: 'user' },
  { id: 3, name: 'Guest User', email: 'guest@example.com', role: 'guest' }
])

function openUser(user) {
  router.push({ name: 'admin-user-details', params: { id: user.id } })
}
</script>

<template>
  <div>
    <h2>Users</h2>
    <table class="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Імʼя</th>
          <th>Email</th>
          <th>Роль</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role }}</td>
          <td>
            <button @click="openUser(user)">Details</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
  background: white;
}
th, td {
  border-bottom: 1px solid #e5e7eb;
  padding: 6px 8px;
  text-align: left;
}
</style>
