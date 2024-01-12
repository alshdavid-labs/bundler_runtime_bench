(async () => {
  const foo = await import('./foo.js')
  const output = `Hello - ${/* Node */ foo.default || /* Parcel */ foo}`
  console.log(output)
})()
