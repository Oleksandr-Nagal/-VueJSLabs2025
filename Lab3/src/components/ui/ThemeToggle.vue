<script setup>
import { computed } from 'vue'
import { useTheme } from '../../composables/useTheme'

const { theme, toggleTheme } = useTheme()

const isDark = computed(() => theme.value === 'dark')
const label = computed(() => (isDark.value ? 'Dark' : 'Light'))

// продемонструємо v-bind() у CSS через обчислюваний колір
const accentColor = computed(() => (isDark.value ? '#f97316' : '#2563eb'))
</script>

<template>
  <button class="toggle" type="button" @click="toggleTheme">
    <span class="toggle-label">{{ label }}</span>
    <span class="toggle-thumb" :data-mode="label" />
  </button>
</template>

<style scoped>
.toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 4px 8px;
  border-radius: 999px;
  border: 1px solid var(--border-color);
  background-color: var(--bg-surface);
  cursor: pointer;
  font-size: 0.85rem;
}

.toggle-label {
  min-width: 40px;
}

.toggle-thumb {
  width: 28px;
  height: 16px;
  border-radius: 999px;
  position: relative;
  background-color: v-bind(accentColor);
}

.toggle-thumb::before {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 12px;
  height: 12px;
  border-radius: 999px;
  background-color: #fff;
  transform: translateX(calc(v-bind(accentColor) == '#f97316' ? 10px : 0));
}
</style>
