console.log('---------------------------------')
console.log('Class 19: Random')

function randomFraction() {
  return Math.random()
}
console.log(randomFraction())
console.log(randomFraction())

function randomWholeNum() {
  var randomInt = Math.floor(Math.random() * 100)
  return randomInt
}
console.log(randomWholeNum())
console.log(randomWholeNum())

function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
console.log(randomRange(5, 10))
console.log(randomRange(100, 1000))
