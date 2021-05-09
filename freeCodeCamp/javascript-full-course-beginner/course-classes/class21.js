console.log('---------------------------------')
console.log('Class 21: Conditional Ternary operator')

var [var_a, var_b] = [20, 20]

// Normal if-else
function checkEqual(a, b) {
  if (a === b) {
    return true
  } else {
    return false
  }
}
console.log(checkEqual(var_a, var_b))

// Ternary if: One line if-else expression
var_a === var_b ? console.log(true) : console.log(false)

// Nested ternary operator
function checkSign(num) {
  return num > 0 ? 'positive' : num < 0 ? 'negative' : 'zero'
}
console.log(checkSign(10))
console.log(checkSign(-10))
console.log(checkSign(0))
