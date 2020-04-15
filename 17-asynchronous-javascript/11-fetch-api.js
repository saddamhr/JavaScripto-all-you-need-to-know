// const BASE_URL = 'https://jsonplaceholder.typicode.com'

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
        console.log(data)
        return Promise.resolve('Something')
    })
    .then(str => {
        console.log(str)
        return Promise.resolve('Another promise')
    })
    .then(another => {
        console.log(another)
    })
    .catch(e => {
        console.log(e)
    })