const { GraphQLServer, PubSub } = require('graphql-yoga')
const ble = require('./ble')
const PORT = process.env.PORT || 4000

const { prepare } = require('@gramps/gramps')

// merge all data sources to a single schema
const opts = prepare({ dataSources: [ble] })

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
    port: PORT,
  },
  () => console.log('Server is running on localhost:4000'),
)
