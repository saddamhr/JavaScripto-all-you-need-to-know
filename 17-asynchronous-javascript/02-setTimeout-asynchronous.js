console.log('I am line one')

setTimeout(() => {
    console.log('I am line two')
}, 3000)

setTimeout(() => {
    console.log('I am line three')
}, 0)

console.log('I am line four')

setTimeout(() => {
    console.log('I am line five')
}, 1000)