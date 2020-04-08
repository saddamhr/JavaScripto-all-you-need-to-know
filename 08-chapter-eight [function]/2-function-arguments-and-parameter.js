// Function Parameter
function add(a, b) {
    var result = a + b
    console.log(result)
}

// add(10, 20)
// add(7, 3)
// add(500, 200)

function sumOfArray(array) {
    sum = 0
    for(var i = 0; i < array.length; i++) {
        sum += array[i]
    }
    console.log(sum)
}

arrayOne = [1, 2, 3, 4, 5]
arrayTwo = [10, 20, 30, 40, 50]

sumOfArray(arrayOne)
sumOfArray(arrayTwo)

// Function Arguments
function testFunction() {
    console.log(JSON.stringify(arguments))
    for(var i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
    }
}

testFunction(10, 20, 30)

function addAllNumbers() {
    var sum = 0;
    for(var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log(sum)
}

addAllNumbers(1, 2, 3)
addAllNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)