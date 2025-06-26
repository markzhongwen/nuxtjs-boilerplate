export default defineEventHandler(async (event) => {
  // Proxy to FastAPI backend
  const config = useRuntimeConfig()
  
  try {
    const response = await $fetch('/api/', {
      baseURL: config.apiUrl
    })
    return response
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Backend API connection failed'
    })
  }
})