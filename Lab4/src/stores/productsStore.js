import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
  state: () => ({
    items: [
      { id: 1, title: 'Vue Mastery Course', price: 49 },
      { id: 2, title: 'Vite Pro Setup', price: 29 },
      { id: 3, title: 'Pinia Patterns', price: 39 }
    ]
  }),
  getters: {
    allProducts: (state) => state.items,
    getById: (state) => (id) => state.items.find(p => p.id === id)
  }
})
