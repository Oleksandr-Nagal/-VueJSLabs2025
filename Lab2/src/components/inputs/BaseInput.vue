<script setup>
const model = defineModel()

defineProps({
  label: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  name: {
    type: String,
    default: ''
  },
  error: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <div class="field">
    <label v-if="label" class="field-label">
      {{ label }}
    </label>
    <input
      class="field-input"
      :type="type"
      :name="name"
      :placeholder="placeholder"
      v-model="model"
    />
    <p v-if="error" class="field-error">{{ error }}</p>
  </div>
</template>

<style scoped>
.field {
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
}
.field-label {
  font-size: 0.9rem;
  margin-bottom: 4px;
}
.field-input {
  padding: 8px 10px;
  border-radius: 4px;
  border: 1px solid #d1d5db;
}
.field-input:focus {
  outline: none;
  border-color: #3b82f6;
}
.field-error {
  color: #dc2626;
  font-size: 0.8rem;
  margin-top: 2px;
}
</style>
