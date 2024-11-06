// const dogs = [
//   { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
//   { weight: 8, curFood: 200, owners: ["Matilda"] },
//   { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
//   { weight: 32, curFood: 340, owners: ["Michael"] },
// ];

// // recommendedFood = weight ** 0.75 * 28
// // 10% range
// const recommendedFoodAmt = function (dog) {
//   return dog.weight ** 0.75 * 28;
// };

// const inRecommendedRange = function (dog) {
//   if (dogs.curFood > dog.recommendedFood + dog.recommendedFood * 0.1) {
//     return 1;
//   } else if(dogs.curFood < dog.recommendedFood + dog.recommendedFood * 0.1) {
//     return -1;
//   } else {
//     return 0;
//   }
//   return dogs.curFood < dog.recommendedFood + dog.recommendedFood * 0.1 &&
//     dogs.curFood < dog.recommendedFood - dog.recommendedFood * 0.1
//     ? true
//     : false;
// };

// dogs.forEach((dog) => (dog.recommendedFood = recommendedFoodAmt(dog)));

// const sarahsDog = dogs.find((dog) => dog.owners.includes("Sarah"));
// console.log(inRecommendedRange(sarahsDog));

// const ownersEatTooMuch = dogs.filter(dog => inRecommendedRange(dog) === 1);
// const owndersEatTooLittle = dogs.filter(dog => inRecommendedRange(dog) === -1);

// console.log(ownersEatTooMuch);
// console.log(owndersEatTooLittle);

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// 1.
dogs.forEach(dog => dog.recFood = Math.trunc(dog.weight ** 0.75 * 28));
console.log(dogs);

// 2.
const sarahsDog = dogs.find(dog => dog.owners.includes("Sarah"));
console.log(`Sarah's dog is eathing too ${sarahsDog.curFood > sarahsDog.recFood ? 'much' : 'little'}`);

// 3.
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood )
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

// 4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join( ' and ')}'s eat too little`);
 
// 5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6.
const checkEatingOkay = dog => 
  dog.curFood > dog.recFood * 0.9
  && dog.curFood < dog.recFood * 1.1 ? true : false;

console.log(dogs.some(dog => checkEatingOkay(dog)));

// 7. 
console.log(dogs.filter(checkEatingOkay));

// 8.
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);