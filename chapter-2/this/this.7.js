const Myclass = function () {
  this.name = 'horse';
  return {
    name: 'other',
  };
};

const obj = new Myclass();
console.log(obj.name);
