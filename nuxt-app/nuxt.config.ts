export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/css/main.css'],
  ssr: true,
  nitro: {
    preset: 'vercel',
    prerender: {
      routes: ['/']
    }
  },
  app: {
    head: {
      title: 'Mark - Professional Chinese Interpreter Services | 15 Years Experience',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Professional Chinese interpreter with 15 years of sourcing and interpretation experience. Providing expert conference, buying, and travel interpretation services in China.' 
        }
      ]
    }
  },
  runtimeConfig: {
    public: {
      apiUrl: 'https://e6a8d0de-892c-41b8-a02f-f95a46a03653.preview.emergentagent.com'
    }
  }
})