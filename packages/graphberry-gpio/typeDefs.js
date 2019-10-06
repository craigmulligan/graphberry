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

  enum CloseOption {
    RESET 
    PRESERVE 
  }

  type Pin {
    id: Int!
    value: PinValue!
  }
   
  type Query {
    pin(id: Int!): Pin 
  }

  type PinOps {
    """Write new value to Pin"""
    write(value: PinValue!): Pin 
    """Configure the Pin"""
    configure(mode: PinMode!, value: PinValue): Pin 
    """Configure the pins internal pullup or pulldown resistors"""
    pud(state: PinState!): Pin
    """Indicate that the pin will no longer be used, and clear any poll events associated with it."""
    close(option: CloseOption = RESET): Pin
  }

  type Mutation {
    pin(id: Int!): PinOps
  }

  type Subscription {
    """Poll for changes on Pin"""
    poll(id: Int!, state: PinState): Pin
  }
`
