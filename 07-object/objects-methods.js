var objOne = {
    x: 40,
    y: 60,
    z: 75
}

console.log(Object.keys(objOne))
console.log(Object.values(objOne))
console.log(Object.entries(objOne))

// var objTwo = objOne
// objTwo.x = 70
// objTwo.y = 100

// console.log(objOne)
// console.log(objTwo)

var objTwo = Object.assign({}, objOne)
objTwo.x = 100

console.log(objOne)
console.log(objTwo)