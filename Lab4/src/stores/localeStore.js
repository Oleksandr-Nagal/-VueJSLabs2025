import { defineStore } from 'pinia'

export const useLocaleStore = defineStore('locale', {
  state: () => ({
    locale: 'ua'
  }),
  persist: true,
  actions: {
    setLocale(lang) {
      this.locale = lang === 'en' ? 'en' : 'ua'
    }
  }
})
