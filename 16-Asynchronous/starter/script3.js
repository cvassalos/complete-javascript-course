'use strict'

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
  countriesContainer.style.opacity = 1;
}

const renderError = function(msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
}

const getPosition = function() {
  return new Promise(function(resolve, reject) {
    // navigator.geolocation.getCurrentPosition(
    //   position => resolve(position),
    //   err => console.error(err)
    // );
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
};

getPosition().then(pos => console.log(pos)).catch(err => console.err(new Error(err)));


const whereAmI = function() {
  getPosition().then(pos => {
    const {latitude: lat, longitude: lng} = pos.coords;

    return fetch(`https://api-bdc.io/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
  })
  .then(res => {
    if(!res.ok) throw new Error(`Problem with geocoding ${res.status}`);
    console.log(res); 
    return res.json();
  })
  .then(data => {
    console.log(data);
    console.log(`You are in ${data.city}, ${data.countryName}`);
  
    return fetch(`https://restcountries.com/v2/alpha/${data.countryCode}`);
    })
    .then(res => {
      if(!res.ok)
        throw new Error(`Country not found (${response.status})`);

      return res.json();
      })
    .then(data => renderCountry(data[0]))
    .catch(err => console.error(`${err.message}`));
};

btn.addEventListener('click', whereAmI);

// getPosition().then(pos => {
//   whereAmI(pos.coords.latitude, pos.coords.longitude);
//   console.log(pos.coords.latitude);
//   console.log(pos.coords.longitude);
// });

