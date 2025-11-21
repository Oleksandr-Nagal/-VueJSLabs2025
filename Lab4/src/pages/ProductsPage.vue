<script setup>
import { useProductsStore } from '../stores/productsStore'
import { useCartStore } from '../stores/cartStore'
import { useI18n } from 'vue-i18n'

const productsStore = useProductsStore()
const cartStore = useCartStore()
const { t } = useI18n()

const products = productsStore.allProducts
</script>

<template>
  <section>
    <h1>{{ t('products.title') }}</h1>

    <div v-if="products.length === 0">
      {{ t('products.empty') }}
    </div>

    <div v-else class="grid">
      <article
        v-for="product in products"
        :key="product.id"
        class="product-card"
      >
        <h2 class="product-title">{{ product.title }}</h2>
        <p class="product-price">
          {{ t('products.price') }}: {{ product.price }}$
        </p>
        <button
          type="button"
          class="primary-btn"
          @click="cartStore.addToCart(product.id)"
        >
          {{ t('products.addToCart') }}
        </button>
      </article>
    </div>
  </section>
</template>

<style scoped>
h1 {
  margin: 0 0 12px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
}

.product-card {
  background-color: var(--bg-surface);
  border-radius: 10px;
  padding: 12px;
  border: 1px solid var(--border-color);
}

.product-title {
  margin: 0 0 8px;
}

.product-price {
  margin: 0 0 10px;
}

.primary-btn {
  padding: 6px 10px;
  border-radius: 999px;
  border: none;
  background-color: var(--accent-color);
  color: white;
  cursor: pointer;
  font-size: 0.9rem;
}
</style>
