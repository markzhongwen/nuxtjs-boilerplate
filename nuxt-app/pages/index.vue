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
// SEO Head
useHead({
  title: 'Mark - Professional Chinese Interpreter Services | 15 Years Experience',
  meta: [
    { name: 'description', content: 'Professional Chinese interpreter with 15 years of sourcing and interpretation experience. Providing expert conference, buying, and travel interpretation services in China.' }
  ]
})

// Test backend connection (client-side only)
onMounted(async () => {
  try {
    const response = await $fetch('/api/')
    console.log('API connected:', response.message)
  } catch (error) {
    console.log('API connection error (this is normal on static sites):', error)
  }
})
</script>