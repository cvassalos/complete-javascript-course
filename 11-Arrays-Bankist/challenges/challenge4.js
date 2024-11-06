const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

// recommendedFood = weight ** 0.75 * 28
// 10% range
const recommendedFoodAmt = function (dog) {
  return dog.weight ** 0.75 * 28;
};

const inRecommendedRange = function (dog) {
  if (dogs.curFood < dog.recommendedFood + dog.recommendedFood * 0.1) {
    return "You are not feeding your dog the correct amount of food";
  }
  return dogs.curFood < dog.recommendedFood + dog.recommendedFood * 0.1 &&
    dogs.curFood < dog.recommendedFood - dog.recommendedFood * 0.1
    ? true
    : false;
};

dogs.forEach((dog) => (dog.recommendedFood = recommendedFoodAmt(dog)));

const sarahsDog = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(recommendedFoodAmt(sarahsDog));

console.log(
  inRecommendedRange(sarahsDog)
    ? "Right amount of food"
    : "Incorrect amount of food"
);

console.log(dogs);
