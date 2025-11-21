import { defineStore } from 'pinia'
import { useProductsStore } from './productsStore'

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [] // { id, title, price, qty }
  }),
  persist: true,
  getters: {
    totalItems: (state) => state.items.reduce((sum, item) => sum + item.qty, 0),
    totalPrice: (state) => state.items.reduce((sum, item) => sum + item.price * item.qty, 0)
  },
  actions: {
    addToCart(productId) {
      const productsStore = useProductsStore()
      const product = productsStore.getById(productId)
      if (!product) return

      const existing = this.items.find(i => i.id === product.id)
      if (existing) {
        existing.qty += 1
      } else {
        this.items.push({
          id: product.id,
          title: product.title,
          price: product.price,
          qty: 1
        })
      }
    },
    removeItem(id) {
      this.items = this.items.filter(i => i.id !== id)
    },
    changeQty(id, qty) {
      const item = this.items.find(i => i.id === id)
      if (!item) return
      const normalized = Number(qty)
      if (!Number.isFinite(normalized) || normalized <= 0) {
        this.removeItem(id)
      } else {
        item.qty = normalized
      }
    },
    clearCart() {
      this.items = []
    }
  }
})
