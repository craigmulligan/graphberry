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
    configure: ({ id }, { mode }, rpio) => {
      rpio.open(id, rpio[mode], rpio[value])
      return { id }
    },
  },
  Mutation: {
    pin: (_, { id }) => ({ id }),
  },
}
