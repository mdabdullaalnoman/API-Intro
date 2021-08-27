function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
};

function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => showUsers(data))
}

function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => showPost(data))
}

function loadComments(){
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(data => showComments(data))
}

function loadPhotos(){
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(response => response.json())
    .then(data => showPhoto(data))
}

function showUsers(data) {
    const ul = document.getElementById('users');
    for (const user of data) {
        const li = document.createElement('li');
        li.innerHTML = `name:     ${user.name}
                      email:    ${user.email}`;
        ul.appendChild(li)
    }
};

function showPost(posts){
 const section = document.getElementById('posts')
for (const post of posts) {
    console.log(post);
    const div = document.createElement('div');
    div.classList = 'post';
    div.innerHTML = `<h2>${post.id}</h2> 
    <p> ${post.title}</p>`
    section.appendChild(div);
}
}

function showComments(data){
 const ul = document.getElementById('commnets');
 for (const comment of data) {
     const li = document.createElement('li');
     li.innerText = comment.body;
     ul.appendChild(li)
 }
}

function showPhoto(data){
const section = document.getElementById('photos');
for (const photo of data) {
    const div = document.createElement('div');
    div.innerHTML = `<img src="${photo.url}"></img>`
    section.appendChild(div);
}
}