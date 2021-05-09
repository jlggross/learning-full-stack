console.log('---------------------------------')
console.log('Class 05: Strings Operations')

var ourStr = 'A string. ' + 'Another string. '
console.log(ourStr)

// Plus-Equals operator
ourStr += 'Yet one more string.'
console.log(ourStr)

// Concatenation
var ourName2 = 'freeCodeCamp'
var ourStr2 = 'Hello, our name is ' + ourName2 + ', how are you?'
console.log(ourStr2)

// Append variables to strings
var anAdjective = 'awesome!'
var ourStr3 = 'freeCodeCamp is '
ourStr3 += anAdjective
console.log(ourStr3)

// Length of string
console.log(`Length: ${ourStr3.length}`)

// Brackets notation
console.log(anAdjective[0], anAdjective[1], anAdjective[2], anAdjective[3])
console.log(
  anAdjective[anAdjective.length - 4],
  anAdjective[anAdjective.length - 3],
  anAdjective[anAdjective.length - 2],
  anAdjective[anAdjective.length - 1]
)
