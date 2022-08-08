/* TASK - 1
* Get several elements from the page, by:
*   tag
*   class
*   identifier
*   CSS selector
*   name attribute
* Use console.dir() method to show up the elements
* */

console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('storage'));
console.dir(document.getElementById('list'));
console.dir(document.querySelector('.storage-item'));
console.dir(document.querySelectorAll('.storage-item'));
console.dir(document.getElementsByName('gogi'));