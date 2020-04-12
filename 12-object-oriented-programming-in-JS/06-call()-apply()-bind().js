function myFunc(c, d) {
    console.log(this)
    console.log(this.a + this.b + c + d)
}

myFunc.call({a: 40, b: 25}, 10, 5)
myFunc.apply({a: 10, b: 25}, [10, 5])
var testBind = myFunc.bind({a: 7, b: 3})
testBind(5, 7)