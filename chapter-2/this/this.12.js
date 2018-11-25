const div = document.createElement('div'); // browser 限定
div.id = 'div';
document.body.appendChild(div);

document.getElementById = ((func) => {
  return function () {
    return func.apply(document, arguments);
  };
})(document.getElementById);

const getId = document.getElementById;
console.log(getId('div'));
