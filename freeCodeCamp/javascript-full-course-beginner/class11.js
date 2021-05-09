console.log('---------------------------------')
console.log('Class 11: If Statements, Booleans and Logical Operators')

/* Boolean data type:
- true
- false
*/

if (true) {
  console.log('Entered.')
}

if (false) {
  console.log('Did not enter.')
}

var myFlag = false
if (myFlag) {
  console.log('It is true.')
} else {
  console.log('It is false.')
}

// Equality Operator
var myVar = 12
if (myVar == '12') {
  /* We have a wrong answer, because the equality operator tries to 
    convert both values to the same type before compariso. The string 
    with '12' is converted to a number before comparison. 
    That is why the answer is true, even though myVar is of type number
    and '12' is a string.*/
  console.log('== Equal 12')
}

// Strict Equality Operator
var myVar = 12
if (myVar === 12) {
  // It should be true
  console.log('=== Equal 12')
}
if (myVar === '12') {
  // It should be false
  console.log('=== Equal 12')
} else {
  console.log('=== Different from 12')
}

// Strict Inequality Operator
myVar = 10
if (myVar !== 12) {
  console.log('!== Different from 12')
}

// Other: >, >=, <, <=
// && : Logical AND
// || : Logical OR
