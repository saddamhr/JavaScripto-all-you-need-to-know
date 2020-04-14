let obj = {
    start: 1,
    end: 10,
    [Symbol.iterator]: function() {
        let currentValue = this.start
        const self = this
        return {
            next() {
                return {
                    done: currentValue > self.end,
                    value: currentValue > self.end ? undefined : currentValue++
                }
            }
        }
    }
}

for(let v of obj) {
    console.log(v)
}

let iterate = obj[Symbol.iterator]()
console.log(iterate.next())