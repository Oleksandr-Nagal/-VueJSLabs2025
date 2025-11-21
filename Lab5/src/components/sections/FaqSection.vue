<template>
  <Card class="section-card">
    <template #title>
      <span class="section-tag">FAQ</span>
      <h2 class="section-title">Answers to common questions.</h2>
    </template>
    <template #content>
      <Accordion :multiple="true">
        <AccordionTab header="What sources do you support?">
          We support Stripe, Paddle, PayPal, Braintree and generic CSV imports.
        </AccordionTab>
        <AccordionTab header="Is my finance data secure?">
          Yes. All data is encrypted in transit and at rest. Access is restricted by role and SSO.
        </AccordionTab>
        <AccordionTab header="Can I export my data if I cancel?">
          Of course. You can export all raw transactions and metrics as CSV at any time.
        </AccordionTab>
      </Accordion>
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
  margin: 8px 0 10px;
}
</style>
