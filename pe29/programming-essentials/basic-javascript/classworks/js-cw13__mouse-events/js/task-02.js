/*TASK - 2
* Show alert with message 'This is mouseover', after the hover on the 'Click me' button.
*/

const clickMe = document.getElementById('clickMeBtn');

clickMe.onmouseover = () => alert('This is mouseover');
// clickMe.onmouseenter = () => alert('This is mouseover');