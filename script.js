
console.log("Testing , testing, 1 2 3 ...")

let global_apiData;
let countriesList = document.getElementById("countrieslist");
let filterCountryForm = document.getElementById("")

// In your JavaScript file, create a function which houses a fetch() request to the RESTCountries API and returns the response in JSON format

async function getCountriesInfo(){
   const apiData = await fetch("https://restcountries.com/v3.1/all");
   const apiDataJSON = await apiData.json();
   return apiDataJSON;
    
}


// Create a SetUp() function which calls your first function and populates a global variable with the output. Have this function be called on load of your webpage

async function setUp(){
    console.log("Hello There!")
    global_apiData  = await getCountriesInfo(); // calling first function
    // console.log(global_apiData)
    countriesList.innerHTML = ""

    global_apiData.map(country => {
        createNewCountryElement(country);
    })  
}

setUp();


// Create a function which uses this global variable to create a series of new HTML elements, populating each with information about each country (such as name and population), and adding them to the <ul> in your HTML. Call this function following your first function within the SetUp() function. Ensure that the original <p> element is removed ahead of populating your list

// 1. Create a function , accept country data from one country
// 2.create an HTML element (li)
// 3. Add info within li 
// 4. append li to ul

function createNewCountryElement(single_country){
    const newListItem = document.createElement("li");
    const countryName = single_country.name.common;
    const countryPopulation = single_country.population
    newListItem.innerText  = `${countryName}, Population: ${countryPopulation}`
    countriesList.appendChild(newListItem);

}

// Add a simple <form> to your HTML with a single text-box input and a submit button. Create a function which is called when the form is submitted, printing the value of the <input> element to the console

function handleFilterFormSubmit(event){
    event.preventDefault();
    const inputValue = event.target[0].value;
    console.log(inputValue);
}

filterCountryForm.addEventListener("submit", handleFilterFormSubmit)



// Create a function which takes your global variable and filters it based off of the value received from your <form> above. Replace the contents of your <ul> with the filtered countries returned

function filterCountries(filterCriteria) {
    // we want to filter where our search criteria exists within the name of the country
    global_apiData.filter(country => {
        const noCase = country.name.common.toLowerCase
       return country.name.common.includes(filterCriteria)
    })

    countriesList.innerHTML = "";

    filteredCountries.map(country => {
        createNewCountryElement(country);
    })
}
