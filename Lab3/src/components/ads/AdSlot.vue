<script setup>
const props = defineProps({
  title: {
    type: String,
    default: 'Sponsored'
  },
  text: {
    type: String,
    default: 'Рекламний блок: тут могла б бути ваша реклама.'
  }
})
</script>

<template>
  <aside class="ad-slot">
    <p class="ad-title">{{ title }}</p>
    <p class="ad-text">{{ text }}</p>
  </aside>
</template>

<style scoped>
.ad-slot {
  margin: 16px 0;
  padding: 10px 12px;
  border-radius: 8px;
  border: 1px dashed var(--border-color);
  background-color: var(--accent-soft);
  font-size: 0.9rem;
}
.ad-title {
  margin: 0 0 4px;
  font-weight: 600;
}
.ad-text {
  margin: 0;
}
</style>
