let btn = document.getElementById('btn')
// console.dir(btn)

// btn.onclick = function(e) {
//     console.log(e)
// }

let list = document.getElementById('list')
btn.addEventListener('click', function (e) {
    let item = list.lastElementChild.cloneNode(true)
    item.innerHTML = 'Newly create item'
    list.appendChild(item)
});

// Event Delegation problem
// [...list.children].forEach(li => {
//     li.onclick = function (e) {
//         e.target.remove()
//     }
// })

list.addEventListener('click', function(e){
   if(this.contains(e.target)){
       e.target.remove()
   } 
})

let box = document.getElementById('box')
box.addEventListener('mousemove', function (e) {
    // console.log(e)
    document.getElementById('x-value').innerHTML = e.offsetX
    document.getElementById('y-value').innerHTML = e.offsetY
    if (e.offsetX === 50 && e.offsetY === 0) {
        alert('50 0')
    }
})