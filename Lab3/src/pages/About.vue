<script setup>
import AdSlot from '../components/ads/AdSlot.vue'
</script>

<template>
  <section>
    <h1>Про нас</h1>
    <p>
      Vue News — навчальний міні-сайт для демонстрації стилізації компонентів у Vue 3,
      роботи з темами, анімаціями переходів та модальними вікнами.
    </p>
    <p>
      Цей проєкт не використовує реальний бекенд — всі новини зберігаються у локальному масиві.
      Основний фокус — структура компонентів та охайні стилі.
    </p>

    <AdSlot
      title="Партнерський матеріал"
      text="Дізнайтеся більше про Vue, Vite та сучасні інструменти фронтенду."
    />
  </section>
</template>

<style scoped>
h1 {
  margin: 0 0 10px;
}
p {
  font-size: 0.95rem;
  line-height: 1.5;
}
</style>
