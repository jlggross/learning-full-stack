console.log('---------------------------------')
console.log('Class 24: Variable Type - const')

/* const:
- has all the features of 'let', but is read-only
*/

function printManyTimes(str) {
  'use strict'
  const sentence = str + ' is cool'
  //sentence = str + " is amazing"

  for (let i = 0; i < str.length; i += 3) {
    console.log(sentence)
  }
}
printManyTimes('freeCodeCamp')

// Mutate a const Array
const s = [5, 7, 2]
//s = [5, 7, 3] // gives error
s[2] = 3
console.log(s)

// Object dot freeze
function freezeObj() {
  'use strict'
  const math_constants = {
    pi: 3.14,
  }

  // Properties cannot be changed
  Object.freeze(math_constants)

  try {
    math_constants.pi = 10
  } catch (ex) {
    console.log(ex)
  }

  return math_constants.pi
}

const pi2 = freezeObj()
console.log(pi2)
