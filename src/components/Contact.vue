<template>
  <section id="contact" class="py-20 relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="text-xs sm:text-sm font-semibold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase font-mono">
          // Get In Touch
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2">
          Let's Work <span class="gradient-text-emerald">Together</span>
        </h2>
        <p class="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300">
          Interested in working together or discussing frontend opportunities? Send me a message or connect directly.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        <!-- Left: Contact Details Cards -->
        <div class="lg:col-span-5 space-y-4">
          
          <!-- Email Card with Copy Button -->
          <div class="glass-card p-6 rounded-2xl border flex items-center justify-between hover:border-emerald-500/40 transition-colors group">
            <div class="flex items-center gap-4">
              <div class="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p class="text-xs text-slate-500 dark:text-slate-400 font-mono">Direct Email</p>
                <a 
                  :href="'mailto:' + personalInfo.email" 
                  class="text-sm sm:text-base font-bold text-slate-900 dark:text-white hover:text-emerald-500 transition-colors"
                >
                  {{ personalInfo.email }}
                </a>
              </div>
            </div>

            <button 
              @click="copyEmail" 
              type="button"
              class="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 transition-colors"
              :title="copied ? 'Email Copied!' : 'Copy to Clipboard'"
            >
              {{ copied ? 'Copied! ✓' : 'Copy' }}
            </button>
          </div>

          <!-- Phone & WhatsApp Card -->
          <a 
            :href="personalInfo.whatsapp"
            target="_blank"
            rel="noopener noreferrer" 
            class="glass-card p-6 rounded-2xl border flex items-center gap-4 hover:border-emerald-500/40 transition-colors group block"
          >
            <div class="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-500 flex items-center justify-center shrink-0">
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </div>
            <div>
              <p class="text-xs text-slate-500 dark:text-slate-400 font-mono">WhatsApp & Mobile</p>
              <p class="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                +20 {{ personalInfo.phoneDisplay }}
              </p>
            </div>
          </a>

          <!-- GitHub Profile Card -->
          <a 
            :href="personalInfo.github"
            target="_blank"
            rel="noopener noreferrer" 
            class="glass-card p-6 rounded-2xl border flex items-center gap-4 hover:border-emerald-500/40 transition-colors group block"
          >
            <div class="w-12 h-12 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white flex items-center justify-center shrink-0">
              <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </div>
            <div>
              <p class="text-xs text-slate-500 dark:text-slate-400 font-mono">GitHub Profile</p>
              <p class="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                github.com/{{ personalInfo.githubUsername }}
              </p>
            </div>
          </a>

          <!-- Location Card -->
          <div class="glass-card p-6 rounded-2xl border flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center shrink-0">
              <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p class="text-xs text-slate-500 dark:text-slate-400 font-mono">Location & Availability</p>
              <p class="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                {{ personalInfo.location }} • Remote / On-site
              </p>
            </div>
          </div>

        </div>

        <!-- Right: Interactive Contact Form -->
        <div class="lg:col-span-7">
          <div class="glass-card p-6 sm:p-8 rounded-2xl border">
            
            <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Send a Message
            </h3>
            <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mb-6">
              Fill in the form below and it will compose an email directly to Mina.
            </p>

            <form @submit.prevent="submitForm" class="space-y-4">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label class="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Your Name *
                  </label>
                  <input 
                    v-model="form.name"
                    type="text" 
                    required
                    placeholder="e.g. John Doe"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                  />
                </div>

                <div>
                  <label class="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Your Email *
                  </label>
                  <input 
                    v-model="form.email"
                    type="email" 
                    required
                    placeholder="name@example.com"
                    class="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                  />
                </div>
              </div>

              <div>
                <label class="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Subject *
                </label>
                <input 
                  v-model="form.subject"
                  type="text" 
                  required
                  placeholder="Project Opportunity / Frontend Collaboration"
                  class="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm"
                />
              </div>

              <div>
                <label class="block text-xs font-mono font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Your Message *
                </label>
                <textarea 
                  v-model="form.message"
                  rows="4" 
                  required
                  placeholder="Tell me about your project, timeline, or job inquiry..."
                  class="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500 text-sm resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                :disabled="isSubmitting"
                class="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 shadow-md shadow-emerald-500/20 disabled:opacity-70 transition-all flex items-center justify-center gap-2"
              >
                <svg v-if="isSubmitting" class="animate-spin w-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span v-if="!isSubmitting">Send Message Now</span>
                <span v-else>Preparing Message...</span>
              </button>

              <!-- Success Alert -->
              <transition
                enter-active-class="transition duration-300 ease-out"
                enter-from-class="opacity-0 -translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
              >
                <div v-if="submitted" class="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm">
                  ✓ Thank you! Your email client has been opened with your message ready to send. You can also reach Mina directly via WhatsApp.
                </div>
              </transition>
            </form>

          </div>
        </div>

      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { personalInfo } from '../data/portfolioData'

const copied = ref(false)
const isSubmitting = ref(false)
const submitted = ref(false)

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const copyEmail = () => {
  navigator.clipboard.writeText(personalInfo.email)
  copied.value = true
  setTimeout(() => {
    copied.value = false
  }, 2500)
}

const submitForm = () => {
  isSubmitting.value = true
  
  // Compose mailto URI
  const subject = encodeURIComponent(`[Portfolio] ${form.subject}`)
  const body = encodeURIComponent(
    `From: ${form.name} (${form.email})\n\nMessage:\n${form.message}`
  )
  const mailtoUri = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`

  setTimeout(() => {
    isSubmitting.value = false
    submitted.value = true
    window.location.href = mailtoUri
    
    // Reset form fields
    form.name = ''
    form.email = ''
    form.subject = ''
    form.message = ''
  }, 600)
}
</script>
