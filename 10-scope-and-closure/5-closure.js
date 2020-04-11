// Closure: Closure is when a function is able to remember and access it's lexical scope even when that function executing outside it's lexical scope.

// Able to remember and access it's lexical scope.
// function test() {
//     var msg = 'I\'m learning lexical scope and closure'
    
//     function sayMsg() {
//         console.log(msg)
//     }
//     sayMsg()
// }

// when that function executing outside it's lexical scope.
// function test() {
//     var msg = 'I\'m learning lexical scope and closure'
    
//     return function() {
//         console.log(msg)
//     }
// }

// var sayMsg = test()
// sayMsg()

for(var i = 1; i<= 5; i++) {
    (function(n){
        setTimeout(function(){
            console.log(n)
        }, 1000 * i)
    })(i)
}