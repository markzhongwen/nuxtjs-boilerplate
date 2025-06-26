<template>
  <section id="services" class="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 mb-4">Professional Services</h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive interpretation solutions tailored to your specific needs, 
          backed by years of experience and local expertise.
        </p>
      </div>
      
      <div class="grid md:grid-cols-3 gap-8">
        <div v-for="(service, index) in services" :key="index" 
             class="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
          <div class="text-4xl mb-4">{{ service.icon }}</div>
          <h3 class="text-2xl font-bold text-gray-900 mb-4">{{ service.title }}</h3>
          <p class="text-gray-600 mb-6 leading-relaxed">{{ service.description }}</p>
          <ul class="space-y-2">
            <li v-for="(feature, idx) in service.features" :key="idx" 
                class="flex items-center text-gray-700">
              <div class="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    title: "Conference Interpretation",
    description: "Professional simultaneous and consecutive interpretation for international conferences, business meetings, and corporate events.",
    icon: "🎤",
    features: ["Simultaneous Interpretation", "Consecutive Interpretation", "Technical Conferences", "Business Meetings"]
  },
  {
    title: "Business & Sourcing",
    description: "Expert interpretation for sourcing trips, factory visits, supplier negotiations, and international trade activities.",
    icon: "🏢",
    features: ["Factory Visits", "Supplier Negotiations", "Quality Control", "Trade Shows"]
  },
  {
    title: "Travel Interpretation",
    description: "Comprehensive travel interpretation services for tourists, business travelers, and cultural exchange programs.",
    icon: "✈️",
    features: ["City Tours", "Cultural Sites", "Business Travel", "Emergency Assistance"]
  }
]
</script>