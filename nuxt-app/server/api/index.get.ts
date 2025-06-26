export default defineEventHandler(async (event) => {
  return {
    message: "Hello World",
    status: "ok",
    timestamp: new Date().toISOString()
  }
})