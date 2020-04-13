function sqr(n = 1) {
    return n * n
}
console.log(sqr())

function greet(name = 'Saddam Hossain', msg = 'Hello') {
    console.log(name.length)
    console.log(`${msg}! ${name}`)
}

greet(null, 'Hello')