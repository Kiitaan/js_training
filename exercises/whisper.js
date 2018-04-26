'use strict'

/*
 * Create a function `whisper` that takes a string
 * and return the same string but all in lower case
 *
 */



const whisper = a => {
  let low = a.toLowerCase()
  return low
}



//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof whisper, 'function')
assert.deepStrictEqual(whisper('ABC'), 'abc')

// End of tests */
