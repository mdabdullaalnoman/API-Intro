function buddys(){
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => showBuddy(data))
}

const showBuddy = buddy =>{
    const allBuddy = buddy.results;
    for (const buddy of allBuddy) {
        const div = document.createElement('div');
        div.innerHTML = `<h1> ${buddy.email} </h1>`;
        document.getElementById('buddy-warp').appendChild(div);
    }
}