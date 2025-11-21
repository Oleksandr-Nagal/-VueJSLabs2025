<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="footer">
    <div class="footer-inner">
      <p>© {{ new Date().getFullYear() }} Vue News. All rights reserved.</p>
      <nav class="footer-nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  border-top: 1px solid var(--border-color);
  background-color: var(--bg-surface);
}

.footer-inner {
  max-width: 960px;
  margin: 0 auto;
  padding: 12px 16px 18px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.85rem;
}

.footer-nav {
  display: flex;
  gap: 10px;
}
</style>
