console.log('---------------------------------')
console.log('Class 08: Manipulating Arrays')

var ourArray8 = ['John', 'Luiz']
console.log('Original:', ourArray8)

// Push: Add element to the end of array
ourArray8.push(['happy', 'cat'])
console.log('Push:', ourArray8)

// Pop: Remove final element of array
ourArray8 = ['John', 'Luiz']
var popped = ourArray8.pop()
console.log('Pop: ', ourArray8)

// Shift: Remove first element of array
ourArray8 = ['John', 'Luiz']
var shifted = ourArray8.shift()
console.log('Shift: ', ourArray8)

// Unshift: Add element to the beginning of the array
ourArray8 = ['John', 'Luiz']
ourArray8.unshift('Unshift')
console.log('Unshift: ', ourArray8)
