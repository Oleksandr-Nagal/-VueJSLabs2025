<script setup>
import { reactive, ref, getCurrentInstance } from 'vue'
import { useToast } from 'primevue/usetoast'

const toast = useToast()
const instance = getCurrentInstance()

const form = reactive({
  name: '',
  email: '',
  company: '',
  message: ''
})

const errors = reactive({
  name: '',
  email: '',
  message: ''
})

const loading = ref(false)

const validate = () => {
  errors.name = form.name.trim() ? '' : 'Name is required'
  errors.email = /.+@.+\..+/.test(form.email) ? '' : 'Valid email is required'
  errors.message = form.message.trim().length >= 10 ? '' : 'Message must be at least 10 characters'
  return !errors.name && !errors.email && !errors.message
}

const onSubmit = async () => {
  if (!validate()) {
    toast.add({
      severity: 'warn',
      summary: 'Check the form',
      detail: 'Please fix highlighted fields.',
      life: 2200
    })
    return
  }

  loading.value = true
  setTimeout(() => {
    loading.value = false
    toast.add({
      severity: 'success',
      summary: 'Request sent',
      detail: 'We will get back to you within one business day.',
      life: 2500
    })
    form.name = ''
    form.email = ''
    form.company = ''
    form.message = ''
  }, 800)
}

const copySupportEmail = async () => {
  const ok = await instance.proxy.$copyToClipboard('support@financetrack.app')
  toast.add({
    severity: ok ? 'success' : 'warn',
    summary: ok ? 'Email copied' : 'Copy failed',
    detail: ok ? 'support@financetrack.app copied to clipboard.' : 'Copy to clipboard is not available.',
    life: 2200
  })
}
</script>

<template>
  <Card class="section-card">
    <template #title>
      <span class="section-tag">Contact</span>
      <h2 class="section-title">Tell us about your finance stack.</h2>
    </template>
    <template #content>
      <div class="layout">
        <div class="info">
          <p class="lead">
            Share a bit about your SaaS and we will prepare a tailored demo with your metrics.
          </p>
          <p class="contact-row">
            <i class="pi pi-envelope" />
            <span>support@financetrack.app</span>
            <Button
              label="Copy email"
              icon="pi pi-copy"
              class="p-button-text p-button-sm"
              @click="copySupportEmail"
            />
          </p>
          <p class="contact-row">
            <i class="pi pi-clock" />
            <span>Response within one business day.</span>
          </p>
        </div>

        <div class="form-wrap">
          <div class="field">
            <label>Name</label>
            <InputText v-model="form.name" />
            <p v-if="errors.name" class="error">{{ errors.name }}</p>
          </div>

          <div class="field">
            <label>Email</label>
            <InputText v-model="form.email" />
            <p v-if="errors.email" class="error">{{ errors.email }}</p>
          </div>

          <div class="field">
            <label>Company</label>
            <InputText v-model="form.company" />
          </div>

          <div class="field">
            <label>What do you want to track?</label>
            <Textarea v-model="form.message" rows="4" auto-resize />
            <p v-if="errors.message" class="error">{{ errors.message }}</p>
          </div>

          <Button
            label="Request demo"
            icon="pi pi-send"
            class="p-button-success"
            :loading="loading"
            @click="onSubmit"
          />
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
  margin: 8px 0 10px;
}

.layout {
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1.6fr);
  gap: 18px;
}

.info {
  font-size: 0.9rem;
  color: var(--text-muted);
}

.lead {
  margin-top: 0;
}

.contact-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 6px 0;
}

.contact-row i {
  color: var(--accent-strong);
}

.form-wrap {
  background: #020617;
  border-radius: 14px;
  border: 1px solid #111827;
  padding: 12px;
}

.field {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-size: 0.85rem;
}

.error {
  margin: 4px 0 0;
  font-size: 0.8rem;
  color: #f97373;
}

@media (max-width: 840px) {
  .layout {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
