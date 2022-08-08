/**
 * Task - 01
 *
 * Create h1 element on a page using JavaScript. Place it on the page.
 * After any kay on the page was pressed, print the key's name as the text content of the h1 element.
 * */

const title = document.createElement('h1');

document.body.prepend(title);

document.addEventListener('keyup', e => {
  console.log(e.key);
  if(e.key === "Backspace"){
      title.textContent = title.textContent.substr(0,title.textContent.length - 1);
  } else {
    title.textContent += e.key;
  }
});