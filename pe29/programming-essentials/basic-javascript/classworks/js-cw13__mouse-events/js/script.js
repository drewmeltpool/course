const price = document.createElement('input');
const btn = document.createElement('button');

btn.textContent = 'reset';

btn.onclick = () => price.value = '';

document.body.prepend(price, btn);