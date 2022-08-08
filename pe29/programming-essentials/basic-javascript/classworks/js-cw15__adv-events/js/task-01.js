/**
 * Task - 01
 *
 * Create any text element and container with 5 buttons inside.
 *
 * The task is to show inner text of the button that was just pressed.
 * Only one event listener can be used.
 * */
const text = document.createElement('p');
const btnContainer = document.createElement('div');
const btnsData = [
  'button',
  'shutton',
  'gogi',
  'saribeg',
  'sanitizer',
  'hello!'
];

btnsData.forEach(str => {
  const btn = document.createElement('button');
  btn.textContent = str;
  btnContainer.append(btn);
});

document.body.prepend(text, btnContainer);

btnContainer.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    text.textContent = e.target.textContent;
  }
});