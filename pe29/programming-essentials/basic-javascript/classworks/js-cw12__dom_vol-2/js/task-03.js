/* TASK - 3:
* Create a square.
* Ask the user about the size and background color of the square.
* Create an element in JS
* Ask the size.
* Ask the background color.
* Add the styles to the element in JS
* Place the element BEFORE the first script tag on your page
* */
function createSquare(size, bg, parent) {
  const square = document.createElement('div');
  square.style.width = `${size}px`;
  square.style.height = `${size}px`;

  square.style.background = bg;

  parent.prepend(square)
}


const userSize = prompt('size?');
const bgColor = prompt('bg?');

createSquare(userSize, bgColor, document.body);
