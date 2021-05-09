console.log('---------------------------------')
console.log('Class 16: Challenge - Record Collection')

var collection = {
  2548: {
    album: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name'],
  },
  2468: {
    album: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Lttle Red Corvette'],
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: [],
  },
  5439: {
    album: 'ABBA Gold',
  },
}

// Keep a copy of the collection for tests
var collectionCopy = JSON.parse(JSON.stringify(collection))

// Update collection and returns it
function updateRecords(id, prop, value) {
  if (!collection.hasOwnProperty(id)) {
    return 'Id does not exist'
  }
  if (!value) {
    delete collection[id][prop]
  } else if (prop === 'tracks') {
    collection[id][prop] = collection[id][prop] || []
    collection[id][prop].push(value)
  } else {
    collection[id][prop] = value
  }

  return collection
}

console.log(updateRecords(5439, 'tracks', 'Dancing Queen'))
console.log(updateRecords(5439, 'artist', 'ABBA'))
console.log(updateRecords(666, 'artist', 'ABBA'))
