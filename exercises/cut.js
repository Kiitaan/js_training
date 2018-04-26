'use strict'

/*
 * Create the function `cutFirst` that takes a string and remove the 2 last characters
 * Create the function `cutLast` that takes a string and remove the 2 first charcters
 * Create the function `cutFistLast` that takes a string
 * and remove the 2 first charcters and 2 last characters
 *
 */

const cutFirst = a => {
  let twoLast = a.slice(0, -2);
    return twoLast
}

const cutLast = a => {
  let twoFirst = a.substr(2);
    return twoFirst
}

const cutFirstLast = a => {
  let twoFirstLast = a.substr(2).slice(0, -2)
  return twoFirstLast
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof cutFirst, 'function')
assert.deepStrictEqual(cutFirst('abcdefghij'), 'abcdefgh')

assert.strictEqual(typeof cutLast, 'function')
assert.deepStrictEqual(cutLast('abcdefghij'), 'cdefghij')

assert.strictEqual(typeof cutFirstLast, 'function')
assert.deepStrictEqual(cutFirstLast('abcdefghij'), 'cdefgh')
// End of tests */
