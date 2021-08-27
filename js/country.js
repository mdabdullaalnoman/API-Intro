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
        <button onclick="countryName('${country.name}')"> details </button>
       `
        document.getElementById('countrys').appendChild(div);
    }
};

const countryName = (countryName) => {
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`
    fetch(url)
        .then(res => res.json())
        .then(data => showCountryDetail(data[0]))
};

const showCountryDetail = (countryInfo) => {
    const section = document.getElementById('countryDetails');
    const div = document.createElement('div');
    div.innerHTML = `
    <h3>Population: ${countryInfo.population}</h3>
    <h3>Capital: ${countryInfo.capital}</h3>
    <h3>Region: ${countryInfo.region}</h3>
    <img src="${countryInfo.flag}"></img>
    `
    section.appendChild(div);
}