'use strict'

/*
 * Create a function `total` that takes an array on numbers
 * and return it's total
 *
 */

const total = a => {
//   let add = 0
// a.forEach( w => add = add + a)
// return add

// return numbers.reduce(function(a,b)) {
//     return a + b
  let total = 0

for (let i = 0; i < a.length; i++) {

  total += a[i]

}
    return total
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof total, 'function')
assert.strictEqual(total.length, 1)
assert.deepStrictEqual(total([1, 1, 1]), 3)
assert.deepStrictEqual(total([10, 10, 10]), 30)
assert.deepStrictEqual(total([24, -10, 10, 0, 0, 100 ]), 124)
// End of tests */
