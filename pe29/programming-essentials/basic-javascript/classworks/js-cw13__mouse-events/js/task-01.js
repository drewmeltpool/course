/*TASK - 1
* Show alert with message 'This is click', after the click on the 'Click me' button.
*/

const clickMe = document.getElementById('clickMeBtn');

clickMe.addEventListener('click', () => {
  alert('This is click');
});