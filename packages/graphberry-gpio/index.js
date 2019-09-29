const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')
const rpio = require('rpio')

module.exports = {
  namespace: 'gpio',
  typeDefs,
  resolvers,
  context: ctx => {
    rpio.init()
    return {
      ...ctx,
      rpio,
    }
  },
}
