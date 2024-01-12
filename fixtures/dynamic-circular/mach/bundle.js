// MODULES START
// src/foo.js
export var import_foo = async () => {
  const { bar } = await import('./index.js').then(m => m.import_bar())
  const foo = 'foo'
  const output = (`foo.js::: foo(${foo}); bar(${bar})`)
  return import_foo = (m => () => m)({ foo }), import_foo()
}
// MODULES END
