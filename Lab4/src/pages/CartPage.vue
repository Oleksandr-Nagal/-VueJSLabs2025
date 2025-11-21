<script setup>
import { useCartStore } from '../stores/cartStore'
import { useI18n } from 'vue-i18n'

const cartStore = useCartStore()
const { t } = useI18n()
</script>

<template>
  <section>
    <h1>{{ t('cart.title') }}</h1>

    <div v-if="cartStore.items.length === 0">
      {{ t('cart.empty') }}
    </div>

    <div v-else>
      <table class="cart-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>{{ t('products.title') }}</th>
            <th>{{ t('cart.quantity') }}</th>
            <th>{{ t('products.price') }}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartStore.items" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
            <td>
              <input
                type="number"
                min="1"
                class="qty-input"
                :value="item.qty"
                @input="cartStore.changeQty(item.id, $event.target.value)"
              />
            </td>
            <td>{{ item.price * item.qty }}$</td>
            <td>
              <button
                type="button"
                class="link-btn"
                @click="cartStore.removeItem(item.id)"
              >
                {{ t('cart.remove') }}
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div class="cart-footer">
        <p>
          {{ t('cart.total') }}: <strong>{{ cartStore.totalPrice }}$</strong>
        </p>
        <button type="button" class="secondary-btn" @click="cartStore.clearCart">
          {{ t('cart.clear') }}
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
h1 {
  margin: 0 0 12px;
}

.cart-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 10px;
  background-color: var(--bg-surface);
}

th,
td {
  border-bottom: 1px solid var(--border-color);
  padding: 6px 8px;
  text-align: left;
}

.qty-input {
  width: 60px;
}

.cart-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.95rem;
}

.secondary-btn {
  padding: 6px 10px;
  border-radius: 999px;
  border: 1px solid var(--border-color);
  background-color: var(--bg-surface);
  cursor: pointer;
}

.link-btn {
  border: none;
  background: transparent;
  color: var(--accent-color);
  cursor: pointer;
}
</style>
