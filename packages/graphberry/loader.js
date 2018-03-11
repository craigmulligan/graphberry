const glob = require('glob')

const getPaths = pattern => {
  return new Promise((resolve, reject) => {
    glob(pattern, {}, (err, matches) => {
      if (err) {
        reject(err)
      } else {
        resolve(matches)
      }
    })
  })
}

module.exports = async () => {
  const paths = await getPaths(`${__dirname}/node_modules/graphberry-*/`)
  return paths.map(require)
  // TODO do some validation on the plugins before returning they should satisfy gramps module model
}
