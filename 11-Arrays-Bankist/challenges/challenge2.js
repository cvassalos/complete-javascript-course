"use strict";

const dogs1 = [5, 2, 4, 1, 15, 8, 3];
const dogs2 = [16, 6, 10, 5, 6, 1, 4];

/*
/////////////My Solution //////////////////////
const calcAverageHumanAge = function (ages) {
  const dogHumanAge =
    ages
      .map((age) => (age > 2 ? 16 + age * 4 : 2 * age))
      .reduce((acc, curr) => (acc += curr)) / ages.length;
  console.log(`Average Age: ${dogHumanAge}`);
};

calcAverageHumanAge(dogs1);
calcAverageHumanAge(dogs2);
*/
const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map((age) => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter((age) => age >= 18);
  console.log(humanAges);
  console.log(adults);

  //   const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );

  // 2 3. (2 + 3)/2 = 2.5. 2/2 + 3/2 = 2.5

  return average;
};
const avg1 = calcAverageHumanAge(dogs1);
const avg2 = calcAverageHumanAge(dogs2);
console.log(avg1, avg2);
