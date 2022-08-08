/*TASK - 5
* There is an input next to the 100px square.
* Only HEX of the color can be entered in this input. Next to this input - 'Ok' btn is placed and its inactive by default.
* Create a function that will be changing the color.
* After hex is entered 'Ok' button should become active so user could press it.
* After pressing the 'Ok' button color should changes.
* */
const colorPicker = document.createElement('input');
colorPicker.type = 'color';

document.body.prepend(colorPicker);

console.log(colorPicker.value);