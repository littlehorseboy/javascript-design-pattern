const obj = {
  name: 'horse',
  getName() {
    return this.name;
  },
};

const getName2 = obj.getName;

console.log(getName2());
