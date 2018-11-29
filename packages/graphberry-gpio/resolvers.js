const rpio = require('rpio')
rpio.init()

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
    value: ({ id }) => {
      console.log(rpio.read(id))
      return rpio.read(id) ? HIGH : LOW
    },
  },
  PinOps: {
    write: ({ id }, { value }) => {
      rpio.write(id, rpio[value])
      return { id }
    },
    configure: ({ id }, { mode, value }) => {
      rpio.open(id, rpio[mode], rpio[value])
      return { id }
    },
  },
  Mutation: {
    pin: (_, { id }) => ({ id }),
  },
}
