const { ApolloServer, PubSub } = require('apollo-server')
const gramps = require('@gramps/gramps').default
const loader = require('./loader')
const pubsub = new PubSub()

module.exports = async (dataSources = []) => {
  const sources = await loader()

  const opts = await gramps({
    dataSources: [...sources, ...dataSources],
    enableMockData: false,
    apollo: {
      addMockFunctionsToSchema: {
        preserveResolvers: false,
      },
      tracing: true,
      context: {
        pubsub,
      },
    },
  })

  return new ApolloServer(opts)
}
