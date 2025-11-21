<template>
  <Card class="section-card">
    <template #title>
      <span class="section-tag">Key capabilities</span>
      <h2 class="section-title">Everything a finance lead needs in one place.</h2>
    </template>
    <template #content>
      <div class="grid">
        <div class="feature">
          <i class="pi pi-chart-bar icon"></i>
          <h3>Real-time metrics</h3>
          <p>MRR, ARR, churn, LTV, CAC and runway auto-updated from your data sources.</p>
        </div>
        <div class="feature">
          <i class="pi pi-bell icon"></i>
          <h3>Smart alerts</h3>
          <p>Alerts for failed payments, overspending and unusual cohort behavior.</p>
        </div>
        <div class="feature">
          <i class="pi pi-sliders-h icon"></i>
          <h3>Scenario planning</h3>
          <p>Model best/worst cases and share plans with founders and investors.</p>
        </div>
        <div class="feature">
          <i class="pi pi-database icon"></i>
          <h3>Multi-source ingest</h3>
          <p>Connect Stripe, Paddle, PayPal and bank exports without custom scripts.</p>
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

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 14px;
  margin-top: 10px;
}

.feature {
  padding: 10px;
  border-radius: 12px;
  border: 1px solid #111827;
  background: #020617;
  font-size: 0.9rem;
}

.icon {
  font-size: 1.4rem;
  color: var(--accent-strong);
  margin-bottom: 6px;
}
</style>
