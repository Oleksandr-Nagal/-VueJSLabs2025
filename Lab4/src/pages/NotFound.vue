<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="not-found">
    <h1>404</h1>
    <p>Сторінку не знайдено.</p>
    <RouterLink :to="{ name: 'products' }">На головну</RouterLink>
  </section>
</template>

<style scoped>
.not-found {
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
h1 {
  margin: 0;
  font-size: 3rem;
}
</style>
