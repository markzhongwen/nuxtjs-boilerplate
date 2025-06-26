<template>
  <section id="contact" class="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold mb-4">Ready to Work Together?</h2>
        <p class="text-xl text-blue-200 max-w-3xl mx-auto">
          Let's discuss your interpretation needs and how I can help bridge the language gap 
          for your next project or business venture.
        </p>
      </div>
      
      <!-- Quick Contact Methods -->
      <div class="grid md:grid-cols-2 gap-8 mb-12">
        <div 
          @click="openWhatsApp"
          class="bg-green-600 bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 cursor-pointer hover:bg-opacity-30 transition-all group"
        >
          <div class="flex items-center space-x-4">
            <div class="text-4xl">📱</div>
            <div>
              <h3 class="text-xl font-bold text-green-300 group-hover:text-green-200">WhatsApp</h3>
              <p class="text-green-200">+86 138 3827 6878</p>
              <p class="text-sm text-green-300">Click to chat instantly</p>
            </div>
          </div>
        </div>
        
        <div 
          @click="copyWeChatId"
          class="bg-blue-600 bg-opacity-20 backdrop-blur-sm rounded-2xl p-6 cursor-pointer hover:bg-opacity-30 transition-all group"
        >
          <div class="flex items-center space-x-4">
            <div class="text-4xl">💬</div>
            <div>
              <h3 class="text-xl font-bold text-blue-300 group-hover:text-blue-200">WeChat</h3>
              <p class="text-blue-200">13838276878</p>
              <p class="text-sm text-blue-300">Click to copy WeChat ID</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h3 class="text-2xl font-bold mb-6">Get in Touch</h3>
          <div class="space-y-4 mb-8">
            <div class="flex items-center">
              <span class="text-2xl mr-4">📧</span>
              <span class="text-blue-200">Available for email consultation</span>
            </div>
            <div class="flex items-center">
              <span class="text-2xl mr-4">📱</span>
              <span class="text-blue-200">WhatsApp: +86 138 3827 6878</span>
            </div>
            <div class="flex items-center">
              <span class="text-2xl mr-4">💬</span>
              <span class="text-blue-200">WeChat ID: 13838276878</span>
            </div>
            <div class="flex items-center">
              <span class="text-2xl mr-4">🌍</span>
              <span class="text-blue-200">Available across China</span>
            </div>
            <div class="flex items-center">
              <span class="text-2xl mr-4">⏰</span>
              <span class="text-blue-200">Quick response within 24 hours</span>
            </div>
          </div>
        </div>
        
        <div class="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
          <form @submit.prevent="submitForm" class="space-y-6">
            <div>
              <label class="block text-sm font-medium text-blue-200 mb-2">Name</label>
              <input 
                v-model="form.name"
                type="text" 
                class="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-blue-200 mb-2">Email</label>
              <input 
                v-model="form.email"
                type="email" 
                class="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="your.email@example.com"
                required
              />
            </div>
            <div>
              <label class="block text-sm font-medium text-blue-200 mb-2">Service Needed</label>
              <select 
                v-model="form.service"
                class="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              >
                <option value="">Select a service</option>
                <option value="conference">Conference Interpretation</option>
                <option value="business">Business & Sourcing</option>
                <option value="travel">Travel Interpretation</option>
              </select>
            </div>
            <div>
              <label class="block text-sm font-medium text-blue-200 mb-2">Message</label>
              <textarea 
                v-model="form.message"
                rows="4" 
                class="w-full px-4 py-3 bg-white bg-opacity-20 border border-white border-opacity-30 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Tell me about your project..."
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              :disabled="isSubmitting"
              class="w-full bg-yellow-500 text-blue-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors disabled:opacity-50"
            >
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  service: '',
  message: ''
})

const isSubmitting = ref(false)

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

const submitForm = async () => {
  isSubmitting.value = true
  try {
    // Here you could integrate with your backend API
    const response = await $fetch('/api/contact', {
      method: 'POST',
      body: form.value
    })
    
    alert('Message sent successfully! I will contact you soon.')
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      service: '',
      message: ''
    }
  } catch (error) {
    console.error('Error sending message:', error)
    alert('There was an error sending your message. Please try contacting via WhatsApp or WeChat.')
  } finally {
    isSubmitting.value = false
  }
}
</script>