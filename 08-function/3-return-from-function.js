function addAllNumbers() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

// var result = addAllNumbers(1, 2, 3, 4)
// console.log(result)

function personInfo(name, email) {
    return {
        name: name,
        email: email
    }
    // console.log('I will never be shown')
}

var personOne = personInfo('Saddam Hossain', 'saddambubt65@gmail.com')
console.log(personOne)