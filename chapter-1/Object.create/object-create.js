const Plane = function () {
  this.blood = 100;
  this.attackLevel = 1;
  this.defenseLevel = 1;
};

const plane = new Plane();
// plane.blood = 500;
// plane.attackLevel = 10;
// plane.defenseLevel = 7;

const clonePlane = Object.create(plane); // 會將 plane 作為原型 __proto__ 複製它
console.log(clonePlane);
console.log(clonePlane.blood);
console.log(clonePlane.attackLevel);
console.log(clonePlane.defenseLevel);

// Object.create = Object.create || function (obj) {
//   var F = function () {};
//   F.prototype = obj;
//   return new F();
// };
