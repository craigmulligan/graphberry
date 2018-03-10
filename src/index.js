const { GraphQLServer, PubSub } = require('graphql-yoga')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
const PORT = process.env.PORT || 4000

const pubsub = new PubSub()
const server = new GraphQLServer({
  typeDefs,
  resolvers,
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
