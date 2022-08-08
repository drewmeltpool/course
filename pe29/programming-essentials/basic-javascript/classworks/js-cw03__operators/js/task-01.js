/* TASK - 1
* Get any integer number from user.
* After you get the number, show modal window with message about is number even or odd.
*/
let number = prompt("enter a number");

if (isNaN(number)){
  alert(number + " is not a number")
} else{
  if (number %2 === 0) {
    alert(number + " is even")
  }
  else{
    alert(number + " is odd")
  }
}


// let number = prompt("enter a number");
//
// if (isNaN(number)) {
//   alert(`${number} + is not a number`)
// } else {
//   alert(
//     number % 2 === 0
//       ? `${number} is even`
//       : `${number} is odd`
//   )
// }
//
// const user = user ? user : {}
// const user = user || {};

