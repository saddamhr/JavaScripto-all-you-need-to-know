function extend(Parent, Child) {
    Child.prototype = Object.create(Parent.prototype)
    Child.prototype.constructor = Child
}
function Shape(color) {
    this.color = color
}
Shape.prototype.common = function () {
    console.log('I am common method')
}

function Square(width) {
    Shape.call(this, color)
    this.width = width
}

extend(Shape, Square)

Square.prototype.draw = function () {
    console.log('Drawing')
}

Square.prototype.common = function() {
    console.log('I am calling from square and I have overridden')
}

// var shape = new Shape()
var sqr = new Square(45, 'green')

function Circle(radius, color) {
    Shape.call(this.color)
    this.radius = radius
}

extend(Shape, Circle)

Circle.prototype.common = function() {
    // Shape.prototype.common.call(this)
    console.log('I am calling from circle and I have overridden')
}

var c = new Circle(4, 'Black')

var s = new Shape('Pirple')

var shapes = [s, c, sqr]

for(var i of shapes) {
    i.common()
}