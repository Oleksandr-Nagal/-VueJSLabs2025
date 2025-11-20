<template>
  <div class="not-found">
    <h1>404</h1>
    <p>Сторінка не знайдена</p>
    <RouterLink to="/">На головну</RouterLink>
  </div>
</template>

<script setup>
</script>

<style scoped>
.not-found {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
h1 {
  font-size: 4rem;
  margin: 0;
}
</style>
