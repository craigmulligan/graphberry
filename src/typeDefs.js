module.exports = `
  type Peripheral {
    id: ID
    address: String 
    addressType: String
    connectable: Boolean
    rssi: Int
    advertisement: Advertisement
    state: String 
  }

  type Service {
    uuid: String
    manufacturerData: String
  }

  type Advertisement {
    localName: String
    manufacturerData: String  
    serviceUUIDs: [String]
    solicitationServiceUuids:[String]
    txPowerLevel: String
    services: [Service]
  }

  type Query {
    peripherals: [Peripheral]
  }

  type Subscription {
    peripheral: Peripheral 
  } 
`
