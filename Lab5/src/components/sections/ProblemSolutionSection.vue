<template>
  <Card class="section-card">
    <template #title>
      <span class="section-tag">Why teams pick FinanceTrack</span>
      <h2 class="section-title">From spreadsheet chaos to one clear cashflow view.</h2>
    </template>
    <template #content>
      <div class="problem-layout">
        <div class="col">
          <h3 class="bad-title">Before · The problem</h3>
          <ul class="list bad">
            <li>Manual spreadsheets for recurring payments & invoices.</li>
            <li>No single place to see burn rate and runway.</li>
            <li>Finance, founders and sales operate on different numbers.</li>
            <li>It takes days to prepare one investor-ready report.</li>
          </ul>
        </div>
        <div class="col">
          <h3 class="good-title">After · The solution</h3>
          <ul class="list good">
            <li>All payment providers connected in one dashboard.</li>
            <li>Automatic MRR, churn and runway calculations.</li>
            <li>Daily alerts when spend or churn breaks your guardrails.</li>
            <li>Share investor links with one click.</li>
          </ul>
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
  background: #022c22;
  padding: 3px 10px;
  border-radius: 999px;
}

.section-title {
  margin: 8px 0 0;
}

.problem-layout {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.col {
  padding-top: 6px;
}

.bad-title {
  color: #f97373;
}

.good-title {
  color: var(--accent-strong);
}

.list {
  margin: 6px 0 0;
  padding-left: 18px;
  font-size: 0.9rem;
}

.bad li {
  margin-bottom: 4px;
  color: #fecaca;
}

.good li {
  margin-bottom: 4px;
  color: #bbf7d0;
}

@media (max-width: 768px) {
  .problem-layout {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
