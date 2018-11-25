const obj1 = {
  name: 'horse',
};

const obj2 = {
  name: 'other',
};

this.name = 'global';

const getName = function () {
  console.log(this.name);
};

getName();

getName.call(obj1);

getName.call(obj2);
