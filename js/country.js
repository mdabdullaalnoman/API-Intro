const countryDataLoad = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => showCountry(data))
}

countryDataLoad();

const showCountry = countrys => {
    for (const country of countrys) {
        console.log(country);
        const div = document.createElement('div');
        div.classList.add('single-country');
        div.innerHTML = `
        <h3>Name: ${country.name}</h3>
        <h3>Population: ${country.population}</h3>
        <h3>Capital: ${country.capital}</h3>
        <h3>Region: ${country.region}</h3>
        <img src="${country.flag}"></img>
       `
        document.getElementById('countrys').appendChild(div);
    }
}