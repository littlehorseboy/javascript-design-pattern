// window.name = 'globalName';
this.name = 'globalName';

const getName = () => {
  return this.name;
};

console.log(getName());
