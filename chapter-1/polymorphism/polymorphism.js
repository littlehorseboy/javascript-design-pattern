const makeSound = (animal) => {
  if (animal instanceof Duck) {
    console.log('嘎');
  } else if (animal instanceof Chicken) {
    console.log('咕');
  }
};

const Duck = function () {};
const Chicken = function () {};

makeSound(new Chicken());
makeSound(new Duck());
