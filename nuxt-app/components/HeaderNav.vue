<template>
  <header class="fixed top-0 left-0 right-0 bg-white bg-opacity-95 backdrop-blur-sm shadow-sm z-50">
    <nav class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-4">
        <div class="flex items-center">
          <h1 class="text-2xl font-bold text-gray-900">Mark</h1>
          <span class="ml-2 text-sm text-blue-600 font-medium">Professional Interpreter</span>
        </div>
        <div class="hidden md:flex space-x-8">
          <a href="#about" class="text-gray-700 hover:text-blue-600 transition-colors">About</a>
          <a href="#services" class="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
          <a href="#experience" class="text-gray-700 hover:text-blue-600 transition-colors">Experience</a>
          <a href="#contact" class="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
        </div>
        <button 
          @click="scrollToSection('contact')"
          class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get Quote
        </button>
      </div>
    </nav>
  </header>
</template>

<script setup>
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>