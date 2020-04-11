var persons = [
    {
        name: 'A',
        age: 24
    },
    {
        name: 'B',
        age: 19
    },
    {
        name: 'C',
        age: 26
    },
    {
        name: 'D',
        age: 21
    }
]

var arr = [4, 8, 1, 6, 7, 9, 4, 3, 5, 6, 8, 2, 1, 7, -1]

arr.sort(function (a, b) {
    if (a > b) {
        return 1
    } else if (a < b) {
        return -1
    } else {
        return 0
    }
})

console.log(arr)

persons.sort(function (a, b) {
    if (a.age > b.age) {
        return 1
    } else if (a.age < b.age) {
        return -1
    } else {
        return 0
    }
})
console.log(persons)

var resultOne = arr.every(function(value){
    return value % 2 === 0
})
console.log(resultOne)

var resultTwo = arr.every(function(value){
    return value >= 0
})
console.log(resultTwo)

var resultThree = arr.some(function(value){
    return value % 2 === 1
})
console.log(resultThree)

var resultFour = arr.some(function(value){
    return value < 0
})
console.log(resultFour)