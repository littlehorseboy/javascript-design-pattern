const a = {
  name: 'horse',
  func() {
    function show() {
      console.log(this.name);
    }

    const show2 = () => {
      console.log(this.name);
    }

    show(this);
    show.call(this);
    show2(this);
    show2.call(this);
  },
};

a.func();
