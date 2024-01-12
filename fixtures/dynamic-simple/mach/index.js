// ENTRY
// src/index.js
(async () => {
    const { foo } = await import('./bundle.js').then(m => m.import_foo())
    const output = (`Hello ${foo}`)
})()