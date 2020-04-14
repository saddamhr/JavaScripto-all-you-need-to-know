let person = {
    name: 'Saddam Hossain',
    email: 'saddambubt65@gmail.com',
    address: {
        city: 'Dhaka',
        country: 'Bangladesh'
    }
}

let { name, email, address, address: { city, country } } = person
console.log(name, email, city, country)
let ar = [1, 2, 3, 4, 5]

let arr = [1, 2, 3, 4, 5]

let [first, second, , ,last] = arr
console.log(first, second, last)