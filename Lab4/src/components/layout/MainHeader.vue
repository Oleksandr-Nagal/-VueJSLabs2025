<script setup>
import { useRoute, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from '../ui/LanguageSwitcher.vue'

const route = useRoute()
const { t } = useI18n()
</script>

<template>
  <header class="header">
    <div class="header-inner">
      <div class="brand">
        <span class="brand-title">{{ t('app.brand') }}</span>
        <span class="brand-sub">
          {{ t('app.brandWelcome', { name: 'vue user' }) }}
        </span>
      </div>

      <nav class="nav">
        <RouterLink
          :to="{ name: 'products' }"
          class="nav-link"
          :class="{ 'nav-link--active': route.name === 'products' }"
        >
          {{ t('nav.products') }}
        </RouterLink>
        <RouterLink
          :to="{ name: 'cart' }"
          class="nav-link"
          :class="{ 'nav-link--active': route.name === 'cart' }"
        >
          {{ t('nav.cart') }}
        </RouterLink>
        <RouterLink
          :to="{ name: 'profile' }"
          class="nav-link"
          :class="{ 'nav-link--active': route.name === 'profile' }"
        >
          {{ t('nav.profile') }}
        </RouterLink>
      </nav>

      <LanguageSwitcher />
    </div>
  </header>
</template>

<style scoped>
.header {
  border-bottom: 1px solid var(--border-color);
  background-color: var(--bg-surface);
}

.header-inner {
  max-width: 960px;
  margin: 0 auto;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.brand {
  display: flex;
  flex-direction: column;
}

.brand-title {
  font-weight: 700;
}

.brand-sub {
  font-size: 0.8rem;
  opacity: 0.8;
}

.nav {
  display: flex;
  gap: 8px;
  margin-left: 20px;
  flex: 1;
}

.nav-link {
  padding: 4px 10px;
  border-radius: 999px;
  color: var(--text-color);
  text-decoration: none;
}

.nav-link--active {
  background-color: var(--accent-soft);
  color: var(--accent-color);
}
</style>
