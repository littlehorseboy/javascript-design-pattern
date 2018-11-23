const myObject = (function() {
  const name = 'sven';
  
  return {
    getName() {
      return name;
    },
  };
})();

console.log(myObject.getName());
console.log(myObject.name);
