let a = {a: 10}, b = {b: 20}

let weakSet = new WeakSet([a, b])
a = null
console.log(weakSet.has(b))