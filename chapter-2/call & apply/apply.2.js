const max1 = Math.max(1, 2, 5, 3, 4);
const max2 = Math.max.apply(null, [1, 2, 5, 3, 4]);

console.log(max1);
console.log(max2);
