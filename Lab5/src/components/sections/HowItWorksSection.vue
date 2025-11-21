<template>
  <Card class="section-card">
    <template #title>
      <span class="section-tag">How it works</span>
      <h2 class="section-title">Three steps to a predictable cashflow.</h2>
    </template>
    <template #content>
      <div class="steps">
        <div class="step">
          <span class="step-index">1</span>
          <h3>Connect your sources</h3>
          <p>Link Stripe, PayPal or upload bank CSVs. We normalize all transactions.</p>
        </div>
        <div class="step">
          <span class="step-index">2</span>
          <h3>Configure guardrails</h3>
          <p>Set burn limits, churn thresholds and alert channels for your team.</p>
        </div>
        <div class="step">
          <span class="step-index">3</span>
          <h3>Share live dashboards</h3>
          <p>Share investor-friendly dashboards and export reports anytime.</p>
        </div>
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

.steps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 14px;
  margin-top: 10px;
}

.step {
  padding: 10px 12px;
  border-radius: 12px;
  border: 1px solid #111827;
  background: #020617;
}

.step-index {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  border-radius: 999px;
  background: var(--accent-soft);
  color: var(--accent-strong);
  font-size: 0.8rem;
  margin-bottom: 4px;
}
</style>
