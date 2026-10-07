<template>
  <section id="about" class="py-20 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-xs sm:text-sm font-semibold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase font-mono">
          // Who I Am
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
          About <span class="gradient-text-emerald">Me</span>
        </h2>
        <p class="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
          A dedicated Frontend Developer committed to crafting clean, performant, and human-centric digital experiences.
        </p>
      </div>

      <!-- Stats Grid -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
        <div 
          v-for="(stat, idx) in personalInfo.stats" 
          :key="idx"
          class="glass-card p-6 rounded-2xl text-center border hover:border-emerald-500/40 hover:-translate-y-1 transition-all duration-300 group"
        >
          <div class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
            {{ stat.value }}
          </div>
          <div class="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 mt-2">
            {{ stat.label }}
          </div>
        </div>
      </div>

      <!-- Content Grid: Bio & Highlights -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        <!-- Left: Detailed Bio Card -->
        <div class="lg:col-span-6 space-y-6">
          <div class="glass-card p-6 sm:p-8 rounded-2xl border space-y-5">
            <h3 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
              <span class="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-sm font-bold">
                01
              </span>
              Engineering Pixel-Perfect Web Apps
            </h3>
            
            <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              I specialize in frontend architecture using <strong class="text-emerald-600 dark:text-emerald-400">Vue.js (Vue 3 & Composition API)</strong>. I love turning complex Figma wireframes into interactive, accessible, and fast web applications that perform flawlessly across mobile and desktop.
            </p>

            <p class="text-slate-600 dark:text-slate-300 leading-relaxed text-sm sm:text-base">
              My engineering philosophy revolves around <strong>clean code</strong>, modular component design, type-safe structures, and efficient state management with <strong>Pinia</strong>. I have practical experience integrating asynchronous RESTful APIs, managing token-based auth flows, and building intuitive e-commerce interfaces.
            </p>

            <!-- Personal Quick Facts -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3 border-t border-slate-200 dark:border-slate-800">
              <div class="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span><strong>Location:</strong> Cairo, Egypt</span>
              </div>
              <div class="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span><strong>Status:</strong> Open to Opportunities</span>
              </div>
              <div class="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span><strong>Education:</strong> B.Sc. Computer Science</span>
              </div>
              <div class="flex items-center gap-2.5 text-sm text-slate-600 dark:text-slate-300">
                <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span><strong>English:</strong> Professional Working</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Professional Experience & Education Timeline -->
        <div id="experience" class="lg:col-span-6 space-y-6">
          <div class="glass-card p-6 sm:p-8 rounded-2xl border">
            <h3 class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5 mb-6">
              <span class="w-8 h-8 rounded-lg bg-teal-500/10 text-teal-500 flex items-center justify-center text-sm font-bold">
                02
              </span>
              Experience & Education
            </h3>

            <div class="relative border-l-2 border-emerald-500/30 dark:border-emerald-500/20 ml-3 space-y-8 pl-6">
              
              <!-- Item: Zumra Food -->
              <div class="relative group">
                <!-- Timeline Dot -->
                <span class="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-emerald-500 group-hover:scale-125 transition-transform"></span>
                
                <div class="flex flex-wrap items-center justify-between gap-1 mb-1">
                  <h4 class="text-lg font-bold text-slate-900 dark:text-white">
                    Frontend Developer Intern
                  </h4>
                  <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    Zumra Food
                  </span>
                </div>
                
                <p class="text-xs text-slate-500 dark:text-slate-400 font-mono mb-3">
                  Cairo, Egypt • Internship Experience
                </p>

                <ul class="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed list-disc list-inside">
                  <li>Developed and maintained responsive web interfaces using Vue.js for seamless cross-device UX.</li>
                  <li>Collaborated with design teams to transform UI/UX wireframes into functional Vue components.</li>
                  <li>Integrated RESTful APIs for real-time dynamic content and handled application state management.</li>
                  <li>Participated in debugging, testing, and optimizing frontend performance.</li>
                </ul>

                <div class="flex flex-wrap gap-1.5 mt-3">
                  <span v-for="tag in ['Vue.js', 'REST APIs', 'Pinia', 'Responsive UI']" :key="tag" class="text-[11px] font-medium px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {{ tag }}
                  </span>
                </div>
              </div>

              <!-- Item: Modern Academy -->
              <div class="relative group">
                <span class="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-900 border-2 border-cyan-500 group-hover:scale-125 transition-transform"></span>
                
                <div class="flex flex-wrap items-center justify-between gap-1 mb-1">
                  <h4 class="text-lg font-bold text-slate-900 dark:text-white">
                    Bachelor of Computer Science
                  </h4>
                  <span class="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                    2023 – Present
                  </span>
                </div>
                
                <p class="text-xs text-slate-500 dark:text-slate-400 font-mono mb-2">
                  Modern Academy for Engineering and Technology • Cairo
                </p>

                <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  Focusing on software engineering principles, algorithms, data structures, and client-side web application architectures.
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { personalInfo, experiences } from '../data/portfolioData'
</script>
