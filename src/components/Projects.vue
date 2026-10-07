<template>
  <section id="projects" class="py-20 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-12">
        <span class="text-xs sm:text-sm font-semibold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase font-mono">
          // Featured Work
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
          Projects & <span class="gradient-text-emerald">Creations</span>
        </h2>
        <p class="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
          A showcase of real-world web applications, e-commerce systems, and frontend interfaces built with clean architecture.
        </p>
      </div>

      <!-- Filter Controls -->
      <div class="flex flex-wrap items-center justify-center gap-2 mb-14">
        <button 
          v-for="cat in categories" 
          :key="cat"
          @click="activeCategory = cat"
          class="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
          :class="activeCategory === cat 
            ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-md shadow-emerald-500/20' 
            : 'glass-card text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 border border-slate-200 dark:border-slate-800'"
        >
          {{ cat }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div 
          v-for="project in filteredProjects" 
          :key="project.id"
          class="glass-card rounded-2xl border border-slate-200 dark:border-slate-800/80 overflow-hidden flex flex-col justify-between hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/10 hover:-translate-y-1.5 transition-all duration-300 group"
          :class="{ 'md:col-span-2 lg:col-span-2': project.featured && activeCategory === 'All' }"
        >
          <div>
            <!-- Card Header / Visual Banner -->
            <div 
              class="relative p-6 sm:p-8 bg-gradient-to-br border-b border-slate-200/80 dark:border-slate-800/80"
              :class="project.gradient"
            >
              <div class="flex items-center justify-between mb-4">
                <span class="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-700 dark:text-emerald-300">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  {{ project.category }}
                </span>
                
                <span v-if="project.featured" class="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                  ★ Featured Project
                </span>
              </div>

              <h3 class="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                {{ project.title }}
              </h3>
              <p class="text-sm font-medium text-slate-500 dark:text-slate-400 mt-0.5">
                {{ project.subtitle }}
              </p>
            </div>

            <!-- Card Body Content -->
            <div class="p-6 sm:p-8 space-y-5">
              <p class="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {{ project.description }}
              </p>

              <!-- Feature Highlights for Featured Projects -->
              <div v-if="project.features && project.features.length" class="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
                <p class="text-xs font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500 font-semibold">
                  Key Capabilities:
                </p>
                <ul class="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <li v-for="(feat, fIdx) in project.features.slice(0, 3)" :key="fIdx" class="flex items-start gap-2">
                    <svg class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{{ feat }}</span>
                  </li>
                </ul>
              </div>

              <!-- Tech Tags -->
              <div class="flex flex-wrap gap-1.5 pt-2">
                <span 
                  v-for="tag in project.tags" 
                  :key="tag"
                  class="text-xs font-mono font-medium px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>

          <!-- Card Actions Footer -->
          <div class="p-6 sm:px-8 sm:pb-8 pt-0 flex flex-wrap items-center gap-3">
            <!-- Live Demo Link (If live URL exists and is not github repo) -->
            <a 
              v-if="project.liveUrl && !project.liveUrl.includes('github.com')"
              :href="project.liveUrl" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex-1 min-w-[130px] inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-200"
            >
              <span>Live Demo</span>
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>

            <!-- GitHub Code Repo -->
            <a 
              :href="project.githubUrl" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              :class="{ 'flex-1': !project.liveUrl || project.liveUrl.includes('github.com') }"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>Repository</span>
            </a>
          </div>

        </div>
      </div>

      <!-- More on GitHub CTA Banner -->
      <div class="mt-16 text-center">
        <a 
          href="https://github.com/monz7" 
          target="_blank" 
          rel="noopener noreferrer"
          class="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl glass-card border border-emerald-500/30 hover:border-emerald-500 text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 font-semibold shadow-lg group"
        >
          <svg class="w-5 h-5 fill-current text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors" viewBox="0 0 24 24">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          <span>See more repositories on GitHub (@monz7)</span>
          <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { projects } from '../data/portfolioData'

const categories = ['All', 'Vue.js', 'JavaScript', 'Web Apps']
const activeCategory = ref('All')

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') return projects
  return projects.filter(p => p.category === activeCategory.value)
})
</script>
