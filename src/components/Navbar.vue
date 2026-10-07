<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="scrolled ? 'glass-nav shadow-lg shadow-slate-900/5 dark:shadow-black/40 py-3' : 'bg-transparent py-5'"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        
        <!-- Brand Logo -->
        <a href="#home" class="flex items-center gap-2.5 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-[2px] shadow-md shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all duration-300">
            <div class="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
              <span class="font-extrabold text-lg text-white font-mono">&lt;M/&gt;</span>
            </div>
          </div>
          <div class="flex flex-col">
            <span class="font-bold text-lg tracking-tight text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
              Mina Raafat
            </span>
            <span class="text-[10px] font-semibold text-emerald-600 dark:text-emerald-400 tracking-wider uppercase">
              Vue.js Developer
            </span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center gap-1 lg:gap-2">
          <a 
            v-for="item in navItems" 
            :key="item.href" 
            :href="item.href"
            class="px-3.5 py-2 text-sm font-medium rounded-lg text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-all duration-200"
            :class="{ 'text-emerald-600 dark:text-emerald-400 bg-slate-100/80 dark:bg-slate-800/80 font-semibold': activeSection === item.id }"
          >
            {{ item.label }}
          </a>
        </nav>

        <!-- Right Controls: Theme Toggle & Actions -->
        <div class="flex items-center gap-3">
          
          <!-- Theme Toggle Button -->
          <button 
            @click="toggleTheme" 
            type="button"
            class="w-10 h-10 rounded-xl flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors focus:outline-none"
            :title="isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'"
            aria-label="Toggle theme"
          >
            <!-- Sun Icon for Light Mode -->
            <svg v-if="isDark" class="w-5 h-5 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
            <!-- Moon Icon for Dark Mode -->
            <svg v-else class="w-5 h-5 text-slate-700 transition-transform duration-300 -rotate-12 hover:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
            </svg>
          </button>

          <!-- Hire Me / Contact CTA (Desktop) -->
          <a 
            href="#contact" 
            class="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/40 transition-all duration-200"
          >
            <span>Let's Talk</span>
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          <!-- Mobile Hamburger Button -->
          <button 
            @click="mobileMenuOpen = !mobileMenuOpen" 
            type="button"
            class="md:hidden w-10 h-10 rounded-xl flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

      </div>

      <!-- Mobile Dropdown Menu -->
      <transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-150 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-2"
      >
        <div 
          v-if="mobileMenuOpen" 
          class="md:hidden mt-3 p-4 rounded-2xl glass-card border border-slate-200 dark:border-slate-800 shadow-xl space-y-1"
        >
          <a 
            v-for="item in navItems" 
            :key="item.href" 
            :href="item.href"
            @click="mobileMenuOpen = false"
            class="block px-4 py-2.5 rounded-xl text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            :class="{ 'text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-50/60 dark:bg-emerald-950/20': activeSection === item.id }"
          >
            {{ item.label }}
          </a>
          
          <div class="pt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <a 
              href="#contact" 
              @click="mobileMenuOpen = false"
              class="w-full text-center py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/20"
            >
              Contact Me
            </a>
          </div>
        </div>
      </transition>

    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useTheme } from '../composables/useTheme'

const { isDark, toggleTheme } = useTheme()

const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const activeSection = ref('home')

const navItems = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Certifications', href: '#certifications', id: 'certifications' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 20
  
  // Detect active section
  const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean)
  const scrollPos = window.scrollY + 200
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i]
    if (section.offsetTop <= scrollPos) {
      activeSection.value = section.id
      break
    }
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
