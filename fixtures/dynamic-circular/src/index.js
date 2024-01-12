import { bar } from './bar.js'
import { baz } from './baz.js'

(async () => {
    const { foo } = await import('./foo.js')
    const output = (`index.js::: foo(${foo}); bar(${bar}); baz(${baz})`)
})()