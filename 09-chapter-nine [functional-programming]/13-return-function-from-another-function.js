// function greet(msg) {
//     function greetings(name) {
//         return msg + ', ' + name + '!'
//     }
//     return greetings
// }

// var gm = greet('Good Morning')
// var gn = greet('Good Night')
// var hello = greet('Hello')

// console.log(gm('Saddam Hossain'))
// console.log(gn('Rakib Hasan'))
// console.log(hello('Saddam Rakib'))

function base(b) {
    return function (n) {
        var result = 1
        for (var i = 0; i < b; i++) {
            result *= n
        }
        return result
    }
}

var baseTen = base(10)
console.log(baseTen(2))

var baseFive = base(5)
console.log(baseFive(2))
console.log(baseFive(3))
console.log(baseFive(5))