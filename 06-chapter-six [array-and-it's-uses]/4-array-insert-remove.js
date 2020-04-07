var arr = [1, 2, 3, 4, 5, 6, 7, 8]

// arr[3] = 9
// arr.push(9)
// arr.unshift(9)

// Insertion
arr.splice(3, 0, 9, 10)

// arr[3] = undefined
arr.pop()
arr.shift()

// Delete
// arr.splice(3, 1)

arr.splice(3, 1, 44)

console.log(arr)