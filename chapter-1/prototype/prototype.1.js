const Person = function (name) {
  this.name = name;
};

Person.prototype.getName = function () {
  return this.name;
};

const a = new Person('horse');

console.log(a.name);
console.log(a.getName());
console.log(Object.getPrototypeOf(a) === Person.prototype);
