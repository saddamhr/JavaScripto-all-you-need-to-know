let arr = [1, 2, 3]

// let obj = {
//     a: 10,
//     b: 20
// }

// let obj = {
//     start: 1,
//     end: 5,
//     [Symbol.iterator]: function* () {
//         let currentValue = this.start
//         while (currentValue <= this.end) {
//             yield currentValue++
//         }
//     }
// }

// function* generate(){
//     yield 1
//     yield 2
//     yield 3
// }

function* generate(collection) {
    for(let i = 0; i< collection.length; i++){
        yield collection[i]
    }
}

let it = generate(arr)
console.log(it.next())
console.log(it.next())
console.log(it.next())
console.log(it.next())