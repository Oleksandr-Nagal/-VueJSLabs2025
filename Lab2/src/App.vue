<template>
  <div class="app-root">
    <RouterView />
  </div>
</template>

<script setup>
</script>

<style>
body {
  margin: 0;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}
.app-root {
  min-height: 100vh;
  background: #f3f4f6;
}
a {
  text-decoration: none;
}
.active-link {
  font-weight: 600;
  text-decoration: underline;
}
button {
  cursor: pointer;
}
</style>
