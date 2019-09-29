const createServer = require('graphberry')
;(async () => {
  const server = await createServer()

  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`)
  })
})()
