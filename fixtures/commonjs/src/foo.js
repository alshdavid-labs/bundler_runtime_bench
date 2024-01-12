if (globalThis.foo === undefined) {
  const { bar } = require('./bar')
  module.exports = `Hello ${bar}`
}
