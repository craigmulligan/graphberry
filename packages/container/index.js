const server = require('graphberry')
const options = {
  port: process.env.PORT || 5000,
}

server({ options })
