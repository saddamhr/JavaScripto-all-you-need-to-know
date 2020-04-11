var a = 100
// newPrint(a)

print(100)

var newPrint = print
newPrint(45)

function print(a) {
    console.log(a)
}

print(a)


// Creation Phase
// a = undefined
// newPrint = undefined
// print = reference

// Executional Phase
// a = 100
// newPrint = reference