<template>
  <section id="home" class="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
    <!-- Ambient Background Glows -->
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/15 dark:bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
    <div class="absolute top-1/3 right-10 w-[400px] h-[400px] bg-cyan-500/15 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <!-- Left Content Column -->
        <div class="lg:col-span-7 space-y-6 text-center lg:text-left">
          
          <!-- Availability Badge -->
          <div class="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 shadow-sm">
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span>Available for Frontend Roles & Freelance</span>
          </div>

          <!-- Main Headline -->
          <div class="space-y-2">
            <p class="text-sm md:text-base font-mono font-medium text-emerald-600 dark:text-emerald-400">
              Hi, my name is
            </p>
            <h1 class="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              Mina Raafat <span class="gradient-text-emerald">Fakry</span>
            </h1>
            <div class="h-10 md:h-12 flex items-center justify-center lg:justify-start">
              <h2 class="text-xl sm:text-2xl md:text-3xl font-bold text-slate-700 dark:text-slate-200">
                <span class="text-slate-400 dark:text-slate-500">I build </span>
                <span class="text-emerald-600 dark:text-teal-400 font-mono underline decoration-emerald-500/40">{{ currentTitle }}</span>
                <span class="animate-pulse text-emerald-500">|</span>
              </h2>
            </div>
          </div>

          <!-- Summary / Bio -->
          <p class="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0">
            Frontend Developer specializing in <span class="text-emerald-600 dark:text-emerald-400 font-semibold">Vue.js (Vue 3, Composition API)</span> and state management with <span class="text-teal-600 dark:text-teal-400 font-semibold">Pinia</span>. Passionate about transforming complex designs into pixel-perfect, responsive user interfaces while following clean architecture and modern web standards.
          </p>

          <!-- Action Buttons -->
          <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
            <a 
              href="#projects" 
              class="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
            >
              <span>Explore Projects</span>
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>

            <a 
              href="#contact" 
              class="px-6 py-3 rounded-xl font-semibold text-slate-700 dark:text-slate-200 bg-white/80 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/80 hover:bg-slate-100 dark:hover:bg-slate-700/80 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
            >
              <span>Get In Touch</span>
              <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>

            <a 
              :href="personalInfo.whatsapp"
              target="_blank"
              rel="noopener noreferrer"
              class="px-4 py-3 rounded-xl font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/20 hover:bg-emerald-100 dark:hover:bg-emerald-900/40 transition-colors flex items-center gap-2"
            >
              <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>

          <!-- Quick Social & Info Bar -->
          <div class="pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-500 dark:text-slate-400">
            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Cairo, Egypt</span>
            </div>

            <a 
              :href="personalInfo.github" 
              target="_blank" 
              rel="noopener noreferrer"
              class="flex items-center gap-2 hover:text-emerald-500 transition-colors"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
              <span>github.com/monz7</span>
            </a>

            <div class="flex items-center gap-2">
              <svg class="w-4 h-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>minarafat113@gmail.com</span>
            </div>
          </div>

        </div>

        <!-- Right Visual Column: Interactive Vue 3 Code Editor Card -->
        <div class="lg:col-span-5">
          <div class="relative mx-auto max-w-md lg:max-w-none">
            
            <!-- Glowing border effect -->
            <div class="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-30 dark:opacity-40 blur-xl"></div>
            
            <!-- VS Code style Card -->
            <div class="relative rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden font-mono text-xs sm:text-sm">
              
              <!-- Window Title Bar -->
              <div class="px-4 py-3 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
                <div class="flex items-center gap-2">
                  <span class="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span class="w-3 h-3 rounded-full bg-amber-500/80"></span>
                  <span class="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                </div>
                <div class="text-xs text-slate-400 font-sans font-medium flex items-center gap-1.5">
                  <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
                  MinaDeveloper.vue
                </div>
                <span class="text-[10px] text-slate-500 font-sans">Vue 3 SFC</span>
              </div>

              <!-- Code Content -->
              <div class="p-4 sm:p-5 text-slate-300 leading-relaxed overflow-x-auto space-y-1">
                <div><span class="text-purple-400">&lt;script</span> <span class="text-amber-300">setup</span><span class="text-purple-400">&gt;</span></div>
                <div class="pl-4"><span class="text-purple-400">import</span> { ref, reactive } <span class="text-purple-400">from</span> <span class="text-emerald-300">'vue'</span></div>
                <div class="pl-4"><span class="text-purple-400">import</span> { usePiniaStore } <span class="text-purple-400">from</span> <span class="text-emerald-300">'@/stores'</span></div>
                <div class="py-1"></div>
                
                <div class="pl-4 text-slate-500">// Developer identity</div>
                <div class="pl-4">
                  <span class="text-purple-400">const</span> <span class="text-blue-300">developer</span> = <span class="text-blue-400">reactive</span>({
                </div>
                <div class="pl-8">
                  <span class="text-slate-200">name:</span> <span class="text-emerald-300">'Mina Raafat Fakry'</span>,
                </div>
                <div class="pl-8">
                  <span class="text-slate-200">role:</span> <span class="text-emerald-300">'Frontend Developer'</span>,
                </div>
                <div class="pl-8">
                  <span class="text-slate-200">stack:</span> [<span class="text-teal-300">'Vue 3'</span>, <span class="text-teal-300">'Pinia'</span>, <span class="text-teal-300">'Tailwind'</span>],
                </div>
                <div class="pl-8">
                  <span class="text-slate-200">location:</span> <span class="text-emerald-300">'Cairo, Egypt'</span>,
                </div>
                <div class="pl-8">
                  <span class="text-slate-200">passion:</span> <span class="text-emerald-300">'Pixel-Perfect UI & Scalability'</span>
                </div>
                <div class="pl-4">})</div>
                <div class="py-1"></div>

                <div class="pl-4 text-slate-500">// Ready to build great applications</div>
                <div class="pl-4">
                  <span class="text-purple-400">const</span> <span class="text-yellow-300">buildFuture</span> = () =&gt; {
                </div>
                <div class="pl-8 text-cyan-300">
                  <span class="text-purple-400">return</span> <span class="text-emerald-300">"Creating exceptional digital products"</span>
                </div>
                <div class="pl-4">}</div>
                <div><span class="text-purple-400">&lt;/script&gt;</span></div>
              </div>

              <!-- Footer info inside card -->
              <div class="px-4 py-2.5 bg-slate-950/80 border-t border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
                <span class="flex items-center gap-1.5">
                  <span class="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Composition API Active
                </span>
                <span class="text-emerald-400 font-semibold">100% Responsive</span>
              </div>

            </div>

            <!-- Floating Badge Widget: Pinia + Tailwind -->
            <div class="absolute -bottom-6 -left-6 glass-card p-3 rounded-xl shadow-xl hidden sm:flex items-center gap-3 border border-emerald-500/20 bg-slate-900/90 text-white">
              <div class="w-10 h-10 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400 font-bold">
                ⚡
              </div>
              <div>
                <p class="text-xs font-bold text-slate-900 dark:text-white">State Management</p>
                <p class="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">Pinia & Vuex Ready</p>
              </div>
            </div>

            <!-- Floating Badge Widget: E-Commerce -->
            <div class="absolute -top-6 -right-4 glass-card p-3 rounded-xl shadow-xl hidden sm:flex items-center gap-3 border border-cyan-500/20 bg-slate-900/90 text-white">
              <div class="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 font-bold">
                🛒
              </div>
              <div>
                <p class="text-xs font-bold text-slate-900 dark:text-white">Real-world Web Apps</p>
                <p class="text-[11px] text-cyan-600 dark:text-cyan-400 font-medium">REST APIs & Checkout</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { personalInfo } from '../data/portfolioData'

const titles = [
  'Frontend Developer (Vue.js)',
  'Vue 3 & Pinia Specialist',
  'Modern UI/UX Craftsman',
  'Pixel-Perfect Responsive UIs',
  'Scalable Web Architectures'
]

const currentTitle = ref(titles[0])
let titleIndex = 0
let timer = null

onMounted(() => {
  timer = setInterval(() => {
    titleIndex = (titleIndex + 1) % titles.length
    currentTitle.value = titles[titleIndex]
  }, 3000)
})

onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>
