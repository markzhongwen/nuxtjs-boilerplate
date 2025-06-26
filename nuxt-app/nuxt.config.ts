export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/css/main.css'],
  ssr: true,
  app: {
    head: {
      title: 'Mark - Professional Chinese Interpreter Services | 15 Years Experience',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Professional Chinese interpreter with 15 years of sourcing and interpretation experience. Providing expert conference, buying, and travel interpretation services in China. Reliable, experienced, and professional language solutions.' 
        },
        { 
          name: 'keywords', 
          content: 'Chinese interpreter, interpreter services, conference interpreter, business interpreter, travel interpreter, sourcing interpreter, professional interpreter, China interpreter, interpretation services, language services' 
        },
        { name: 'author', content: 'Mark - Professional Interpreter' },
        { name: 'robots', content: 'index, follow' },
        
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Mark - Professional Chinese Interpreter Services | 15 Years Experience' },
        { property: 'og:description', content: 'Professional Chinese interpreter with 15 years of sourcing and interpretation experience. Providing expert conference, buying, and travel interpretation services in China.' },
        { property: 'og:image', content: 'https://images.unsplash.com/photo-1571822325911-c01620a65e86' },
        
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Mark - Professional Chinese Interpreter Services | 15 Years Experience' },
        { name: 'twitter:description', content: 'Professional Chinese interpreter with 15 years of sourcing and interpretation experience. Providing expert conference, buying, and travel interpretation services in China.' },
        { name: 'twitter:image', content: 'https://images.unsplash.com/photo-1571822325911-c01620a65e86' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  },
  runtimeConfig: {
    // Backend API URL for server-side
    apiUrl: process.env.NUXT_API_URL || 'https://e6a8d0de-892c-41b8-a02f-f95a46a03653.preview.emergentagent.com',
    public: {
      // Frontend API URL for client-side
      apiUrl: process.env.NUXT_PUBLIC_API_URL || 'https://e6a8d0de-892c-41b8-a02f-f95a46a03653.preview.emergentagent.com'
    }
  },
  nitro: {
    preset: 'vercel'
  }
})