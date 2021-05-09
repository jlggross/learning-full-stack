console.log('---------------------------------')
console.log('Class 13: Objects')

// Data structure with key-value pairs
var ourDog = {
  name: 'Camper',
  legs: 4,
  tails: 1,
  friends: ['Bolt', 'K9', 'Rex', 'humans'],
}

console.log(ourDog)

// Accessing values: dot notation
console.log(ourDog.legs)
console.log(ourDog.friends)

// Acessing values: bracket notation
console.log(ourDog['tails'])
console.log(ourDog['friends'])

// Update Object Properties
ourDog.name = 'Denver' // change name

// Creating Properties
ourDog.weight = '12 kg' // new property
ourDog['bark'] = 'Woof!' // new property
console.log(ourDog)

// Delete Proteties
delete ourDog.legs
delete ourDog.tails
console.log(ourDog)

// Check Object Properties
function checkObj(checkProp) {
  if (ourDog.hasOwnProperty(checkProp)) {
    return ourDog[checkProp]
  } else {
    return 'Not Found'
  }
}

ourDog = {
  name: 'Camper',
  friends: ['Bolt', 'K9', 'Rex', 'humans'],
}
console.log(checkObj('bark'))
console.log(checkObj('tails'))
console.log(checkObj('friends'))
