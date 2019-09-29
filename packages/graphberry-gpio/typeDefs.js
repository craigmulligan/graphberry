module.exports = `
  enum PinMode {
    INPUT 
    OUTPUT
    PWM
  } 

  enum PinValue {
    LOW
    HIGH
  }

  enum PinState {
    PULL_DOWN
    PULL_UP
    PULL_OFF
  }

  type Pin {
    id: Int!
    value: PinValue!
  }
   
  type Query {
    pin(id: Int!): Pin 
  }

  type PinOps {
    write(value: PinValue!): Pin 
    configure(mode: PinMode!, value: PinValue): Pin 
    pud(state: PinState): Pin
  }

  type Mutation {
    pin(id: Int!): PinOps
  }

  type Subscription {
    poll(id: Int!): Pin 
  }
`
