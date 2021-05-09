console.log('---------------------------------')
console.log('Class 30: Import, Export, Require')

// 'export' is in file 'string_function.js'
import { capitalizeString, capitalizeString2 } from './string_function.js'
const cap = capitalizeString('Hello!!')
const cap2 = capitalizeString2('Hello!!')
console.log(cap, cap2)

// Import everything from a file
import * as myStrFunc from './string_function.js'
console.log(myStrFunc.capitalizeString2('test'))

// Using export default used in arithmetic.js
import mySum from './arithmetic.js'
console.log(mySum(10, 20))
