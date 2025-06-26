<template>
  <section id="experience" class="py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Why Choose Mark?</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Experience the difference that comes with working with a seasoned professional 
          who understands both language and culture.
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="(feature, index) in features" :key="index" class="text-center p-6">
          <div class="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
               :class="feature.bgColor">
            <span class="text-2xl">{{ feature.icon }}</span>
          </div>
          <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ feature.title }}</h3>
          <p class="text-gray-600">{{ feature.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    title: "Proven Track Record",
    description: "15 years of successful interpretation projects across various industries.",
    icon: "⭐",
    bgColor: "bg-blue-100"
  },
  {
    title: "Specialized Expertise",
    description: "Deep knowledge in business, technical, and cultural contexts.",
    icon: "🎯",
    bgColor: "bg-green-100"
  },
  {
    title: "Cultural Bridge",
    description: "Understanding of both Eastern and Western business practices.",
    icon: "🤝",
    bgColor: "bg-purple-100"
  },
  {
    title: "Reliable Service",
    description: "Punctual, professional, and committed to your success.",
    icon: "⚡",
    bgColor: "bg-orange-100"
  }
]
</script>