/* TASK - 1
* Get an element with class 'remove-me' and remove it from the page.
* Find element with class 'make-me-bigger'. Replace class 'make-me-bigger' to 'active'. Class 'active' already exists in CSS.
* */
const collection = document.getElementsByClassName('remove-me');
const btnToRemove = collection[0];

btnToRemove.remove();

const btnToMakeBigger = document.querySelector('.make-me-bigger');
btnToMakeBigger.classList.replace('make-me-bigger', 'active');