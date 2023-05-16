const url = "https://restcountries.com/v3.1/all"
let countries = [];


const fetchCountries = function(){
    return fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data){
countries = data;
return countries;
    });
}

const createCountryElement = function(country){
    const li = document.createElement('li');
    const name = document.createElement('h2');
const population = document.createElement('p')
name.textContent = country.name.common;
population.textContent = 'Population: ' + country.population;
li.appendChild(name);
li.appendChild(population);
return li;
}