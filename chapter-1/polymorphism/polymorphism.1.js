const makeSound = (animal) => {
  if (typeof animal.sound === 'function') {
    animal.sound();
  } else {
    console.log('這是什麼不會叫的animal?')
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
