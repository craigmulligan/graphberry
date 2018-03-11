const { GraphQLServer, PubSub } = require('graphql-yoga')
const { prepare } = require('@gramps/gramps')
const loader = require('./loader')

module.exports = async ({ dataSources = [], options = {} } = {}) => {
  const sources = await loader()

  // merge all data sources to a single schema
  const opts = prepare({
    dataSources: [...sources, ...dataSources],
  })

  const pubsub = new PubSub()

  const server = new GraphQLServer({
    ...opts,
    context: ({ request, connection }) => ({
      request,
      connection,
      pubsub,
    }),
  })

  server.start(
    {
      subscriptions: {
        onConnect: (connectionParams, websocket) => {
          return {
            websocket,
          }
        },
      },
      ...options,
    },
    ({ port }) => console.log(`Server is running on localhost:${port}`),
  )
}
