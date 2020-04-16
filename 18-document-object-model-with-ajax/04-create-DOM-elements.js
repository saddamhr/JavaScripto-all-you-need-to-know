let li = createElement('li', 'list-group-item', 'Four')
li.setAttribute('title', 'I am fourth item')

let list = document.getElementById('list')
list.appendChild(li)

let p1 = createElement('p', 'lead', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, blanditiis.')
let p2 = createElement('p', 'lead', 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt, blanditiis.')

let div = createElement('div')
append(div, [p1, p2])
// console.log(div)

// list.insertAdjacentElement('beforebegin', div)
// list.insertAdjacentElement('afterbegin', div)
// list.insertAdjacentElement('beforeend', div)
// list.insertAdjacentElement('afterend', div)

// let container = document.getElementById('cont')
// container.appendChild(div)

function createElement(tagName, className, innerHTML) {
    let tag = document.createElement(tagName)
    tag.innerHTML = innerHTML || ''
    tag.className = className || ''
    return tag
}

function append(parent, children) {
    children.forEach(child=> parent.appendChild(child))
}

// Remove element and update
let firstChild = list.firstElementChild
setTimeout(()=> {
    firstChild.innerHTML = firstChild.innerHTML + ' (Updated)'
    firstChild.classList.add('text-success')
}, 5000)

// setTimeout(()=>{
//     list.lastChild.remove()
// }, 3000)

// let lastItem = list.lastElementChild.cloneNode(true)
// lastItem.innerHTML = 'Five'
// list.appendChild(lastItem)

console.log(list.attributes)
console.log(list.getAttributeNames())
console.log(list.getAttributeNode('class'))
console.log(list.getAttribute('id'))

console.log(list.classList)

lastItem.id = 'last-tem'
lastItem.setAttribute('id', 'last-item')

let attr = document.createAttribute('title')
attr.value = 'I a title'

lastItem.setAttribute(attr)