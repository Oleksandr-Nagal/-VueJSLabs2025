<script setup>
import { useAuth } from '../../store/auth.js'

const auth = useAuth()
</script>

<template>
  <aside class="sidebar">
    <div class="sidebar-header">
      <h2 class="logo">Mini Admin</h2>
      <p class="user" v-if="auth?.user">
        {{ auth.user?.name }}<br>
        <span>{{ auth.user?.email }}</span>
      </p>
    </div>

    <nav class="sidebar-nav">
      <slot />
    </nav>

    <div class="sidebar-footer">
      <button v-if="auth" class="logout-btn" @click="auth.logout">
        Logout
      </button>
    </div>
  </aside>
</template>

<style scoped>
.sidebar {
  width: 230px;
  background: #0f172a;
  color: white;
  display: flex;
  flex-direction: column;
  padding: 16px 14px;
  box-sizing: border-box;
}
.sidebar-header {
  margin-bottom: 20px;
}
.logo {
  margin: 0 0 4px;
  font-size: 1.3rem;
}
.user {
  font-size: 0.8rem;
  color: #e5e7eb;
}
.user span {
  color: #9ca3af;
}
.sidebar-nav {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.sidebar-nav :deep(a) {
  color: #e5e7eb;
  padding: 6px 10px;
  border-radius: 6px;
}
.sidebar-nav :deep(a.active-link) {
  background: #1d4ed8;
  color: white;
}
.sidebar-footer {
  margin-top: 12px;
}
.logout-btn {
  width: 100%;
  padding: 6px 10px;
  border-radius: 6px;
  border: none;
  background: #ef4444;
  color: white;
}
</style>
