console.log('---------------------------------')
console.log('Class 25: Arrow Functions')

// Anonymous function, with no name
var magic1 = function () {
  return new Date()
}

// Arrow Function: An anonymous function
var magic2 = () => {
  return new Date()
}

// Arrow Function: An anonymous function. Cleaner
var magic3 = () => new Date()

// Arrow Function with Parameters

var normalFunc = function (arr1, arr2) {
  return arr1.concat(arr2)
}
console.log('Normal:', normalFunc([1, 2], [3, 4]))

var arrowFunc = (arr1, arr2) => arr1.concat(arr2)
console.log('Arrow:', arrowFunc([1, 2], [3, 4]))
