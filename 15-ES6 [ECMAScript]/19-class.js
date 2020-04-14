class Rectangle {
    constructor(width, height) {
        this.width = width
        this.height = height
    }

    draw() {
        console.log("Drawing...")
    }
}

let rectOne = new Rectangle(45, 23)
console.log(typeof Rectangle)