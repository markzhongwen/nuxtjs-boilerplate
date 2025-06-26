<template>
  <div class="min-h-screen bg-gray-100">
    <h1 class="text-4xl font-bold text-center pt-20">Mark - Professional Chinese Interpreter</h1>
    <p class="text-center mt-4 text-gray-600">15 Years of Professional Experience</p>
    
    <div class="max-w-4xl mx-auto mt-10 p-8">
      <div class="bg-white rounded-lg shadow-lg p-8">
        <h2 class="text-2xl font-bold mb-4">Contact Information</h2>
        <div class="space-y-4">
          <div class="flex items-center">
            <span class="text-2xl mr-4">📱</span>
            <span>WhatsApp: +86 138 3827 6878</span>
          </div>
          <div class="flex items-center">
            <span class="text-2xl mr-4">💬</span>
            <span>WeChat: 13838276878</span>
          </div>
        </div>
        
        <div class="mt-8">
          <button 
            @click="openWhatsApp"
            class="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 mr-4"
          >
            Chat on WhatsApp
          </button>
          <button 
            @click="copyWeChatId"
            class="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          >
            Copy WeChat ID
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Mark - Professional Chinese Interpreter Services',
  meta: [
    { name: 'description', content: 'Professional Chinese interpreter with 15 years of experience. Contact via WhatsApp or WeChat.' }
  ]
})

const openWhatsApp = () => {
  if (process.client) {
    window.open('https://wa.me/8613838276878?text=Hello%20Mark%2C%20I%27m%20interested%20in%20your%20interpreter%20services.', '_blank')
  }
}

const copyWeChatId = () => {
  if (process.client) {
    navigator.clipboard.writeText('13838276878')
    alert('WeChat ID copied to clipboard!')
  }
}
</script>