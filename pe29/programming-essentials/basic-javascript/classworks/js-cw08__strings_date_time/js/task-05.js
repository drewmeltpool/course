/*TASK 5
* Create a function that takes string with date 'DD/MM/YYYY' as an argument.
*
* Return value: number of weekday of the first day in this month
*
* Create the same function for getting the name of the last weekday of the month.
* */
function firstMonthDay(dateStr) {
  const dateArray = dateStr.split('/');

  const date = new Date(`${dateArray[1]}/${dateArray[0]}/${dateArray[2]}`)

  date.setDate(1);

  return date.getDay();
}

console.log(firstMonthDay('15/02/2020'));