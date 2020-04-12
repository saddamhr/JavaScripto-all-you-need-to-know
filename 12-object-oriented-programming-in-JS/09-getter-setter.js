var Rectangle = function (width, height) {
    this.width = width
    this.height = height
    var position = {
        x: 56,
        y: -100
    }

    var printProperties = function () {
        console.log('My width is ' + this.width)
        console.log('My height is ' + this.height)
    }.bind(this)

    this.draw = function () {
        console.log('I am a rectangle')
        printProperties()
        console.log('Position: X = ' + position.x + ' Y = ' + position.y)
    }
    Object.defineProperty(this, 'position', {
        get:function() {
            return position
        },
        set: function(value) {
            position = value
        }
    })
}

var rectOne = new Rectangle(45, 30)
rectOne.draw()
rectOne.position = {
    x: 456,
    y: -123
}
rectOne.draw()