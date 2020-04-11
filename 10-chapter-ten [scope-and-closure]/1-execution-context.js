// Execution Context
function a () {
    b()
    console.log('I\'m Function A')
}

function b() {
    d()
    console.log('I\'m Function B')
}

function c() {
    console.log('I\'m Function C')
}

function d() {
    c()
    console.log('I\'m Function D')
}

var x = 100
a()
console.log('I\'m Global')

// Execution of C function context
// Execution of D function context
// Execution of B function context
// Execution of A function context
// Execution of global context