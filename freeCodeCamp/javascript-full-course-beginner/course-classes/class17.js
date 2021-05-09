console.log('---------------------------------')
console.log('Class 17: Loops - While, Do-While, For')

var myArray = []

// While
var i = 0
while (i < 5) {
  myArray.push(i)
  i++
}
console.log('While: ', myArray)

// Do-Whle
myArray = []
i = 10
do {
  myArray.push(i)
  i++
} while (i < 5)
console.log('Do-While: ', i, myArray)

// For
myArray = []
for (var i = 0; i < 5; i++) {
  myArray.push(i)
}
console.log('For: ', myArray)
