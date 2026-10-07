import { ref } from 'vue'

const isDark = ref(false)

export function useTheme() {
  const initTheme = () => {
    const saved = localStorage.getItem('mina-theme')
    if (saved) {
      isDark.value = saved === 'dark'
    } else {
      // Default to dark mode for developer portfolio or check system preference
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      isDark.value = prefersDark || true // default dark looks super impressive
    }
    applyTheme()
  }

  const applyTheme = () => {
    if (isDark.value) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('mina-theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('mina-theme', 'light')
    }
  }

  const toggleTheme = () => {
    isDark.value = !isDark.value
    applyTheme()
  }

  return {
    isDark,
    initTheme,
    toggleTheme
  }
}
