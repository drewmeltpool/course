/*TASK - 4
* There is a button 'Change color' next ot the 100px square. Create a function, that will change the color of the square randomly, by the clicking on the button, not on the square.
*/
function getRandomColor() {
  const getNum = (to) => Math.floor(Math.random() * to);
  return `rgb(${getNum(255)}, ${getNum(255)}, ${getNum(255)})`;
}

const createElement = (tagName, styles, text, handleClick = () => null) => {
  const elem = document.createElement(tagName);

  elem.style.cssText = styles;

  if (text) {
    elem.textContent = text;
  }

  elem.addEventListener('click', handleClick);

  return elem;
};

const square = createElement(
  'div',
  'width: 300px; height: 300px; background: #f0f;',
  '');
const btn = createElement(
  'button',
  '',
  'click me',
  () => {
    square.style.background = getRandomColor();
  });

document.body.prepend(square, btn);



