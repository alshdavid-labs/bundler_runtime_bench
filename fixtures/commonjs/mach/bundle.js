// MODULES START
// src/foo.js
export var import_foo = async () => {
  const exports = {}, module = { exports } // COMMONJS DEOPT

  if (globalThis.foo === undefined) {
    const { bar } = await import_bar('./bar')
    module.exports = `Hello ${bar}`
  }

  return import_foo = (m => () => m)({     // COMMONJS DEOPT
    default: module.exports,
    ...(typeof module.exports === 'object' ? module.exports : {})
  }), import_foo()
}

// src/bar.js
export var import_bar = async () => {
  const exports = {}, module = { exports } // COMMONJS DEOPT

  module.exports.bar = 'world'

  return import_bar = (m => () => m)({     // COMMONJS DEOPT
    default: module.exports,
    ...(typeof module.exports === 'object' ? module.exports : {})
  }), import_bar()
}
// MODULES END