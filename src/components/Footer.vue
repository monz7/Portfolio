<template>
  <footer class="py-12 border-t border-slate-200 dark:border-slate-800/80 bg-white/50 dark:bg-slate-950/50 backdrop-blur-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        
        <!-- Brand Info -->
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-[2px]">
            <div class="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center">
              <span class="font-extrabold text-xs text-white font-mono">&lt;M/&gt;</span>
            </div>
          </div>
          <div>
            <p class="font-bold text-slate-900 dark:text-white text-sm">
              Mina Raafat Fakry
            </p>
            <p class="text-xs text-emerald-600 dark:text-emerald-400 font-mono">
              Frontend Developer • Vue.js
            </p>
          </div>
        </div>

        <!-- Links -->
        <div class="flex flex-wrap justify-center gap-6 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
          <a href="#about" class="hover:text-emerald-500 transition-colors">About</a>
          <a href="#experience" class="hover:text-emerald-500 transition-colors">Experience</a>
          <a href="#skills" class="hover:text-emerald-500 transition-colors">Skills</a>
          <a href="#projects" class="hover:text-emerald-500 transition-colors">Projects</a>
          <a href="#certifications" class="hover:text-emerald-500 transition-colors">Certificates</a>
          <a href="#contact" class="hover:text-emerald-500 transition-colors">Contact</a>
        </div>

        <!-- Back to top button -->
        <div>
          <button 
            @click="scrollToTop" 
            type="button"
            class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 text-slate-700 dark:text-slate-300 transition-all flex items-center justify-center shadow-sm"
            title="Back to Top"
            aria-label="Back to Top"
          >
            <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

      </div>

      <div class="mt-8 pt-6 border-t border-slate-100 dark:border-slate-900 text-center text-xs text-slate-500 dark:text-slate-500">
        <p>© 2026 Mina Raafat. Engineered with Vue 3, Composition API & Tailwind CSS.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>
