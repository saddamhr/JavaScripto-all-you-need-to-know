function Square(width) {
    this.width = width
}

Square.prototype = {
    draw: function() {
        console.log('Draw')
    },
    toString: function() {
        return 'My width is = ' + this.width
    }
}

var sqrOne = new Square(10)
var sqrTwo = new Square(5)