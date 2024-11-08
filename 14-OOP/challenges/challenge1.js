"use strict";

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}km/h`);
};

const porsche = new Car("Porsche", 80);
console.log(porsche);

porsche.accelerate();
console.log(porsche);

porsche.brake();
console.log(porsche);

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

console.log(bmw);
bmw.brake();
console.log(bmw);
