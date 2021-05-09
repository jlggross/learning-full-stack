console.log('---------------------------------')
console.log('Class 07: Arrays')

// Simple arrays
var ourArray = ['John', 30, true, false, -10]
console.log(ourArray)

var myArray = [10, [], 'test']
console.log(myArray)

// Nested arrays
var nestedArray = [
  [10, 20],
  [30, 40],
]
console.log(nestedArray)

// Array value access
console.log(myArray[0])
console.log(nestedArray[0])
console.log(nestedArray[0][0])
nestedArray[0][0] = -1113
console.log(nestedArray[0][0])
