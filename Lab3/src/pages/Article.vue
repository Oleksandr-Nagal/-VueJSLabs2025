<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getArticleById } from '../data/news'
import AdModal from '../components/ui/AdModal.vue'

const route = useRoute()
const router = useRouter()

const article = computed(() => getArticleById(route.params.id))
const isAdOpen = ref(false)

function openAd() {
  isAdOpen.value = true
}

function goBack() {
  router.back()
}
</script>

<template>
  <section v-if="article">
    <button class="back-btn" type="button" @click="goBack">← Назад</button>
    <h1>{{ article.title }}</h1>
    <p class="meta">
      {{ new Date(article.date).toLocaleDateString() }}
    </p>
    <img :src="article.image" :alt="article.title" class="hero-image" />
    <p class="content">
      {{ article.content }}
    </p>

    <div class="ad-banner" @click="openAd">
      <p class="ad-label">Реклама</p>
      <p class="ad-text">Натисніть, щоб переглянути спеціальну пропозицію</p>
    </div>

    <AdModal
      v-model="isAdOpen"
      title="Спеціальна пропозиція"
      image="https://via.placeholder.com/800x360.png?text=Big+Ad+Banner"
      text="Отримайте знижку 30% на підписку, якщо оформите її сьогодні!"
    />
  </section>

  <section v-else>
    <h1>Новину не знайдено</h1>
    <p>
      Можливо, вона була видалена або ви перейшли за некоректним посиланням.
    </p>
  </section>
</template>

<style scoped>
.back-btn {
  margin-bottom: 8px;
  padding: 4px 8px;
  border-radius: 999px;
  border: 1px solid var(--border-color);
  background-color: var(--bg-surface);
  cursor: pointer;
}

h1 {
  margin: 0 0 6px;
}

.meta {
  font-size: 0.85rem;
  color: #6b7280;
  margin-bottom: 8px;
}

.hero-image {
  width: 100%;
  border-radius: 10px;
  margin-bottom: 10px;
}

.content {
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 16px;
}

.ad-banner {
  margin-top: 8px;
  padding: 10px 12px;
  border-radius: 10px;
  background: linear-gradient(90deg, #22c55e, #16a34a);
  color: white;
  cursor: pointer;
}

.ad-label {
  font-size: 0.8rem;
  opacity: 0.9;
  margin: 0 0 4px;
}

.ad-text {
  margin: 0;
}
</style>
