console.log('---------------------------------')
console.log('Class 28: Destructuring Assignment')

// Example 1
var voxel = { x: 3.6, y: 7.4, z: 6.54 }

var x = voxel.x
var y = voxel.y
var z = voxel.z

// Destructuring Assignment
const { x: a, y: b, z: c } = voxel // a = 3.6, b = 7.4, c = 6.54

// Example 2
const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79,
}
function getTempOfTmrw(avgTemperatures) {
  'use strict'
  const { tomorrow: tempOfTomorrow } = avgTemperatures
  return tempOfTomorrow
}
console.log(getTempOfTmrw(AVG_TEMPERATURES))

// Destructuring Assignment with Nested Objects
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 },
}
function getMaxOfTmrw(forecasts) {
  'use strict'
  const {
    tomorrow: { max: maxOfTomorrow },
  } = forecasts
  return maxOfTomorrow
}
console.log(getMaxOfTmrw(LOCAL_FORECAST))

// Destructuring Assignment to Assign Variables from Arrays
var [z, x, , , y] = [1, 2, 3, 4, 5, 6] // elements go in order
console.log(z, x, y)

var x1 = 8
var x2 = 6
console.log(x1, x2)
;[x1, x2] = [x2, x1]
console.log(x1, x2)

var x1 = 8,
  x2 = 6
;(() => {
  'use strict'
  ;[x1, x2] = [x2, x1]
})()
console.log(x1, x2)

// Destructuring Assignment with the Rest Operator to Reassign Array
const source = [1, 2, 3, 4, 5]
const arr = ((list) => {
  const [, , ...arr] = source // Remove first 2 elements
  return arr
})()
console.log(arr)

// Destructuring Assignment to Pass an Object as a Function's
const stats = {
  max: 50,
  median: 55,
  mode: 47,
  average: 46,
  min: 30,
}
const half = ({ max, min }) => {
  return (max + min) / 2
}
console.log(`(${stats.min} + ${stats.max}) / 2 = ${half(stats)}`)
