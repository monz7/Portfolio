<template>
  <section id="certifications" class="py-20 relative bg-slate-100/50 dark:bg-slate-900/30">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-xs sm:text-sm font-semibold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase font-mono">
          // Verified Credentials
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
          Certifications & <span class="gradient-text-emerald">Achievements</span>
        </h2>
        <p class="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
          Formal accreditations, intensive bootcamps, and government-backed freelance training credentials.
        </p>
      </div>

      <!-- Certificates Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div 
          v-for="cert in certificates" 
          :key="cert.id"
          class="glass-card rounded-2xl border border-slate-200 dark:border-slate-800/80 overflow-hidden flex flex-col justify-between hover:border-emerald-500/40 hover:shadow-xl transition-all duration-300 group"
        >
          <!-- Certificate Content Header -->
          <div>
            <!-- If Certificate has Image: Show Visual Card Preview -->
            <div 
              v-if="cert.image" 
              class="relative aspect-[16/10] overflow-hidden bg-slate-900/10 dark:bg-slate-900 cursor-pointer group/img"
              @click="openModal(cert)"
            >
              <img 
                :src="cert.image" 
                :alt="cert.title" 
                class="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-slate-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                <span class="px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-500 text-white shadow-lg flex items-center gap-2">
                  <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                  View Full Certificate
                </span>
              </div>
              <div class="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 text-emerald-400 backdrop-blur-md border border-emerald-500/30 flex items-center gap-1.5">
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Verified Image</span>
              </div>
            </div>

            <!-- Placeholder Header for non-image Track -->
            <div 
              v-else 
              class="p-6 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between"
            >
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                  📜
                </div>
                <div>
                  <span class="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400">
                    {{ cert.badge }}
                  </span>
                  <p class="text-xs text-slate-500 dark:text-slate-400">{{ cert.issuer }}</p>
                </div>
              </div>
              <span class="text-xs font-mono px-2.5 py-1 rounded-md bg-white/60 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                {{ cert.year }}
              </span>
            </div>

            <!-- Card Info -->
            <div class="p-6 sm:p-8 space-y-4">
              <div>
                <div class="flex items-center justify-between gap-2 mb-1">
                  <span class="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold">
                    {{ cert.issuer }}
                  </span>
                  <span v-if="cert.credentialId" class="text-[11px] font-mono text-slate-400">
                    ID: {{ cert.credentialId }}
                  </span>
                </div>
                <h3 class="text-xl font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                  {{ cert.title }}
                </h3>
              </div>

              <p class="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {{ cert.description }}
              </p>

              <div v-if="cert.signee" class="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <span>Awarded by:</span>
                <strong class="text-slate-700 dark:text-slate-300">{{ cert.signee }}</strong>
              </div>

              <!-- Skills covered in cert -->
              <div class="flex flex-wrap gap-1.5 pt-1">
                <span 
                  v-for="s in cert.skills" 
                  :key="s"
                  class="text-xs font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                >
                  {{ s }}
                </span>
              </div>
            </div>
          </div>

          <!-- Bottom Action -->
          <div class="p-6 sm:px-8 sm:pb-8 pt-0">
            <button 
              v-if="cert.image"
              @click="openModal(cert)"
              type="button"
              class="w-full py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 transition-colors flex items-center justify-center gap-2"
            >
              <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>View Full Document</span>
            </button>
            <div 
              v-else
              class="w-full py-2.5 rounded-xl text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/60 text-center"
            >
              Verified via Curriculum Transcript
            </div>
          </div>

        </div>
      </div>

    </div>

    <!-- Lightbox Modal for Full Certificate Inspection -->
    <transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div 
        v-if="modalOpen && selectedCert" 
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md"
        @click.self="closeModal"
      >
        <div class="relative max-w-4xl w-full max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
          
          <!-- Modal Header -->
          <div class="px-6 py-4 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
            <div class="flex items-center gap-3">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400"></span>
              <div>
                <h4 class="text-sm sm:text-base font-bold text-white">{{ selectedCert.title }}</h4>
                <p class="text-xs text-slate-400">{{ selectedCert.issuer }}</p>
              </div>
            </div>

            <div class="flex items-center gap-2">
              <a 
                :href="selectedCert.image" 
                target="_blank" 
                rel="noopener noreferrer"
                class="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors flex items-center gap-1.5"
                title="Open original image in new tab"
              >
                <span>Original</span>
                <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <button 
                @click="closeModal" 
                class="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                aria-label="Close modal"
              >
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <!-- Modal Image Body -->
          <div class="overflow-auto p-4 sm:p-6 flex items-center justify-center bg-slate-950/60">
            <img 
              :src="selectedCert.image" 
              :alt="selectedCert.title" 
              class="max-h-[70vh] w-auto object-contain rounded-lg shadow-xl border border-slate-800"
            />
          </div>

          <!-- Modal Footer Details -->
          <div class="px-6 py-3 bg-slate-950 border-t border-slate-800 text-xs text-slate-400 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span>Signee: </span>
              <strong class="text-slate-200">{{ selectedCert.signee }}</strong>
            </div>
            <div v-if="selectedCert.credentialId" class="font-mono">
              Credential ID: <span class="text-emerald-400">{{ selectedCert.credentialId }}</span>
            </div>
          </div>

        </div>
      </div>
    </transition>

  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { certificates } from '../data/portfolioData'

const modalOpen = ref(false)
const selectedCert = ref(null)

const openModal = (cert) => {
  if (!cert.image) return
  selectedCert.value = cert
  modalOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeModal = () => {
  modalOpen.value = false
  selectedCert.value = null
  document.body.style.overflow = ''
}

const handleKeyDown = (e) => {
  if (e.key === 'Escape' && modalOpen.value) {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
})
</script>
