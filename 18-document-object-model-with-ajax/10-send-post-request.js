let postForm = document.getElementById('post-form')
let posts = document.getElementById('posts')
const URL = 'http://jsonplaceholder.typicode.com/posts'

postForm.addEventListener('submit', function (e) {
    e.preventDefault()

    let title = this.title.value || undefined
    let body = this.body.value || undefined

    if (title && body) {
        let postObj = {
            userId: 100,
            title,
            body
        }
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/JSON'
            },
            body: JSON.stringify(postObj)
        })
            .then(response => response.json())
            .then(post => {
                // console.log(post)
                let item = listItemGenerator(post)
                // posts.appendChild(item)
                posts.appendChild(item)
                this.reset()
            })
            .catch(e => console.log(e))
    } else {
        alert('Please provide very details')
    }
})

function listItemGenerator(item) {
    let li = document.createElement('li')
    li.className = 'list-group-item'
    li.innerHTML = `${item.id}. ${item.title} By User id: ${item.userId}`

    return li
}