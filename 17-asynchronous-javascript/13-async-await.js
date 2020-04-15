// async function fetchData() {
//     try {
//         let res = await fetch('https://jsonplaceholder.typicode.com/users')

//         let data = await res.json()

//         let names = data.map(u => u.name)
//         console.log(names)
//     } catch (e) {
//         console.log(e.message)
//     }
// }

// fetchData()

let promises = [Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]

async function PromiseAll() {
    let result = await Promise.all(promises)
    console.log(result)
}

promiseAll()