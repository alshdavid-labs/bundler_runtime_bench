// bundle_a.js
import * as bundle_index from './index.js'

// Inline foo.js
function import_foo() {
  const { bar } = bundle_index.import_bar()
  const foo = 'foo'
  const output = (`foo.js::: foo(${foo}); bar(${bar})`)
  return import_foo = () => ({ foo }), import_foo()
}

export { import_foo }