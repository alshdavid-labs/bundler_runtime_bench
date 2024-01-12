(async () => {
    const { foo } = await import('./foo.js')
    const output = (`Hello ${foo}`)
})()