/* TASK - 4
* We can simulate the staff list with the role for each particular member.
* User enters the name of the employee, after that the message with the role of this employee needs to be shown.
* The list is:
* Boss - the main Boss in the building
* Boss Junior - right hand of the Boss
* John Doe - the worker of the month
* Kicki - schedule writer
* */

let ask = prompt("Who are you?");
switch (ask) {
  case "Boss" :
  case "boss" :
    alert("the main Boss in the building");
    break;
  case "Boss Junior" :
  case "boss junior" :
    alert("right hand of the Boss");
    break;
  case "John Doe" :
  case "john doe":
    alert("the worker of the month");
    break;
  case "Kicki" :
  case "kicki" :
    alert("schedule writer");
    break;
  default :
    alert("Name yourself!!");
}
