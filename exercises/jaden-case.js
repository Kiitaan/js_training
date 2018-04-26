'use strict'

/*
 * Jaden Smith Case
 *
 * Make a function `jadenCase` that takes a String
 * and return capitalize each words: "How are you ?" -> "How Are You ?"
 *
 */

const jadenCase = a => {
  // return a.charAt(0).toUpperCase() + a.slice(1)
  // return a.map a.charAt(0).toUpperCase() + a.substr(1).toLowerCase()
  return a.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof jadenCase, "function")
assert.strictEqual(jadenCase('how are you ?'), 'How Are You ?')// End of tests */
