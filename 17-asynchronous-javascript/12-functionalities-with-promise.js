// const delay = s => new Promise(resolve => setTimeout(resolve, s * 100))

// delay(2).then(()=>console.log('2 second delay'))
// delay(1).then(()=>console.log('1 second delay'))
// delay(3).then(()=>console.log('3 second delay'))
// delay(2).then(()=>console.log('2 second delay'))
// delay(5).then(()=>console.log('5 second delay'))

// let p1 = Promise.resolve('Test')
// p1.then(v => console.log(v))

// let p2 = Promise.reject('REJECT')
// p2.catch(e => console.log(e))

// let p1 = Promise.resolve('One')
// let p2 = Promise.resolve('Two')
// let p3 = Promise.resolve('Three')

// let promiseArr = [p1, p2, p3]
// Promise.all(promiseArr)
//     .then(arr => {
//         console.log(arr)
//     })

let p1 = new Promise(resolve=>{
    setTimeout(resolve, 500, 'One')
})

let p2 = new Promise(resolve=>{
    setTimeout(resolve, 300, 'Two')
})

let p3 = new Promise(resolve=>{
    setTimeout(resolve, 400, 'One')
})

let promiseArr = [p1, p2, p3]

Promise.all(promiseArr)
    .then(arr => console.log(arr))

Promise.race(promiseArr)
    .then(v => console.log(v))