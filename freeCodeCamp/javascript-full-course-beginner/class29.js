console.log('---------------------------------')
console.log('Class 29: Concise Code, Classes, Getters and Setetrs')

// Concise Object Declarations Using Simple Fields
const createPerson = (name, age, gender) => ({ name, age, gender })
console.log(createPerson('Zodiac Hasbro', 56, 'male'))

// Concise Declarative Functions
const bicycle1 = {
  gear: 2,
  setGear: function (newGear) {
    'use strict'
    this.gear = newGear
  },
}

const bicycle2 = {
  gear: 2,
  setGear(newGear) {
    'use strict'
    this.gear = newGear
  },
}

bicycle1.setGear(3)
bicycle2.setGear(3)
console.log(bicycle1.gear, bicycle2.gear)

// Class syntax to Define a Constructor Function
var SpaceShuttle = function (targetPlanet) {
  this.targetPlanet = targetPlanet
}
class SpaceShuttle2 {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet
  }
}

var zeus = new SpaceShuttle('Jupiter')
var zeus2 = new SpaceShuttle2('Jupiter')
console.log(zeus.targetPlanet, zeus2.targetPlanet)

// Getters and Setters to Control Access to and Object
class Book {
  constructor(author) {
    this._author = author
  }

  get writer() {
    return this._author
  }

  set writer(updatedAuthor) {
    this._author = updatedAuthor
  }
}
var myBook = new Book('John Lock')
myBook.writer = 'John Boogle'
console.log(myBook.writer)
