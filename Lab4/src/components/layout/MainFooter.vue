<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <footer class="footer">
    <div class="footer-inner">
      <p>© {{ new Date().getFullYear() }} Vue Labs Shop</p>
      <nav class="footer-nav">
        <RouterLink :to="{ name: 'products' }">Products</RouterLink>
        <RouterLink :to="{ name: 'cart' }">Cart</RouterLink>
        <RouterLink :to="{ name: 'profile' }">Profile</RouterLink>
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
