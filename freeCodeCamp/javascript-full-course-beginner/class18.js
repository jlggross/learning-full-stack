console.log('---------------------------------')
console.log('Class 18: Challenge - Profile Lookup')

var contacts = [
  {
    firstName: 'Akira',
    lastName: 'Laine',
    number: '0547374783',
    likes: ['Pizza', 'Coding', 'Brownie Points'],
  },
  {
    firstName: 'Harry',
    lastName: 'Potter',
    number: '0993823828',
    likes: ['Hogwartz', 'Magic', 'Hagrid'],
  },
  {
    firstName: 'Kristian',
    lastName: 'Vos',
    number: 'unknown',
    likes: ['JavaScript', 'Gaming', 'Foxes'],
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    number: '048348348',
    likes: ['Intriguing Cases', 'Violin'],
  },
]

function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || 'No such property'
    }
  }

  return 'No such contact'
}

console.log(lookUpProfile('Akira', 'likes'))
console.log(lookUpProfile('Akira', 'firstName'))
console.log(lookUpProfile('Sherlock', 'number'))
console.log(lookUpProfile('Pikachu', 'number'))
console.log(lookUpProfile('Akira', 'weight'))
