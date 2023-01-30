import WebPush from 'web-push'
import { FastifyInstance } from "fastify"

// ele vai gerar uma chave que  aparecer no cosole tem uma public e uma private
// console.log(WebPush.generateVAPIDKeys())
const publicKey = 'BM1XXlijlPep--EjnvsCjg7eRAfPyiJdRg_T8kypGzRdJDG6tJdsB1xsAQhrHSwdtrxmoZJ9AL1CHLLXL4icb_0'
const privateKey = 'b8Gw4R0jEuauhl56FPI3Kzxinkl0Fla8Kqhvn6Q60VA'

WebPush.setVapidDetails(
  'http://localhost:3333', publicKey, privateKey)

export async function notificationRoutes(app: FastifyInstance) {
  app.get('/push/public_key', () =>{
    return {
      publicKey
    }
  })

  app.post('/push/register', (request,reply) => {
    console.log(request.body)
    return reply.status(201).send()
  })

  app.post('/push/send', async (request, reply) => {
    console.log(request.body)
    return reply.status(201).send()
  })
}
