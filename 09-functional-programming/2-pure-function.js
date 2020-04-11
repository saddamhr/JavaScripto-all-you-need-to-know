// Pure Function: It returns the same result if given the same arguments. It does not cause any observable side effects.

function sqr(n) {
    return n * n
}

console.log(sqr(3))
console.log(sqr(3))
console.log(sqr(3))

var n = 10

function valueChange() {
    n = 100
}
valueChange()
console.log(n)

var point = {
    x: 45,
    y: 30
}

function displayPoint(point) {
    point.x = 100
    point.y = 200
    
    console.log(point)
}

displayPoint(point)
console.log(point)