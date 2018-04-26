'use strict'

/*
 * Create a function `keepFirst` takes a string
 * and only keep the 2 first characters
 *
 * Create a function `keepLast` takes a string
 * and only keep the 2 last characters
 *
 * Create a function `keepFirstLast` takes a string
 * and only keep 2 characters from the third character
 *
 */

const keepFirst = a => {
  let twoFirst = a.substring(0, 2);
  return twoFirst
}

const keepLast = a => {
  let twoLast = a.slice(-2)
  return twoLast
}

const keepFirstLast = a => {
  let twoFirstLast = a.substring(2, 4)
  return twoFirstLast
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof keepFirst, 'function')
assert.deepStrictEqual(keepFirst('abcdefghij'), 'ab')

assert.strictEqual(typeof keepLast, 'function')
assert.deepStrictEqual(keepLast('abcdefghij'), 'ij')

assert.strictEqual(typeof keepFirstLast, 'function')
assert.deepStrictEqual(keepFirstLast('abcdefghij'), 'cd')
// End of tests */
