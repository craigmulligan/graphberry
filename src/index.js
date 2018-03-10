const { GraphQLServer, PubSub } = require('graphql-yoga')
const Peripherals = require('./ble/peripherals')
const uuid = require('uuid/v4')
const PORT = process.env.PORT

const typeDefs = `
  type Peripheral {
    id: ID
    address: String 
    addressType: String
    connectable: Boolean
    rssi: Int
  }

  type Query {
    peripherals: [Peripheral]
  }

  type Subscription {
    peripheral: Peripheral 
  } 
`

const resolvers = {
  Query: {
    peripherals: _ => {},
  },
  Subscription: {
    peripheral: {
      subscribe: (parent, args, { pubsub, connection }) => {
        const scanner = new Peripherals({
          pubsub,
          websocket: connection.context.websocket,
        })
        scanner.discover()
        return pubsub.asyncIterator(scanner.channel)
      },
    },
  },
}

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
