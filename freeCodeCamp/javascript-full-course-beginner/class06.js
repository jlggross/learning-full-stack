console.log('---------------------------------')
console.log('Class 06: Functions')

function wordBlanks(nyNoun, nyAdjective, myVerb, myAdverb) {
  var result = ''
  result +=
    'The ' + nyAdjective + nyNoun + myVerb + ' to the store ' + myAdverb + '.'

  return result
}

console.log(wordBlanks('dog ', 'big ', 'ran', 'quickly'))
console.log(wordBlanks('bike ', 'slow ', 'flew', 'slowly'))
