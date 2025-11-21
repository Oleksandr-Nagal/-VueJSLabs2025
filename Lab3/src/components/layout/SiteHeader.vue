<script setup>
import { useRoute, RouterLink } from 'vue-router'
import ThemeToggle from '../ui/ThemeToggle.vue'

const route = useRoute()
</script>

<template>
  <header class="header">
    <div class="header-inner">
      <RouterLink to="/" class="logo">
        Vue News
      </RouterLink>

      <nav class="nav">
        <RouterLink
          to="/"
          class="nav-link"
          :class="{ 'nav-link--active': route.name === 'home' }"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/about"
          class="nav-link"
          :class="{ 'nav-link--active': route.name === 'about' }"
        >
          About
        </RouterLink>
      </nav>

      <ThemeToggle />
    </div>
  </header>
</template>

<style scoped>
.header {
  border-bottom: 1px solid var(--border-color);
  background-color: var(--bg-surface);
}

.header-inner {
  max-width: 960px;
  margin: 0 auto;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.logo {
  font-weight: 700;
  font-size: 1.2rem;
  color: var(--text-color);
}

.nav {
  display: flex;
  gap: 10px;
  margin-left: 16px;
  flex: 1;
}

.nav-link {
  padding: 4px 10px;
  border-radius: 999px;
  font-size: 0.95rem;
  color: var(--text-color);
  text-decoration: none;
}

.nav-link--active {
  background-color: var(--accent-soft);
  color: var(--accent-color);
}
</style>
