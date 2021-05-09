console.log('---------------------------------')
console.log('Class 23: Scope')

/* var :
- if declared outside a function the scope is global
- if declared inside a function the scope is local
*/

function checkScopeVar() {
  'use strict'
  var i = 'function scope'
  if (true) {
    i = 'block scope'
    console.log('Block scope i is: ', i)
  }
  console.log('Function scope i is: ', i)
  return i
}

/* let :
- has local scope
- if we have different declarations of variables with the same name
but in different scopes, each declaration will be independent
*/

function checkScopeLet() {
  'use strict'
  let i = 'function scope'
  if (true) {
    let i = 'block scope'
    console.log('Block scope i is: ', i)
  }
  console.log('Function scope i is: ', i)
  return i
}

checkScopeVar()
checkScopeLet()
