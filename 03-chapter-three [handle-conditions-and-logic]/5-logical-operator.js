var a = 10
var b = 20
var c = 30
var d = 40

// AND
if (a > b && c > d) {
    console.log('A is greater than B and C is greater than D')
} else {
    console.log('At least one condition is false')
}

// OR
if (a > b || c > d) {
    console.log('A is greater than B or C is greater than D')
} else {
    console.log('At least one condition is false')
}

// NOT
var check = !(a > b)
console.log(check)