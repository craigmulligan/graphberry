const { PubSub } = require('apollo-server')
const pubsub = new PubSub()
const LOW = 'LOW'
const HIGH = 'HIGH'

module.exports = {
  Query: {
    pin: (_, { id }) => {
      return {
        id,
      }
    },
  },
  Pin: {
    value: ({ id }, _, { rpio }) => {
      return rpio.read(id) ? HIGH : LOW
    },
  },
  PinOps: {
    write: ({ id }, { value }, { rpio }) => {
      rpio.write(id, rpio[value])
      return { id }
    },
    configure: ({ id }, { mode }, { rpio }) => {
      rpio.open(id, rpio[mode], rpio[value])
      return { id }
    },
    pud: ({ id }, { state }, { rpio }) => {
      rpio.pud(id, state)
      return { id }
    },
  },
  Mutation: {
    pin: (_, { id }) => ({ id }),
  },
  Subscription: {
    poll: {
      subscribe: (_, { id, state }, { gpio }) => {
        const cb = () => {
          pubsub.publish(`pin-${id}`, { id })
        }
        try {
          gpio.rpio.poll(id, cb, state)
        } catch (err) {
          if (err.message.includes('is already listening for events')) {
            try {
              gpio.rpio.close(id)
              gpio.rpio.poll(id, cb, state)
            } catch (err) {
              console.log(err)
            }
          }
        }
        return pubsub.asyncIterator([`pin-${id}`])
      },
    },
  },
}
