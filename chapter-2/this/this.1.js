const obj = {
  a: 1,
  getA() {
    console.log(this === obj);
    console.log(this.a);
  },
};

obj.getA();
