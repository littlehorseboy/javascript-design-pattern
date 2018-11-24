function Person(name) {
  this.name = name;
}

Person.prototype.getName = function () {
  return this.name;
};

var objectFactory = (...args) => {
  var obj = {};

  console.log(args);

  var Constructor = [].shift.call(args);

  obj.__proto__ = Constructor.prototype;

  var ret = Constructor.apply(obj, args);
  
  console.log(Constructor);
  console.log(ret);
  console.log(obj);
  console.log(args);

  return typeof ret === 'object' ? ret : obj;
};

var a = objectFactory(Person, 'sven');

console.log(a.name);
console.log(a.getName());
console.log(Object.getPrototypeOf(a) === Person.prototype);
