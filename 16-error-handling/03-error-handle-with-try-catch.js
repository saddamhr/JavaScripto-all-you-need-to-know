function makeWords(text) {
    try{
        let str = text.trim()
        let words = str.split(' ')
        return words
    }catch(e) {
        // console.log(e.message)
        console.log('Please provide a valid text')
    }
    // let str = text.trim()
    // let word = str.split(' ')

    // return words
}

// let words = makeWords('            I am twinkle cats          ')
let words = makeWords(86)
console.log(words)