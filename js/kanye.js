const loadKanye = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => showKanye(data))
}

function showKanye(data){
    const blockQuote = document.getElementById('quote');
    blockQuote.innerText = data.quote;
}