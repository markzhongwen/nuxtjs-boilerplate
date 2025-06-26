export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  
  return {
    success: true,
    message: 'Contact form received',
    data: {
      name: body.name,
      email: body.email,
      service: body.service,
      timestamp: new Date().toISOString()
    }
  }
})