<script setup>
import { ref } from 'vue'

const logs = ref([
  'User logged in',
  'Viewed dashboard',
  'Opened reports'
])
</script>

<template>
  <div class="card">
    <h3>Activity</h3>
    <ul>
      <li v-for="(log, index) in logs" :key="index">{{ log }}</li>
    </ul>
  </div>
</template>

<style scoped>
.card {
  background: white;
  border-radius: 8px;
  padding: 12px 14px;
  box-shadow: 0 1px 3px rgba(15, 23, 42, 0.1);
}
ul {
  padding-left: 18px;
}
</style>
