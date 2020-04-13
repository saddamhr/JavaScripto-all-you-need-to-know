function mixin(target, ...sources) {
    Object.assign(target, ...sources)
}
var canWalk ={
    walk: function() {
        console.log('Walking...')
    }
}

var canEat = {
    eat: function() {
        console.log("Eating...")
    }
}

var canSwim = {
    swim: function() {
        console.log('Swimming...')
    }
}

// var person = Object.assign({}, canWalk, canWalk)
// person.name = 'Saddam Hossain'

function Person (name) {
    this.name = name
}

mixin(Person.prototype, canWalk, canEat)

var person = new Person('Saddam Hossain')
console.log(person)

function GoldFish(name) {
    this.name = name
}

mixin(GoldFish.prototype, canEat, canSwim)
var fish = new GoldFish('Bla bla bla')
console.log(fish)