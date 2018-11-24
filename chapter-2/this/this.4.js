const myObject = {
  name: 'horse',
  getName() {
    console.log(this.name);

    const showName = () => {
      console.log(this.name);
    };

    showName();

    const showName2 = function () {
      console.log(this.name);
    }.bind(this);

    showName2();
  },
};

myObject.getName();
