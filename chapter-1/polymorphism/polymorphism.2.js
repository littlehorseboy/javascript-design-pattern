const makeSound = (animal) => {
  if (animal.sound instanceof Function) {
    animal.sound();
  } else {
    console.log('這是沒聲音的animal?')
  }
};

const Duck = function () {};

Duck.prototype.sound = () => {
  console.log('嘎');
};

const Chicken = function () {};

Chicken.prototype.sound = () => {
  console.log('咕');
};

const Dog = function () {};

Dog.prototype.sound = () => {
  console.log('汪');
};

makeSound(new Duck());
makeSound(new Chicken());
makeSound(new Dog());
makeSound(function () {});
