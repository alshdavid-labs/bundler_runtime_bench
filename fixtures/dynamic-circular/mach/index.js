// MODULES START
// src/bar.js
export var import_bar = async () => {
  const bar = 'bar'
  return import_bar = (m => () => m)({ bar }), import_bar()
}

// src/baz.js
export var import_baz = async () => {
  const baz = 'baz'
  const output = (`baz::: baz.js baz(${baz})`)
  return import_baz = (m => () => m)({ baz }), import_baz()
}
// MODULES END

// ENTRY
// src/index.js
const { bar } = await import_bar()
const { baz } = await import_baz();
  
(async () => {
    const { foo } = await import('./bundle.js').then(m => m.import_foo())
    const output = (`index.js::: foo(${foo}); bar(${bar}); baz(${baz})`)
    // console.log(output)
})()