var objOne = {
    x: 40,
    y: 60,
    z: 75
}

// console.log('x' in objOne)
// console.log('p' in objOne)

for(var i in objOne) {
    // console.log(i)
    console.log(i + ': ' + objOne[i])
}