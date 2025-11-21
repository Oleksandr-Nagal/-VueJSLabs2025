import { ref, watchEffect } from 'vue'

const THEME_KEY = 'Lab3-theme'
const theme = ref('light')
let initialized = false

function applyTheme(value) {
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', value)
  }
}

export function useTheme() {
  if (!initialized) {
    initialized = true
    if (typeof window !== 'undefined') {
      const saved = window.localStorage.getItem(THEME_KEY)
      if (saved === 'light' || saved === 'dark') {
        theme.value = saved
      } else {
        theme.value = 'light'
      }
      applyTheme(theme.value)
    }
    watchEffect(() => {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(THEME_KEY, theme.value)
        applyTheme(theme.value)
      }
    })
  }

  function toggleTheme() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
  }

  function setTheme(value) {
    theme.value = value === 'dark' ? 'dark' : 'light'
  }

  return { theme, toggleTheme, setTheme }
}
