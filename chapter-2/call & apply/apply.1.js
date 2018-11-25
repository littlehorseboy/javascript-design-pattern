const func = (a, b, c) => {
  console.log([a, b, c]);
}

func.apply(null, [1, 2, 3]);
