const func = (a, b, c) => {
  console.log([a, b, c]);
}

func.call(null, 1, 2, 3);
