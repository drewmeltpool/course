/* TASK - 2
* Ask user in witch language he wants to see the list of the days.
* User should enter one of three values, they are - urk, en, ru
* Show the list of days on selected language.
* */

let question = prompt("write your language");
let ukr = "понедiлок";
let en = "monday";
let ru = "понедельник";

// if (question === "ukr" || question === "Ukr" || question === "ukR") {
//   alert(ukr);
// } else if (question === "en") {
//   alert(en);
// } else if (question === "ru") {
//   alert(ru);
// } else {
//   alert("wrong");
// }

switch (question) {
  case "en":
    alert(en);
    break;
  case "ukr":
    alert(ukr);
    break;
  case "ru":
    alert(ru);
    break;
  default:
    alert("wrong");
}