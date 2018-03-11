const iwlist = require('wireless-tools/iwlist')

module.exports = {
  Query: {
    networks: (_, { interface = 'wlan0' }) => {
      return new Promise((resolve, reject) => {
        iwlist.scan(interface, (err, networks) => {
          console.log({ networks })
          resolve(networks)
        })
      })
    },
  },
}
