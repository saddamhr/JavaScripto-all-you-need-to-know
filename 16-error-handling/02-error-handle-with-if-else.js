

function changeToInt(v) {
    let result = Number.parseInt(v)
    if(!result) {
        return 'Please provide a value which is able to convert in integer'
    }
    return result
}

let result = changeToInt('85.95')