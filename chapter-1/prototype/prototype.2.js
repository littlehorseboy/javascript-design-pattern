const obj = {
  name: 'horse'
};

const A = function () {};
A.prototype = obj;

var a = new A();
console.log(a.name);
