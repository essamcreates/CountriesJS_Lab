let globalOutput = null; // Global variable to store the fetched data 


const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all");
    const jsonData = await response.json();
    jsonData.splice(96, 1);
    console.log(jsonData);
    return jsonData;
}

//setUp function
async function SetUp() {
    globalOutput = await fetchCountries();
    populateCountryList(globalOutput);
  }

//call setUp function when the webpage loads
window.onload = SetUp;
console.log(globalOutput);

//   Create a function to populate the country list with fetched data
function populateCountryList() {
    const ul = document.querySelector("ul");
    ul.innerHTML = "";

    globalOutput.forEach(country => {
        const li = document.createElement("li");
        li.textContent = `${country.name.common} - Population: ${country.population}`;
        countriesList.appendChild(li);
    });
}

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent form submission
    const inputElement = document.getElementById('input-text');
    const inputValue = inputElement.value;
    filterAndUpdateList(inputValue);
}

// Function to filter and update the country list
function filterAndUpdateList(query) {
    const filteredCountries = globalOutput.filter(country => {
        const countryName = country.name.common.toLowerCase();
        return countryName.includes(query.toLowerCase());
    });

    const ul = document.querySelector("ul");
    ul.innerHTML = "";

    filteredCountries.forEach(country => {
        const li = document.createElement("li");
        li.textContent = `${country.name.common} - Population: ${country.population}`;
        ul.appendChild(li);
    });
}

// Attach the form submission handler
const form = document.getElementById('form');
form.addEventListener('submit', handleFormSubmission); 
  

  






