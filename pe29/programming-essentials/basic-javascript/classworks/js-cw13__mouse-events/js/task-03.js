/*TASK - 3
* Create a function, that will be changing the background color of the 100px square randomly,
* by the clicking on it. Every color should be random, transparent and white are not included in the list of colors.
 */

function getRandomColor() {
  const getNum = (to) => Math.floor(Math.random() * to);
  return `rgb(${getNum(255)}, ${getNum(255)}, ${getNum(255)})`;
}

function createSquare(size, handleClick) {
  const square = document.createElement('div');

  square.style.width = size + "px";
  square.style.height = size + "px";
  square.style.background = getRandomColor();

  square.addEventListener('click', handleClick);

  return square
}

const mySquare = createSquare(533, (e) => {
  e.target.style.background = getRandomColor();
});

document.body.prepend(mySquare);