<template>
  <div class="min-h-screen">
    <!-- Header -->
    <HeaderNav />
    
    <!-- Hero Section with Great Wall Background -->
    <HeroSection />
    
    <!-- About Section -->
    <AboutSection />
    
    <!-- Services Section -->
    <ServicesSection />
    
    <!-- Experience Section -->
    <ExperienceSection />
    
    <!-- Contact Section -->
    <ContactSection />
    
    <!-- Footer -->
    <FooterSection />
    
    <!-- Floating WhatsApp Button -->
    <FloatingWhatsApp />
  </div>
</template>

<script setup>
// Test backend connection
const { $fetch } = useNuxtApp()
const config = useRuntimeConfig()

onMounted(async () => {
  try {
    const response = await $fetch('/api/')
    console.log('Backend connected:', response.message)
  } catch (error) {
    console.error('Backend connection error:', error)
  }
})
</script>