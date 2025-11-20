<script setup>
import Sidebar from '../../components/layout/Sidebar.vue'
import { provideAuth } from '../../store/auth.js'

provideAuth()
</script>

<template>
  <div class="layout">
    <Sidebar>
      <RouterLink :to="{ name: 'admin-dashboard' }">Dashboard</RouterLink>
      <RouterLink :to="{ name: 'admin-users' }">Users</RouterLink>
      <RouterLink :to="{ name: 'admin-reports' }">Reports</RouterLink>
    </Sidebar>

    <main class="content">
      <header class="content-header">
        <h1>Admin panel</h1>
      </header>
      <section class="content-body">
        <RouterView />
      </section>
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  min-height: 100vh;
}
.content {
  flex: 1;
  padding: 16px 20px;
}
.content-header {
  margin-bottom: 12px;
}
</style>
