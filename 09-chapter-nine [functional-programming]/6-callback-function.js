function sample(a, b, cb) {
    var c = a + b
    var d = a - b
    var result = cb(c, d)
    return result
}

function sum(a, b) {
    return a + b
}

var resultOne = sample(5, 8, sum)
console.log(resultOne)

var resultTwo = sample(5, 8, function(c, d){
    return c - d
})
console.log(resultTwo)

var resultThree = sample(5, 8, function(c, d){
    return c * d
})
console.log(resultThree)