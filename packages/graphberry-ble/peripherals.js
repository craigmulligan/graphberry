const noble = require('noble')
const uuid = require('uuid/v4')
const DESIRED_STATE = 'poweredOn'

class Peripherals {
  constructor({ pubsub, websocket }) {
    ;(this.pubsub = pubsub), (this.channel = uuid())
    this.websocket = websocket
  }

  discover() {
    if (noble.state === DESIRED_STATE) {
      noble.startScanning()
    }
    noble.on('stateChange', state => {
      if (state === DESIRED_STATE) {
        noble.startScanning()
      } else {
        noble.stopScanning()
      }
    })

    noble.on('discover', peripheral => {
      this.pubsub.publish(this.channel, {
        peripheral,
      })
    })

    this.websocket.on('close', () => {
      noble.stopScanning()
    })
  }
}

module.exports = Peripherals
