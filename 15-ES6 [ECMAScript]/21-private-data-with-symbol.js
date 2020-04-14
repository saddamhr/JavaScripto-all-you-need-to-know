



const _radius = Symbol()
const _name = Symbol()
const _draw = Symbol()

class Circle {
    constructor(radius, name){
        this[_radius] = radius
        this[_name] = name
    }

    [_draw]() {
        console.log("Drawing...")
    }
}

let circleOne = new Circle(2, 'CRED')
console.log(circleOne)