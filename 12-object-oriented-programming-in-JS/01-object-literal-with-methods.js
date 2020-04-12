var rect ={
    width: 100,
    height: 50,
    draw: function() {
        console.log('I\'m a rectangle')
        console.log('My width is '+ this.width)
        console.log('My height is '+ this.height)
    }
}

rect.draw()
rect.height = 100
rect.draw()