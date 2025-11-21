<script setup>
import { RouterLink } from 'vue-router'
import styles from './NewsCard.module.css'

const props = defineProps({
  article: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <article :class="styles.card">
    <img :src="article.image" :alt="article.title" :class="styles.image" />
    <h2 :class="styles.title">{{ article.title }}</h2>
    <p :class="styles.meta">
      {{ new Date(article.date).toLocaleDateString() }}
    </p>
    <p :class="styles.summary">
      {{ article.summary }}
    </p>
    <div :class="styles.actions">
      <RouterLink
        :to="{ name: 'article', params: { id: article.id } }"
        :class="styles['read-more-btn']"
      >
        Детальніше
      </RouterLink>
    </div>
  </article>
</template>
