class CustomError extends Error {
    constructor(msg) {
        super(msg)

        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, CustomError)
        }
    }
}
try {
    console.log('I am Line 1')
    throw new CustomError('I am your error')
    console.log('I am Line 2')
    console.log('I am Line 3')
    console.log('I am Line 4')
} catch (e) {
    console.log('This is a custom error message')
} finally {
    console.log('I am finally block')
}