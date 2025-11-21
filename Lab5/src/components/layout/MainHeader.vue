<script setup>
const links = [
  { href: '#hero', label: 'Overview' },
  { href: '#problem', label: 'Why FinanceTrack' },
  { href: '#features', label: 'Features' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' }
]
</script>

<template>
  <header class="header">
    <div class="header-inner">
      <div class="brand">
        <span class="brand-logo pi pi-chart-line" />
        <div class="brand-text">
          <span class="brand-name">FinanceTrack</span>
          <span class="brand-tagline">Smart SaaS cashflow analytics</span>
        </div>
      </div>

      <nav class="nav">
        <a
          v-for="link in links"
          :key="link.href"
          class="nav-link"
          :href="link.href"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="actions">
        <Button label="Sign in" class="p-button-text p-button-sm" />
        <Button label="Start free trial" icon="pi pi-arrow-right" class="p-button-sm p-button-success" />
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(12px);
  background: linear-gradient(to right, #020617f2, #020617e6);
  border-bottom: 1px solid #111827;
}

.header-inner {
  max-width: 1080px;
  margin: 0 auto;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  gap: 18px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 8px;
}

.brand-logo {
  font-size: 1.4rem;
  color: var(--accent-strong);
}

.brand-text {
  display: flex;
  flex-direction: column;
}

.brand-name {
  font-weight: 700;
  letter-spacing: 0.02em;
}

.brand-tagline {
  font-size: 0.7rem;
  color: var(--text-soft);
}

.nav {
  display: flex;
  gap: 10px;
  margin-left: 24px;
  flex: 1;
}

.nav-link {
  font-size: 0.8rem;
  padding: 4px 10px;
  border-radius: 999px;
  color: var(--text-muted);
}

.nav-link:hover {
  background-color: #020617;
  color: var(--accent-strong);
}

.actions {
  display: flex;
  gap: 8px;
}

@media (max-width: 768px) {
  .nav {
    display: none;
  }
  .header-inner {
    justify-content: space-between;
  }
}
</style>
