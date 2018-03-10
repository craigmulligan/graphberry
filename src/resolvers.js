const Peripherals = require('./ble/peripherals')

module.exports = {
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
