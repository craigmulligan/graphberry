const createServer = require('graphberry')
;(async () => {
  const server = await createServer()

  server.listen({ port: process.env.PORT || 80 }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
  })
})()
