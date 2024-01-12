// MODULES START
// src/foo.js
async function import_foo() {
  const { bar } = await import('./index.js').then(m => m.import_bar())
  const foo = 'foo'
  const output = (`foo.js::: foo(${foo}); bar(${bar})`)
  return import_foo = () => ({ foo }), import_foo()
}

export { import_foo }
// MODULES END
