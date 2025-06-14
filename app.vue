<template>
  <div class="relative min-h-screen text-white font-sans">
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-cover bg-center z-0"
      style="background-image: url('https://images.unsplash.com/photo-1600840262767-0790576463d1?auto=format&fit=crop&w=1950&q=80');"
    >
      <div class="absolute inset-0 bg-black bg-opacity-60"></div>
    </div>

    <!-- Main Content -->
    <div class="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
      <h1 class="text-5xl font-bold mb-6">Welcome to Mark's China Services</h1>
      <p class="text-xl mb-10">Helping you travel and do business in China with confidence.</p>

      <div class="grid md:grid-cols-2 gap-8 text-left">
        <!-- Travel Service -->
        <div class="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition">
          <h2 class="text-2xl font-semibold mb-2">✈️ Travel to China</h2>
          <p>
            Personalized travel planning, translation, and cultural guidance. Whether for business or adventure, I’ll help you feel at home in China.
          </p>
          <ul class="mt-4 list-disc list-inside text-sm text-gray-200">
            <li>Custom itinerary & hotel booking</li>
            <li>Translation & tour guide</li>
            <li>Visa & local SIM setup</li>
          </ul>
        </div>

        <!-- Sourcing Agent -->
        <div class="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition">
          <h2 class="text-2xl font-semibold mb-2">🏭 Sourcing Agent</h2>
          <p>
            15+ years helping clients find reliable suppliers in China. I handle everything from negotiation to inspection.
          </p>
          <ul class="mt-4 list-disc list-inside text-sm text-gray-200">
            <li>Factory selection & negotiation</li>
            <li>Quality control & inspection</li>
            <li>Shipping & customs support</li>
          </ul>
        </div>
      </div>

      <!-- Contact -->
      <div class="mt-12">
        <p class="text-lg mb-2">📞 Get in touch now!</p>
        <a
          href="https://wa.me/8613838276878"
          class="text-blue-300 underline text-xl"
          target="_blank"
        >
          WhatsApp: +86 138 3827 6878
        </a>
      </div>
    </div>
  </div>
</template>
