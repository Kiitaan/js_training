'use strict'

/*
 * Create a function `multiply` that takes two number arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 *
 * @notions Primitive and Operators, Functions, While
 */

// Your code :

const multiply = (nb1 , nb2) => {

let j = 0

if (nb1 === 0 || nb2 === 0)
return j
else if (nb1 < 0 && nb2 > 0)
{
return j = (- neg(nb1 , nb2))
}
else if (nb2 < 0 && nb1 > 0)
{
return j = (- neg(nb1 ,nb2))
}
else if (nb2 < 0 && nb1 < 0) {
const nb1neg = nb1 - nb1 - nb1
const nb2neg = nb2 - nb2 - nb2
return neg(nb1neg,nb2neg)
}
else
return neg(nb1,nb2)


}

const neg = (nb1,nb2) => {


let j = 0
let i = 0

if (nb2 < 0 )
{
while (i < nb1)
{
j = j + nb2
i++
}

return (j = j - j - j)
}
else if (nb1 < 0 )
{
while (i < nb2)
{
j = j + nb1
i++
}

return (j = j - j - j)
}
else{
while (i < nb2)
{
j = j + nb1
i++
}
return j
}
}


//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
