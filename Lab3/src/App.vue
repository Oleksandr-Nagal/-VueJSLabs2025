<script setup>
import SiteHeader from './components/layout/SiteHeader.vue'
import SiteFooter from './components/layout/SiteFooter.vue'
import { useTheme } from './composables/useTheme'

useTheme() // ініціалізує тему і застосовує data-theme на <html>
</script>

<template>
  <div class="app-root">
    <SiteHeader />
    <main class="app-main">
      <RouterView v-slot="{ Component }">
        <Transition name="route-fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
    <SiteFooter />
  </div>
</template>

<style>
:root[data-theme='light'] {
  --bg-body: #f3f4f6;
  --bg-surface: #ffffff;
  --text-color: #111827;
  --accent-color: #2563eb;
  --accent-soft: #dbeafe;
  --border-color: #e5e7eb;
}

:root[data-theme='dark'] {
  --bg-body: #020617;
  --bg-surface: #020617;
  --text-color: #e5e7eb;
  --accent-color: #f97316;
  --accent-soft: #1f2937;
  --border-color: #1f2937;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background-color: var(--bg-body);
  color: var(--text-color);
}

.app-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.app-main {
  flex: 1;
  max-width: 960px;
  width: 100%;
  margin: 0 auto;
  padding: 16px 16px 32px;
}

/* анімація переходів між сторінками */
.route-fade-enter-from,
.route-fade-leave-to {
  opacity: 0;
  transform: translateY(8px);
}

.route-fade-enter-active,
.route-fade-leave-active {
  transition: all 0.25s ease;
}

.route-fade-enter-to,
.route-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

a {
  color: var(--accent-color);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

.active-link {
  font-weight: 600;
  text-decoration: underline;
}
</style>
