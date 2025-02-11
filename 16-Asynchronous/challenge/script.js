// https://api-bdc.io/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function(data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  // countriesContainer.style.opacity = 1;
}

const renderError = function(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
}
const whereAmI = function(lat, lng) {
  return fetch(`https://api-bdc.io/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}&localityLanguage=en`)
    .then(res => res.json())
    .then(data => {
      console.log(`You are in ${data.city}, ${data.countryName}.`);
      return data.countryName;
    })
    .catch(err => console.log(err));
}

const cville = whereAmI(38.029998779296875, -78.4800033569336);
const chalandri = whereAmI(38.0214, 23.7988);


const getJSON = function(url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if(!response.ok)
      throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  })
};


const getCountryData = function(country) {
  // Country 1
  getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
    .then(data => {
      renderCountry(data[0]);
      const neighbor = data[0].borders?.[0];

      // Country 2
      return getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found');
    })
      .then(data => renderCountry(data, 'neighbour'))
      .catch(err => {
	console.error(`${err} ERROR`);
	renderError(`Something went wrong: ${err.messge}. Try again!`);
      })
      .finally(() => {
	countriesContainer.style.opacity = 1;
      })
};


btn.addEventListener('click', function() {
  whereAmI(52.508, 13.381)
    .then(country => getCountryData(country));
});
