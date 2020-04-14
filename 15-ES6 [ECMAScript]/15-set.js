let set = new Set([1, 2, 3])
set.add(5)
set.add(6)
set.add(1)
set.add(2)
// console.log(set)
// console.log(set.size)

// set.clear()
// set.delete(5)
// console.log(set.has(5))
// console.log(set)
// console.log(set.keys())
// console.log(set.values())

// let keyIterate = set.keys()
// console.log(keyIterate.next())

for(let v of set) {
    console.log(v)
}

console.log(set.entries())