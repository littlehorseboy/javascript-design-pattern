// 模擬 bind
// Function.prototype.bind = function(context) {
//   var self = this;
//   return function() {
//     return self.apply(context, arguments);
//   };
// };

var obj = {
  name: 'horse',
};

var func = function() {
  console.log(this.name);
}.bind(obj);

func();
