const div = document.createElement('div'); // browser 限定
div.id = 'div';
document.body.appendChild(div);

const getId = document.querySelector;

console.log(getId('#div'));
