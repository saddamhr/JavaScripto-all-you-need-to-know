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

var rectOne = new Rectangle(10, 8)
rectOne.draw()