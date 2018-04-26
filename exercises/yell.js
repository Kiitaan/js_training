'use strict'

/*
 * Create a function `yell` that takes a string
 * and return the same string but all in upper case
 *
 */

const yell = a => {
  let up = a.toUpperCase()
  return up
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof yell, 'function')
assert.deepStrictEqual(yell('abc'), 'ABC')
// End of tests */
