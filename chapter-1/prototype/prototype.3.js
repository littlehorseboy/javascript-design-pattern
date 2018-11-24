const A = function(){};
A.prototype = {name: 'horse'};

const B = function(){};
B.prototype = new A();

var b = new B();
console.log(b.name);
