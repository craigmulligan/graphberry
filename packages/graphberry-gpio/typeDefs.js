module.exports = `
  enum PinMode {
    INPUT 
    OUTPUT
    PWM
  } 

  enum PinValue {
    LOW
    HIGH
    PULL_DOWN
  }

  type Pin {
    id: Int
    value: PinValue
  }
   
  type Query {
    pin(id: Int!): Pin 
  }

  type PinOps {
    write(value: PinValue!): Pin 
    configure(mode: PinMode!, value: PinValue): Pin 
  }

  type Mutation {
    pin(id: Int!): PinOps
  }
`
