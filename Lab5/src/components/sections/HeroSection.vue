<script setup>
import { ref, getCurrentInstance } from 'vue'
import { useToast } from 'primevue/usetoast'

const monthlySpend = ref(35000)
const savedPercent = 18

const instance = getCurrentInstance()
const toast = useToast()

const copyPromo = async () => {
  const ok = await instance.proxy.$copyToClipboard('FINANCE2025')
  toast.add({
    severity: ok ? 'success' : 'error',
    summary: ok ? 'Copied' : 'Failed',
    detail: ok ? 'Promo code FINANCE2025 copied' : 'Copy is not available in this browser',
    life: 2200
  })
}
</script>

<template>
  <Card class="hero-card">
    <template #content>
      <div class="hero-layout">
        <div class="hero-text">
          <p class="hero-label">
            <i class="pi pi-bolt"></i>
            FinanceTrack · SaaS dashboard
          </p>
          <h1>Control cashflow. Grow your subscription business.</h1>
          <p class="hero-sub">
            FinanceTrack aggregates payments from Stripe, PayPal and banks, predicts churn
            and shows exactly where your recurring revenue is going.
          </p>

          <div class="hero-actions">
            <Button
              label="Start 14-day free trial"
              icon="pi pi-play"
              class="p-button-success"
            />
            <Button
              label="Copy promo FINANCE2025"
              icon="pi pi-copy"
              class="p-button-text p-button-sm"
              @click="copyPromo"
            />
          </div>

          <div class="hero-meta">
            <Chip label="No credit card" icon="pi pi-shield" />
            <Chip label="SOC2 ready" icon="pi pi-lock" />
            <Chip label="GDPR compliant" icon="pi pi-check-circle" />
          </div>
        </div>

        <div class="hero-side">
          <div class="hero-mini-card">
            <p class="mini-title">Example monthly spend</p>
            <p class="mini-number">${{ monthlySpend.toLocaleString() }}</p>
            <p class="mini-caption">
              Teams like yours save ~{{ savedPercent }}% of expenses within 3 months.
            </p>
          </div>
          <div class="hero-mini-card secondary">
            <p class="mini-title">Signals watched</p>
            <ul>
              <li>MRR & cash runway</li>
              <li>Failed charges monitor</li>
              <li>Risky cohorts & churn</li>
            </ul>
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>

<style scoped>
.hero-card {
  background: radial-gradient(circle at top left, #1e293b, #020617);
  border-radius: 18px;
  border: 1px solid #1f2937;
  box-shadow: 0 18px 45px #00000080;
}

.hero-layout {
  display: grid;
  grid-template-columns: minmax(0, 2.1fr) minmax(0, 1.4fr);
  gap: 24px;
}

.hero-text h1 {
  margin: 6px 0 10px;
  font-size: 2.1rem;
}

.hero-sub {
  margin: 0 0 16px;
  color: var(--text-muted);
}

.hero-label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.85rem;
  padding: 3px 10px;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent-strong);
}

.hero-actions {
  display: flex;
  gap: 10px;
  align-items: center;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.hero-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  font-size: 0.75rem;
}

.hero-side {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.hero-mini-card {
  border-radius: 14px;
  padding: 10px 12px;
  background: #020617;
  border: 1px solid #111827;
}

.hero-mini-card.secondary {
  background: #020617;
}

.mini-title {
  margin: 0 0 4px;
  font-size: 0.78rem;
  color: var(--text-soft);
}

.mini-number {
  margin: 0;
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--accent-strong);
}

.mini-caption {
  margin: 4px 0 0;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.hero-mini-card ul {
  margin: 4px 0 0;
  padding-left: 18px;
  font-size: 0.8rem;
  color: var(--text-muted);
}

@media (max-width: 840px) {
  .hero-layout {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
