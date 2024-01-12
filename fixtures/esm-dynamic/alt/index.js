// MODULES START
// src/bar.js
function import_bar() {
  const bar = 'bar'
  return import_bar = () => ({ bar }), import_bar()
}

// src/baz.js
function import_baz() {
  const baz = 'baz'
  const output = (`baz::: baz.js baz(${baz})`)
  return import_baz = () => ({ baz }), import_baz()
}

export { import_bar, import_baz }
// MODULES END

// ENTRY
// src/index.js
const { bar } = import_bar()
const { baz } = import_baz();
  
(async () => {
    const { foo } = await import('./bundle.js').then(m => m.import_foo())
    const output = (`index.js::: foo(${foo}); bar(${bar}); baz(${baz})`)
})()