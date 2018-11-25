const div = document.createElement('div'); // browser 限定
div.id = 'div';
document.body.appendChild(div);

const getId = (id) => {
  return document.querySelector(`#${id}`);
};

console.log(getId('div'));
