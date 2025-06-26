export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig()
  
  try {
    // Send contact form data to FastAPI backend
    const response = await $fetch('/api/status', {
      method: 'POST',
      baseURL: config.apiUrl,
      body: {
        client_name: `${body.name} - ${body.service}`
      }
    })
    
    return {
      success: true,
      message: 'Contact form submitted successfully',
      data: response
    }
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to submit contact form'
    })
  }
})