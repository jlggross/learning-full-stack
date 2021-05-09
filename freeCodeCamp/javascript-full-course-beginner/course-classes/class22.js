console.log('---------------------------------')
console.log("Class 22: Variable types - var and 'use strict'")

// We can redeclare a variable with var.
// let won't allow this behaviour
var catName = 'Quincy'
var catName = 'John'

var quote

function catTalk() {
  'use strict' // Prevents from using undeclared variables

  catName = 'Oliver'
  quote = catName + ' says Meow'
  console.log(quote)
}

console.log(catName)
catTalk()
console.log(catName)
