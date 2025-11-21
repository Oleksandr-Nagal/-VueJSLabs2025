<script setup>
import { news } from '../data/news'
import NewsCard from '../components/news/NewsCard.vue'
import AdSlot from '../components/ads/AdSlot.vue'
</script>

<template>
  <section>
    <h1>Останні новини</h1>
    <AdSlot title="Реклама на головній" text="Ваш банер може бути тут." />
    <div class="grid">
      <NewsCard
        v-for="article in news"
        :key="article.id"
        :article="article"
      />
    </div>
    <AdSlot title="Промо-партнер" text="Спеціальні пропозиції від наших партнерів." />
  </section>
</template>

<style scoped>
h1 {
  margin: 0 0 12px;
}
.grid {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
</style>
