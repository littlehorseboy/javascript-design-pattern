const obj1 = {
  name: 'horse',
  getName() {
    return this.name;
  },
};

const obj2 = {
  name: 'other',
};

console.log(obj1.getName());
console.log(obj1.getName.call(obj2));
