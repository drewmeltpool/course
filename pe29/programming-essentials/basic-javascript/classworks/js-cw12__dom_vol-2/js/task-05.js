/* TASK - 5
* Rewrite the last task.
* Ask the user the number of rectangles to create and the background color for all of them.
* Create a CSS class with the basic properties: width: 200px; height: 200px; margin: 5px
*
* Ask the number of the rectangles
* Ask the background-color
*
* Create a loop, where inside each iteration:
*   create a rectangle
*   add class, previously created in CSS
*   add background-color
*   append the element on the page BEFORE the first element with the tag script
*/


const createSquare = (className, bgColor) => {
  const square = document.createElement('div');

  square.classList.add('square');
  square.style.background = bgColor;

  return square;
};

const createManySquares = (amount, bgColor, parent = document.body) => {
  console.time('ggg');
  for (let i = 0; i <= amount; i++) {
    const squareItem = createSquare('square', bgColor);
    parent.append(squareItem);
  }
  console.timeEnd('ggg');
};

createManySquares(
  prompt('how many items?'),
  prompt('what color?'),
  document.getElementById('squares')
);
