<script setup>
import MainHeader from './components/layout/MainHeader.vue'
import MainFooter from './components/layout/MainFooter.vue'
</script>

<template>
  <div class="app-root">
    <MainHeader />

    <main class="app-main">
      <RouterView v-slot="{ Component }">
        <Transition name="route-fade" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <MainFooter />
  </div>
</template>

<style>
:root {
  --bg-body: #f3f4f6;
  --bg-surface: #ffffff;
  --border-color: #e5e7eb;
  --text-color: #111827;
  --accent-color: #2563eb;
  --accent-soft: #dbeafe;
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
  padding: 16px;
}



a {
  color: var(--accent-color);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}


</style>
