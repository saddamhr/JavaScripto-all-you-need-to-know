try{
    console.log('I am Line 1')
    throw new Error('I am your error')
    console.log('I am Line 2')
    console.log('I am Line 3')
    console.log('I am Line 4')
} catch(e) {
    console.log(e.message)
}