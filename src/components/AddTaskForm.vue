<template>
  <div class="form-card">
    <div class="form-group">
      <input
        v-model="title"
        @keyup.enter="handleAddTask"
        type="text"
        placeholder="Назва завдання"
        class="input-field"
      />
    </div>
    <div class="form-group">
      <textarea v-model="description" placeholder="Опис" rows="3" class="input-field"></textarea>
    </div>
    <div class="form-group flex-row">
      <label class="label">Пріоритет:</label>
      <select v-model="priority" class="select-field">
        <option value="low">Низький</option>
        <option value="medium">Середній</option>
        <option value="high">Високий</option>
      </select>
    </div>
    <button @click="handleAddTask" class="button primary-button">Додати</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue'
const title = ref('')
const description = ref('')
const priority = ref('low')
const emit = defineEmits(['add-task'])
const handleAddTask = () => {
  if (typeof title.value === 'string' && title.value.trim() !== '') {
    emit('add-task', title.value, description.value, priority.value)
    title.value = ''
    description.value = ''
    priority.value = 'low'
  }
}
</script>
