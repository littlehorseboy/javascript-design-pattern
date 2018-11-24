class Animal {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

class Dog extends Animal {
  constructor(props) {
    super(props);
  }

  speak() {
    return 'woof';
  }
}

const dog = new Dog('dogdog');
console.log(`${dog.getName()} says ${dog.speak()}`);
console.log(`${dog.name} says ${dog.speak()}`);
