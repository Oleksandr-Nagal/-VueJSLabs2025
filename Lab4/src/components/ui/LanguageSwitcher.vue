<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useLocaleStore } from '../../stores/localeStore'

const { locale } = useI18n()
const localeStore = useLocaleStore()

const current = computed({
  get() {
    return locale.value
  },
  set(value) {
    locale.value = value
    localeStore.setLocale(value)
  }
})

function toggle() {
  current.value = current.value === 'ua' ? 'en' : 'ua'
}
</script>

<template>
  <button class="lang-toggle" type="button" @click="toggle">
    {{ current === 'ua' ? 'UA' : 'EN' }}
  </button>
</template>

<style scoped>
.lang-toggle {
  padding: 4px 10px;
  border-radius: 999px;
  border: 1px solid var(--border-color);
  background-color: var(--bg-surface);
  cursor: pointer;
  font-size: 0.8rem;
}
</style>
