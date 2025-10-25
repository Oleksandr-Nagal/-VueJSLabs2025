<template>
  <div class="task-list-container">
    <div
        v-for="task in tasks"
        :key="task.id"
        class="task-item"
        :class="{ 'task-done': task.status === 'done' }"
    >
      <div class="task-content">
        <h3 class="task-title">{{ task.title }}</h3>
        <p class="task-description">{{ task.description }}</p>
        <div class="task-meta">
          <div class="task-date">Створено: {{ new Date(task.createdAt).toLocaleString() }}</div>
          <div class="task-priority" :class="`priority-${task.priority}`">
            Пріоритет: {{ task.priority }}
          </div>
        </div>
      </div>
      <div class="task-actions">
        <button
            @click="$emit('toggle-status', task.id)"
            class="button toggle-button"
            :class="task.status === 'active' ? 'status-active' : 'status-done'"
        >
          {{ task.status === 'active' ? 'Виконати' : 'Активувати' }}
        </button>
        <button
            @click="$emit('delete-task', task.id)"
            class="button delete-button"
        >
          Видалити
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
defineProps(['tasks']);
defineEmits(['toggle-status', 'delete-task', 'edit-task']);
</script>