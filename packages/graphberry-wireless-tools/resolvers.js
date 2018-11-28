const iwlist = require('wireless-tools/iwlist')

module.exports = {
  Query: {
    networks: (_, { iface }) => {
      return new Promise((resolve, reject) => {
        iwlist.scan(iface || 'wlan0', (err, networks) => {
          resolve(networks)
        })
      })
    },
  },
}
