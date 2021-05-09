console.log('---------------------------------')
console.log('Class 04: Strings, Escape Characters')

var myName = 'John'
var myLastName = 'John The "Big Man"'
var anotherString = 'John G'
var backTicks = `I'm using back ticks now and "double quotes"`

console.log(`String: ${myName}`)
console.log(`String with escape for double quotes: ${myLastName}`)
console.log(`String with single quotes: ${anotherString}`)
console.log(`String with back ticks: ${backTicks}`)

/* Escape Characters:

\'  single quote
\"  double quote
\\  backslash
\n  newline
\r  carriage return
\t  tab
\b  backspace
\f  form feed

*/

var escapeCharacters = 'FirstLine\n\t\\SecondLine\nThirdLine'
console.log(`Escape Characters: ${escapeCharacters}`)
