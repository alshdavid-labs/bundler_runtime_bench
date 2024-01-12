// MODULES START
// src/foo.js
async function import_foo() {
  const foo = 'World'
  return import_foo = () => ({ foo }), import_foo()
}

export { import_foo }
// MODULES END
