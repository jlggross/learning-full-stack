console.log('---------------------------------')
console.log('Class 26: Arrow Functions with Higher Functions')

// Arrow functions are great whenever a function recieves as argument another function
const realNumbers = [4.2, 18, 5.4, -65.545, 10, 45.6, 10.2, -2, 12]

const squareList = (arr) => {
  const squaredIntegers = arr
    .filter((num) => Number.isInteger(num) && num > 0)
    .map((x) => x ** 2)
  return squaredIntegers
}

const squaredIntegers = squareList(realNumbers)
console.log(squaredIntegers)

// Write Higher Order Arrow Functions
const increment1 = (function () {
  return function increment(number, value = 1) {
    return number + value
  }
})()
const increment2 = function increment(number, value = 1) {
  return number + value
}
console.log(increment1(5, 2))
console.log(increment1(5))
console.log(increment2(5, 2))
console.log(increment2(5))
