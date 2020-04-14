let a = 10, b = 20

let obj ={
    a,
    b,
    print() {
        console.log(this)
    }
}

obj.print()