'use strict';

const dogsJulia1 = [3, 5, 2, 12, 7];
const dogsKate1 = [4, 1, 15, 8, 3];

const dogsJulia2 = [9, 16, 6, 8, 3];
const dogsKate2 = [10, 5, 6, 1, 4];


const checkDogs = function (kateDogs, juliaDogs) {
    const dogs = [...kateDogs.slice(1, 3), ...juliaDogs];
    dogs.forEach(function(value, i) {
        var dogAge = `Dog number ${i + 1} is `;
        console.log(value >= 3 ? dogAge + `an adult, and is ${value} years old` : dogAge + `still a puppy`);
    })
}

checkDogs(dogsJulia1, dogsKate1);
console.log('-----------------------------------------');
checkDogs(dogsJulia2, dogsKate2);