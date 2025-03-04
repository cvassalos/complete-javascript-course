'use strict';
/*
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

///////////////////////////////////////
// Our first AJAX Call: XMLHttpRequest
//
/*
const getCountryData = function(country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

request.addEventListener('load', function() {
  const [data] = JSON.parse(this.responseText);
  console.log(data);

  const html = `
  <article class="country">
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
});
}

getCountryData("portugal");
getCountryData("greece");
getCountryData("japan");
*/

/*
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
};

const getCountryAndNeighbor = function(country) {

  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();

  request.addEventListener('load', function() {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighboring country
    const [neighbor] = data.borders;

    if(!neighbor) return;
		//
    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v2/alpha/${neighbor}`);
    request2.send();

    request2.addEventListener('load', function() {
     const data2 = JSON.parse(this.responseText);
     console.log(data2);

     renderCountry(data2, 'neighbour');
    });
});
}

getCountryAndNeighbor("usa");

// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v2/name/${country}`);
// request.send();

const request = fetch('https://restcountries.com/v2/name/portugal');
console.log(request);
*/

/*
const getCountryData = function(country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(function(response) {
      console.log(response);
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      renderCountry(data[0]);
  });
};
*/


// const getCountryData = function(country) {
//   // Country 1
//   fetch(`https://restcountries.com/v2/name/${country}`)
//     .then(response => {
//       console.log(response);

//       if(!response.ok)
// 	throw new Error(`Country not found ${response.status}`);

//       return response.json();
//     })
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbor = data[0].borders?.[0];

//       // Country 2
//       return fetch(`https://restcountries.com/v2/alpha/${neighbor}`);
//     })
//       .then(response => response.json())
//       .then(data => renderCountry(data, 'neighbour'))
//       .catch(err => {
// 	console.error(`${err} ERROR`);
// 	renderError(`Something went wrong: ${err.messge}. Try again!`);
//       })
//       .finally(() => {
// 	countriesContainer.style.opacity = 1;
//       })

// };
// const getJSON = function(url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if(!response.ok)
//       throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   })
// };


// const getCountryData = function(country) {
//   // Country 1
//   getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found')
//     .then(data => {
//       renderCountry(data[0]);
//       const neighbor = data[0].borders?.[0];

//       // Country 2
//       return getJSON(`https://restcountries.com/v2/name/${country}`, 'Country not found');


//       .catch(err => {
// 	console.error(`${err} ERROR`);
// 	renderError(`Something went wrong: ${err.messge}. Try again!`);
//       })
//       .finally(() => {
// 	countriesContainer.style.opacity = 1;
//       })
// };

// btn.addEventListener('click', function() {
//   getCountryData('portugal');
// });

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries');

// const renderCountry = function(data, className = '') {
//   const html = `
//   <article class="country ${className}">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}</p>
//       <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
//       <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//     </div>
//   </article>
//   `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const renderError = function(msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);
// }

// const getPosition = function () {
//   return new Promise(function(resolve, reject) {
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//   });
// };


// const whereAmI = async function(country) {
// try {
//   // Geolocation
//   const pos = await getPosition();
//   const { latitude: lat, longitude: lng } = pos.coords;

//   // Reverse geocoding
//   const resGeo = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`);
//   if(!resGeo.ok) throw new Error('Problem getting location data')

//   const dataGeo = await resGeo.json();
//   console.log(dataGeo);

//   // Country data
//   const res = await fetch(`https://restcountries.com/v2/name/${dataGeo.countryCode}`);
//   if(!res.ok) throw new Error('Problem getting country data!')

//   const data = await res.json();
//   renderCountry(data[0]); 

//   return `You are in ${dataGeo.city}, ${dataGeo.countryName}`;
// } catch(err) {
//     console.error(`${err}!!!`);
//     renderError(`${err.message}`);

//     // Reject promise returned from async function
//     throw err;
//   }
// }

// console.log('1: Will get location');
// // const city = whereAmI();
// // console.log(city);

// // whereAmI()
// //   .then(city => console.log(`2. ${city}`))
// //   .catch(err => console.error(`2: ${err.message} 💥`))
// //   .finally(() => console.log('3: Finished getting location'));

// (async function() {
//   try {
//     const city = await whereAmI();
//     console.log(`2: ${city}`);
//   } catch(err) {
//     console.error(`2: ${err.message} 💥`)
//   }
//   console.log('3: Finished getting location')
// })();

// const getJSON = function(url, errorMsg = 'Something went wrong') {
//   return fetch(url).then(response => {
//     if(!response.ok)
//       throw new Error(`${errorMsg} (${response.status})`);

//     return response.json();
//   })
// };

// const get3Countries = async function(c1, c2, c3) {
//   try {
//     // const [data1] = await getJSON(`https://restcountries.com/v3.1/name/${c1}`);
//     // const [data2] = await getJSON(`https://restcountries.com/v3.1/name/${c2}`);
//     // const [data3] = await getJSON(`https://restcountries.com/v3.1/name/${c3}`);
//     // console.log([data1.capital, data2.capital, data3.capital]);

//     const data = await Promise.all([
//       getJSON(`https://restcountries.com/v3.1/name/${c1}`), 
//       getJSON(`https://restcountries.com/v3.1/name/${c2}`), 
//       getJSON(`https://restcountries.com/v3.1/name/${c3}`)
//     ]);
//     console.log(data.map(d => d[0].capital))
//   } catch(err) {
//     console.error(err.message);
//   }
// }
// get3Countries('portugal', 'canada', 'greece');

const getJSON = function(url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if(!response.ok)
      throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  })
};

//Promise.race --> takes in array of promises and resturns fastest fetch
(async function() {
  const res = await Promise.race([
    getJSON('https://restcountries.com/v3.1/name/italy'),
    getJSON('https://restcountries.com/v3.1/name/egypt'),
    getJSON('https://restcountries.com/v3.1/name/mexico')
  ]);
  // console.log(res[0]);
})();

const timeout = function(sec) {
  return new Promise(function(_, reject) {
    setTimeout(function() {
      reject(new Error('request took too long!'))
    }, sec * 1000);
  });
};

Promise.race([
  getJSON('https://restcountries.com/v3.1/name/tanzania'),
  timeout(5)
])
  .then(res => console.log(res[0]))
  .catch(err => console.error(err));


// Promise.allSettled --> takes in array of promises and returns array of all settled promises
Promise.allSettled([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another Success'),
]).then(res => console.log(res));

Promise.all([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another Success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));



// Promise.any --> taks in array of promises and returns first fulfilled promise and ignores rejected
Promise.any([
  Promise.resolve('Success'),
  Promise.reject('ERROR'),
  Promise.resolve('Another Success'),
])
  .then(res => console.log(res))
  .catch(err => console.error(err));