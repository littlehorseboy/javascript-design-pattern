const obj1 = new Object();
const obj2 = {};

console.log(Object.getPrototypeOf(obj1) === Object.prototype);
console.log(Object.getPrototypeOf(obj2) === Object.prototype);

console.log(obj1.__proto__ === Object.prototype);
