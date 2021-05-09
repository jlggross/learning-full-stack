console.log('---------------------------------')
console.log('Class 15: Nested Objects and Nested Arrays')

// Netsed Object
var myStorage = {
  car: {
    inside: {
      'glove box': 'maps',
      'passenger seat': 'crumbs',
    },
    outside: {
      trunk: 'jack',
    },
  },
}

var gloveBoxContents = myStorage['car']['inside']['glove box']
console.log(gloveBoxContents)

// Nested Array
var myPlants = [
  {
    type: 'flowers',
    list: ['rose', 'tulip', 'dandelion'],
  },
  {
    type: 'trees',
    list: ['fir', 'pine', 'birch'],
  },
]

var secondTree = myPlants[1]['list'][1]
console.log(secondTree)
