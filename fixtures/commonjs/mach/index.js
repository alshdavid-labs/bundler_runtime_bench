// ENTRY
// src/index.js
(async () => {
  const { default: foo } = await import('./bundle.js').then(m => m.import_foo())
  const output = `Hello - ${/* Node */ foo.default || /* Parcel */ foo}`
  console.log(output)
})()