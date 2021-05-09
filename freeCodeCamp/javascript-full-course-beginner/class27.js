console.log('---------------------------------')
console.log('Class 27: Rest Operator, Spread Operator')

// Rest Operator: Allow to pass a variable number of arguments to a function
const sum = (function () {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0)
  }
})()
console.log(sum(1, 2, 3))
console.log(sum(1, 2, 3, 4, 5, 6, 7))

// Spread Operator
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY']
let arr2
;(function () {
  arr2 = [...arr1] // Spread Operator
  arr2.unshift('A month')
  arr1[0] = 'potato'
})()
console.log(arr2)
console.log(arr1)
