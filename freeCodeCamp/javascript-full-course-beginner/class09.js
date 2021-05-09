console.log('---------------------------------')
console.log('Class 09: Scope')

// Scope: Refers to the visibility of variables

//-----------------------------------------------------
// myGlobal is scoped to the entire program
var myGlobal = 10

function fun1() {
  // oopsGlobal is scoped to fun1() only
  var oopsGlobal = 10
}

function fun2() {
  var output = ''
  if (typeof myGlobal !== 'undefined') {
    output += 'myGlobal: ' + myGlobal
  }
  if (typeof oopsGlobal !== 'undefined') {
    output += ' oopsGlobal: ' + oppsGlobal
  }

  console.log(output)
}

fun1()
fun2()

//-----------------------------------------------------

var [changed, processed] = [0, 0]

function change(num) {
  return (num + 5) / 3
}

function processArg(num) {
  return (num + 3) / 5
}

;[changed, processed] = [change(10), processArg(10)]
console.log(changed, processed)
