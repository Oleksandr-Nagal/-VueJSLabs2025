<template>
  <Card class="section-card">
    <template #title>
      <span class="section-tag">What customers say</span>
      <h2 class="section-title">Loved by SaaS finance teams worldwide.</h2>
    </template>
    <template #content>
      <div class="grid">
        <Card class="quote">
          <template #content>
            <p class="text">
              “We replaced five different spreadsheets with one FinanceTrack view.
              Our board meetings finally talk about strategy, not manual numbers.”
            </p>
            <p class="author">— Marta, Head of Finance @ SubOcean</p>
          </template>
        </Card>
        <Card class="quote">
          <template #content>
            <p class="text">
              “FinanceTrack paid for itself in the first month by catching failed renewals
              we never saw before. Churn alerts are pure gold.”
            </p>
            <p class="author">— Daniel, Co-founder @ Notably AI</p>
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

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 12px;
  margin-top: 10px;
}

.quote {
  background: #020617;
  border-radius: 14px;
  border: 1px solid #111827;
}

.text {
  margin: 0 0 8px;
  font-size: 0.9rem;
  color: var(--text-muted);
}

.author {
  margin: 0;
  font-size: 0.8rem;
  color: var(--accent-strong);
}
</style>
