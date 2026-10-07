<template>
  <div class="min-h-screen relative flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
    
    <!-- Subtle Background Dot Pattern / Ambient Grid -->
    <div class="fixed inset-0 pointer-events-none -z-20 opacity-[0.03] dark:opacity-[0.04]" 
         style="background-image: radial-gradient(#10b981 1px, transparent 1px); background-size: 24px 24px;">
    </div>

    <!-- Navigation Bar -->
    <Navbar />

    <!-- Main Sections -->
    <main class="flex-grow">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useTheme } from './composables/useTheme'
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Skills from './components/Skills.vue'
import Projects from './components/Projects.vue'
import Certificates from './components/Certificates.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'

const { initTheme } = useTheme()

onMounted(() => {
  initTheme()
})
</script>
