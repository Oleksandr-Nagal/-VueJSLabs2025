<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="auth-wrapper">
    <div class="auth-card">
      <header class="auth-header">
        <h1 class="auth-title">{{ title }}</h1>
        <p v-if="subtitle" class="auth-subtitle">{{ subtitle }}</p>
      </header>
      <main class="auth-body">
        <slot />
      </main>
      <footer class="auth-footer">
        <slot name="footer" />
      </footer>
    </div>
  </div>
</template>

<style scoped>
.auth-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.auth-card {
  width: 360px;
  background: white;
  padding: 20px 22px;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.1);
}
.auth-header {
  margin-bottom: 16px;
}
.auth-title {
  margin: 0;
  font-size: 1.5rem;
}
.auth-subtitle {
  margin: 4px 0 0;
  color: #6b7280;
  font-size: 0.9rem;
}
.auth-body {
  margin-bottom: 10px;
}
.auth-footer {
  font-size: 0.85rem;
  color: #4b5563;
}
</style>
