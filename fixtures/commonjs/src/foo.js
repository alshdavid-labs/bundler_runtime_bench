if (global.foo !== undefined) {
  const bar = require('./bar')
  module.exports = `Hello ${bar}`
}
