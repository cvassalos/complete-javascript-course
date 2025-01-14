'use strict'

const getCountry = function(x_coord, y_coord) {
  const fetchCountry = fetch(`https://geocode.xyz/${x_coord},${y_coord}?geoit=json`)
    .then(response => response.json());
  console.log(fetchCountry);
}

getCountry("52.508", "13.381")
