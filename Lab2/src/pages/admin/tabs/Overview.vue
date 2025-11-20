<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const counter = ref(0)
let interval

onMounted(() => {
  interval = setInterval(() => {
    counter.value++
  }, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <div class="card">
    <h3>Overview (KeepAlive demo)</h3>
    <p>Лічильник часу на вкладці: {{ counter }} с</p>
  </div>
</template>

<style scoped>
.card {
  background: white;
  border-radius: 8px;
  padding: 12px 14px;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.1);
}
</style>
