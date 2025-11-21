import { defineStore } from 'pinia'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    fullName: '',
    email: '',
    phones: []
  }),
  persist: true,
  actions: {
    setProfile(payload) {
      this.fullName = payload.fullName
      this.email = payload.email
      this.phones = payload.phones || []
    }
  }
})
