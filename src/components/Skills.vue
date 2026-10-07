<template>
  <section id="skills" class="py-20 relative bg-slate-100/50 dark:bg-slate-900/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-xs sm:text-sm font-semibold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase font-mono">
          // Technical Proficiency
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
          Skills & <span class="gradient-text-emerald">Technologies</span>
        </h2>
        <p class="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
          A toolkit built around the modern Vue.js ecosystem, state management, and responsive frontend design.
        </p>
      </div>

      <!-- Skills Matrix Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="(category, cIdx) in skillsCategories" 
          :key="cIdx"
          class="glass-card p-6 sm:p-8 rounded-2xl border hover:border-emerald-500/30 transition-all duration-300 flex flex-col justify-between"
        >
          <!-- Category Header -->
          <div>
            <div class="flex items-center justify-between mb-6">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 dark:text-emerald-400 flex items-center justify-center font-bold">
                  <svg v-if="category.icon === 'code'" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <svg v-else-if="category.icon === 'layers'" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <svg v-else-if="category.icon === 'palette'" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4 5 5 0 015-5h4a2 2 0 012 2v4a2 2 0 01-2 2H7zm11-13a2 2 0 100-4 2 2 0 000 4zm-4 4a2 2 0 100-4 2 2 0 000 4zm8 0a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                  <svg v-else class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 class="text-xl font-bold text-slate-900 dark:text-white">
                  {{ category.name }}
                </h3>
              </div>
              <span class="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                {{ category.skills.length }} Skills
              </span>
            </div>

            <!-- Skills List -->
            <div class="space-y-4">
              <div v-for="(skill, sIdx) in category.skills" :key="sIdx" class="space-y-1.5">
                <div class="flex items-center justify-between text-sm">
                  <span class="font-medium text-slate-800 dark:text-slate-200">
                    {{ skill.name }}
                  </span>
                  <span class="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    {{ skill.tag }}
                  </span>
                </div>
                <!-- Progress Bar -->
                <div class="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    class="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-1000 ease-out"
                    :style="{ width: skill.level + '%' }"
                  ></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { skillsCategories } from '../data/portfolioData'
</script>
