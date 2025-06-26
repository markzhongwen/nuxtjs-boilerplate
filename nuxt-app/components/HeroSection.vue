<template>
  <section class="relative min-h-screen flex items-center justify-center">
    <!-- Great Wall Background -->
    <div 
      class="absolute inset-0 bg-cover bg-center bg-no-repeat"
      :style="{
        backgroundImage: 'url(https://images.unsplash.com/photo-1571822325911-c01620a65e86)',
      }"
    >
      <div class="absolute inset-0 bg-black bg-opacity-40"></div>
    </div>
    
    <!-- Content -->
    <div class="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
        Professional Chinese
        <span class="block text-yellow-400">Interpreter Services</span>
      </h1>
      <p class="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
        With 15 years of sourcing and interpretation experience, I provide expert conference, 
        business, and travel interpretation services across China.
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button 
          @click="scrollToSection('contact')"
          class="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
        >
          Book Consultation
        </button>
        <button 
          @click="scrollToSection('services')"
          class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
        >
          View Services
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>