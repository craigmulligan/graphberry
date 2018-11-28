module.exports = `
  type Network {
    address: String,
    ssid: String,
    mode: String,
    frequency: Float,
    channel: Int,
    security: String,
    quality: Int,
    signal: Int 
  }

  type Query {
    networks(iface: String): [Network]
  }
`
