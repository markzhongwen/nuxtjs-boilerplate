<template>
  <div class="relative min-h-screen text-white font-sans">
    <!-- 背景图片 + 半透明层 -->
    <div
      class="absolute inset-0 bg-cover bg-center z-0"
      style="background-image: url('https://images.unsplash.com/photo-1600840262767-0790576463d1?auto=format&fit=crop&w=1950&q=80');"
    >
      <div class="absolute inset-0 bg-black bg-opacity-60"></div>
    </div>

    <!-- 内容区 -->
    <div class="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
      <h1 class="text-5xl font-bold mb-6">Welcome to Mark's China Services</h1>
      <p class="text-xl mb-12">Helping you travel and do business in China with confidence.</p>

      <!-- 服务卡片 -->
      <div class="grid sm:grid-cols-2 gap-8">
        <div class="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition">
          <h2 class="text-3xl font-semibold mb-2">✈️ Travel to China</h2>
          <p class="mb-4">Personalized travel planning, translation & cultural guidance. I’ll help you feel at home in China.</p>
          <ul class="list-disc list-inside text-sm text-gray-200 space-y-1">
            <li>Custom itinerary & hotel booking</li>
            <li>Translation & tour guide</li>
            <li>Visa & local SIM setup</li>
          </ul>
        </div>
        <div class="bg-white bg-opacity-10 p-6 rounded-lg hover:bg-opacity-20 transition">
          <h2 class="text-3xl font-semibold mb-2">🏭 Sourcing Agent</h2>
          <p class="mb-4">With 15+ years experience, I help clients find reliable suppliers. From negotiation to inspection.</p>
          <ul class="list-disc list-inside text-sm text-gray-200 space-y-1">
            <li>Factory selection & negotiation</li>
            <li>Quality control & inspection</li>
            <li>Shipping & customs support</li>
          </ul>
        </div>
      </div>

      <!-- 联系方式 -->
      <div class="mt-12">
        <p class="text-lg mb-2">📞 Get in touch now!</p>
        <a
          href="https://wa.me/8613838276878"
          class="inline-block text-blue-300 underline text-xl"
          target="_blank"
        >
          WhatsApp: +86 138 3827 6878
        </a>
      </div>
    </div>
  </div>
</template>
