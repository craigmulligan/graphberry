const server = require('graphberry')
const options = {
  port: process.env.PORT || 5000,
}

const s = server({ options }, ({ port }) =>
  console.log(`Your server is up on localhost:${5000}`),
)
