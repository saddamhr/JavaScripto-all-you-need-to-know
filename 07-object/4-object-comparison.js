var objOne = {
    a : 10,
    b : 20
}

var objTwo = {
    a : 10,
    b: 2
}

if(objOne.a === objTwo.a && objOne.b === objTwo.b) {
    console.log(true)
} else {
    console.log(false)
}

console.log(JSON.stringify(objOne) === JSON.stringify(objTwo))