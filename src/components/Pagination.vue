<template>
  <div class="pagination-container">
    <button
        @click="$emit('change-page', currentPage - 1)"
        :disabled="currentPage === 1"
        class="pagination-button"
    >
      Попередня
    </button>
    <button
        v-for="page in totalPages"
        :key="page"
        @click="$emit('change-page', page)"
        class="pagination-button page-number"
        :class="{ 'page-active': page === currentPage }"
    >
      {{ page }}
    </button>
    <button
        @click="$emit('change-page', currentPage + 1)"
        :disabled="currentPage === totalPages"
        class="pagination-button"
    >
      Наступна
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
defineProps(['currentPage', 'totalPages']);
defineEmits(['change-page']);
</script>