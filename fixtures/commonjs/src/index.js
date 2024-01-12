(async () => {
  const { default: foo } = await import('./foo.js')
  const output = `Hello - ${foo}`
  console.log(output)
})()
