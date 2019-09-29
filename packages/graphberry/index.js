const { ApolloServer } = require('apollo-server')
const gramps = require('@gramps/gramps').default
const loader = require('./loader')

module.exports = async (dataSources = []) => {
  const sources = await loader()

  const opts = await gramps({
    dataSources: [...sources, ...dataSources],
    enableMockData: false,
    apollo: {
      addMockFunctionsToSchema: {
        preserveResolvers: false,
      },
      formatError: err => {
        return formatError()(deserializeError(err))
      },
      tracing: true,
    },
  })

  return new ApolloServer(opts)
}
