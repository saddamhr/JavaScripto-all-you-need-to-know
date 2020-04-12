var Rectangle = function (width, height) {
    this.width = width
    this.height = height

    this.draw = function () {
        console.log('I am a rectangle')
        this.printProperties()
        console.log(this)
    }

    this.printProperties = function () {
        console.log('My width is ' + this.width)
        console.log('My height is ' + this.height)
    }
}

function myNew(constructor) {
    var obj = {}
    Object.setPrototypeOf(obj, constructor.prototype)
    var argsArray = Array.prototype.slice.apply(arguments)
    constructor.apply(obj, argsArray.slice(1))

    return obj
}

rectOne = myNew(Rectangle, 45, 30)
rectOne.draw()