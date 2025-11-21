<script setup>
import { useI18n } from 'vue-i18n'
import { useProfileStore } from '../stores/profileStore'
import { useForm, useField, useFieldArray } from 'vee-validate'
import * as yup from 'yup'

const { t } = useI18n()
const profileStore = useProfileStore()


const schema = yup.object({
  fullName: yup
      .string()
      .required(t('form.required'))
      .min(3, t('form.min3')),

  email: yup
      .string()
      .required(t('form.required'))
      .email(t('form.email')),

  phones: yup
      .array()
      .of(
          yup.string()
              .required(t('form.phoneRequired'))
              .matches(/^\+?\d{10,15}$/, t('form.phoneInvalid'))
      )
      .min(1, t('form.atLeastOnePhone'))
})

const { handleSubmit, errors } = useForm({
  validationSchema: schema,
  initialValues: {
    fullName: profileStore.fullName,
    email: profileStore.email,
    phones: profileStore.phones.length ? profileStore.phones : ['']
  }
})

const { value: fullName } = useField('fullName')
const { value: email } = useField('email')

const { fields: phoneFields, push, remove, update } = useFieldArray('phones')

const onSubmit = handleSubmit((formValues) => {
  profileStore.setProfile(formValues)
  alert(t('profile.saved'))
})


function onPhoneInput(idx, e) {
  update(idx, e.target.value)
}
</script>

<template>
  <section>
    <h1>{{ t('profile.title') }}</h1>

    <form class="form" @submit.prevent="onSubmit">

      <!-- Full Name -->
      <div class="field">
        <label>{{ t('profile.fullName') }}</label>
        <input v-model="fullName" class="input" />
        <p v-if="errors.fullName" class="error">{{ errors.fullName }}</p>
      </div>

      <!-- Email -->
      <div class="field">
        <label>{{ t('profile.email') }}</label>
        <input v-model="email" type="email" class="input" />
        <p v-if="errors.email" class="error">{{ errors.email }}</p>
      </div>

      <!-- PHONES -->
      <div class="field">
        <label>{{ t('profile.phones') }}</label>

        <div class="phones">
          <div
              v-for="(phone, idx) in phoneFields"
              :key="phone.key"
              class="phone-row"
          >
            <input
                :value="phone.value"
                @input="onPhoneInput(idx, $event)"
                type="text"
                class="input"
                placeholder="+380..."
            />

            <button
                type="button"
                v-if="phoneFields.length > 1"
                class="small-btn"
                @click="remove(idx)"
            >×</button>
          </div>
        </div>

        <button type="button" class="secondary-btn" @click="push('')">
          {{ t('profile.addPhone') }}
        </button>

        <p v-if="errors.phones" class="error">{{ errors.phones }}</p>
      </div>

      <button type="submit" class="primary-btn">
        {{ t('profile.save') }}
      </button>

    </form>
  </section>
</template>

<style scoped>
.form {
  max-width: 520px;
  padding: 16px;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  background: var(--bg-surface);
}

.field {
  display: flex;
  flex-direction: column;
  margin-bottom: 12px;
}

.input {
  padding: 6px 8px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
}

.error {
  margin-top: 4px;
  color: #d32f2f;
  font-size: 0.85rem;
}

.phone-row {
  display: flex;
  gap: 6px;
  margin-bottom: 6px;
}

.small-btn {
  padding: 0 8px;
  border-radius: 50%;
  border: 1px solid var(--border-color);
  background: var(--bg-surface);
  cursor: pointer;
}

.primary-btn,
.secondary-btn {
  padding: 6px 12px;
  border-radius: 8px;
  cursor: pointer;
}

.primary-btn {
  background: var(--accent-color);
  color: white;
  border: none;
}
</style>
