let weakMap = new WeakMap([[a, 45], [b, 75]])

a = null

consol.log(WeakMap)
consol.log(WeakMap.get(a))
consol.log(WeakMap.has(a))
consol.log(WeakMap.has(b))