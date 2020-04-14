var s = `sdfgdsa
dsfgh      
              sdwertyczxvfg`
console.log(s.trim())

var age = 23
var name = 'Saddam Hossain'

console.log('My name is ' + name + ' and I am ' + age + ' years old')
console.log(`My name is ${name} and I am ${age} years old. I am ${age < 18 ? 'not' : ''} adult`)

console.log(name.padStart(15, '*'))
console.log(name.padEnd(15, 'a'))
console.log('S'. repeat(10))