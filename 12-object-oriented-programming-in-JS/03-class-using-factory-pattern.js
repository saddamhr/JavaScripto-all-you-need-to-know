var createRect = function(width, height) {
    return {
        width: width,
        height: height,

        draw: function() {
            console.log('I am rectangle')
            this.printProperties()
            console.log(this)
        },
        printProperties: function() {
            console.log('My width is: '+ this.width)
            console.log('My height is: '+ this.height)
        }
    }
}

var rectOne = createRect(10, 8)
rectOne.draw()

var rectTwo = createRect(40, 30)
rectTwo.draw()