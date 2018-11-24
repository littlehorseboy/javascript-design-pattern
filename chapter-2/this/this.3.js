// window.name = 'globalName'; // 這段要在 browser 環境運行
this.name = 'globalName';

const myObject = {
  name: 'horse',
  getName() {
    return this.name;
  },
};

const getName = myObject.getName;
console.log(getName());
