<template>
  <div class="relative min-h-screen text-white">
    <!-- Background Image -->
    <div
      class="absolute inset-0 bg-cover bg-center z-0"
      style="background-image: url('https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1950&q=80');"
    >
      <div class="absolute inset-0 bg-black bg-opacity-60"></div>
    </div>

    <!-- Content -->
    <div class="relative z-10 max-w-3xl mx-auto px-6 py-16">
      <h1 class="text-4xl font-bold mb-4 text-center">Welcome to Mark’s Blog</h1>
      <p class="text-lg text-center mb-10">
        I’m Mark — a sourcing agent based in China with over 15 years of experience. I’ve helped more than 3,000 clients worldwide to buy, travel, and succeed in China.
      </p>

      <h2 class="text-2xl font-semibold mb-4 border-b border-white pb-2">📝 Latest Articles</h2>
      <ul class="space-y-4">
        <li class="p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition">
          <h3 class="text-xl font-bold">How to Find Reliable Chinese Suppliers</h3>
          <p class="text-sm text-gray-200">A complete guide from product selection to quality inspection.</p>
        </li>
        <li class="p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition">
          <h3 class="text-xl font-bold">Real Case: Sourcing Trip with Foreign Clients</h3>
          <p class="text-sm text-gray-200">See how we planned an end-to-end purchasing journey.</p>
        </li>
        <li class="p-4 bg-white bg-opacity-10 rounded-lg hover:bg-opacity-20 transition">
          <h3 class="text-xl font-bold">Cutting Shipping Costs by 30%</h3>
          <p class="text-sm text-gray-200">Strategies we use to save money and time.</p>
        </li>
      </ul>

      <!-- Contact Info -->
      <div class="mt-12 text-center">
        <p class="text-lg mb-2">📞 Get in touch with me today!</p>
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
