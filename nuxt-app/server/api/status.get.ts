export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  
  try {
    const response = await $fetch('/api/status', {
      baseURL: config.apiUrl
    })
    return response
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to fetch status checks'
    })
  }
})