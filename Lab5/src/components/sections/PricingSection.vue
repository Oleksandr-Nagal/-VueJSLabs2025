<script setup>
import { ref, computed, getCurrentInstance } from 'vue'
import { useToast } from 'primevue/usetoast'

const billingCycle = ref('monthly')
const seats = ref(5)
const currency = ref('usd')

const instance = getCurrentInstance()
const toast = useToast()

const plans = [
  { id: 'starter', name: 'Starter', baseMonthly: 39, includedSeats: 3 },
  { id: 'growth', name: 'Growth', baseMonthly: 99, includedSeats: 10 },
  { id: 'scale', name: 'Scale', baseMonthly: 249, includedSeats: 30 }
]

const multiplierByBilling = {
  monthly: 1,
  yearly: 10 // 2 months free
}

const currencyRate = computed(() => (currency.value === 'usd' ? 1 : 0.92))

const calculatedPlans = computed(() => {
  return plans.map((plan) => {
    const extraSeats = Math.max(0, seats.value - plan.includedSeats)
    const extraPerSeat = 6
    const monthly = plan.baseMonthly + extraSeats * extraPerSeat
    const price = monthly * multiplierByBilling[billingCycle.value] * currencyRate.value

    return {
      ...plan,
      extraSeats,
      price: Math.round(price)
    }
  })
})

const copyPlanId = async (planId) => {
  const ok = await instance.proxy.$copyToClipboard(planId.toUpperCase())
  toast.add({
    severity: ok ? 'success' : 'warn',
    summary: ok ? 'Plan id copied' : 'Copy failed',
    detail: ok ? `You can paste code ${planId.toUpperCase()} into the signup form.` : 'Copy to clipboard is not available.',
    life: 2200
  })
}
</script>

<template>
  <Card class="section-card">
    <template #title>
      <span class="section-tag">Pricing</span>
      <h2 class="section-title">Transparent plans with a simple calculator.</h2>
    </template>
    <template #content>
      <div class="controls">
        <div class="field">
          <label>Billing</label>
          <Dropdown
            v-model="billingCycle"
            :options="[
              { label: 'Monthly', value: 'monthly' },
              { label: 'Yearly · 2 months free', value: 'yearly' }
            ]"
            option-label="label"
            option-value="value"
            class="dropdown"
          />
        </div>
        <div class="field">
          <label>Currency</label>
          <Dropdown
            v-model="currency"
            :options="[
              { label: 'USD', value: 'usd' },
              { label: 'EUR', value: 'eur' }
            ]"
            option-label="label"
            option-value="value"
            class="dropdown"
          />
        </div>
        <div class="field">
          <label>Team size</label>
          <InputNumber v-model="seats" :min="1" :max="200" show-buttons button-layout="horizontal" />
        </div>
      </div>

      <div class="plans">
        <Card
          v-for="plan in calculatedPlans"
          :key="plan.id"
          class="plan-card"
        >
          <template #title>
            <div class="plan-head">
              <span class="plan-name">{{ plan.name }}</span>
              <Tag v-if="plan.id === 'growth'" severity="success" value="Most popular" />
            </div>
          </template>
          <template #content>
            <p class="plan-price">
              <span class="amount">{{ plan.price }}</span>
              <span class="unit">{{ currency.toUpperCase() }} / {{ billingCycle === 'monthly' ? 'month' : 'year' }}</span>
            </p>
            <p class="plan-meta">
              Includes up to {{ plan.includedSeats }} seats.
              <span v-if="plan.extraSeats > 0">
                + {{ plan.extraSeats }} extra × 6 {{ currency.toUpperCase() }} / seat.
              </span>
            </p>

            <ul class="plan-list">
              <li>All core FinanceTrack dashboards</li>
              <li>Unlimited read-only investor links</li>
              <li>Export to Excel, CSV and Google Sheets</li>
            </ul>

            <div class="plan-actions">
              <Button label="Choose plan" class="p-button-success p-button-sm" icon="pi pi-check" />
              <Button
                label="Copy plan code"
                class="p-button-text p-button-sm"
                icon="pi pi-copy"
                @click="copyPlanId(plan.id)"
              />
            </div>
          </template>
        </Card>
      </div>
    </template>
  </Card>
</template>

<style scoped>
.section-card {
  background: #020617;
  border-radius: 18px;
  border: 1px solid #111827;
}

.section-tag {
  display: inline-block;
  font-size: 0.8rem;
  color: var(--accent-strong);
  background: #052e16;
  padding: 3px 10px;
  border-radius: 999px;
}

.section-title {
  margin: 8px 0 0;
}

.controls {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 10px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 0.85rem;
}

.dropdown {
  min-width: 180px;
}

.plans {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 14px;
  margin-top: 16px;
}

.plan-card {
  background: #020617;
  border-radius: 14px;
  border: 1px solid #111827;
}

.plan-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.plan-name {
  font-weight: 600;
}

.plan-price {
  margin: 0;
  display: flex;
  align-items: baseline;
  gap: 6px;
}

.amount {
  font-size: 1.6rem;
  font-weight: 700;
}

.unit {
  font-size: 0.9rem;
  color: var(--text-soft);
}

.plan-meta {
  margin: 4px 0 8px;
  font-size: 0.8rem;
  color: var(--text-muted);
}

.plan-list {
  margin: 0 0 12px;
  padding-left: 18px;
  font-size: 0.86rem;
}

.plan-actions {
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
}
</style>
