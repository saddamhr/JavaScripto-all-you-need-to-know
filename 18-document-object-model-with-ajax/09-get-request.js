let load = document.getElementById('load')
let postList = document.getElementById('posts')

const URL = 'http://jsonplaceholder.typicode.com/posts'

load.addEventListener('click', function(){
    fetch(URL)
        .then(response => response.json())
        .then(posts =>{
            posts.forEach((post, index) => {
                let listItem = listItemGenerator(post, index + 1)
                postList.appendChild(listItem)
                console.log(listItem)
            })
        })
        .catch(e => console.log(e.message))
})

function listItemGenerator(item, no) {
    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.innerHTML = `${no}. ${item.title}`

    return li
}