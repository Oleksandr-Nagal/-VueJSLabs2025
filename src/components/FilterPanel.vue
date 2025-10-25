<template>
  <div class="filter-card">
    <h2 class="filter-title">Фільтри</h2>
    <div class="filter-grid">
      <div class="form-group">
        <label class="label">Назва</label>
        <input v-model="localFilters.title" type="text" class="input-field">
      </div>
      <div class="form-group">
        <label class="label">Опис</label>
        <input v-model="localFilters.description" type="text" class="input-field">
      </div>
      <div class="form-group">
        <label class="label">Статус</label>
        <select v-model="localFilters.status" class="select-field">
          <option value="all">Всі</option>
          <option value="active">Активні</option>
          <option value="done">Виконані</option>
        </select>
      </div>
      <div class="form-group">
        <label class="label">Пріоритет</label>
        <select v-model="localFilters.priority" class="select-field">
          <option value="all">Всі</option>
          <option value="low">Низький</option>
          <option value="medium">Середній</option>
          <option value="high">Високий</option>
        </select>
      </div>
    </div>
    <div class="filter-actions">
      <button @click="$emit('update-filters', localFilters)" class="button apply-button">Застосувати</button>
      <button @click="handleClearFilters" class="button clear-button">Очистити</button>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue';
const props = defineProps(['filters']);
const emit = defineEmits(['update-filters', 'clear-filters']);
const localFilters = ref({ ...props.filters });
watch(() => props.filters, (newFilters) => {
  localFilters.value = { ...newFilters };
}, { deep: true });
const handleClearFilters = () => {
  localFilters.value = {
    title: '',
    description: '',
    status: 'all',
    priority: 'all',
    dateFrom: null,
    dateTo: null
  };
  emit('clear-filters');
};
</script>