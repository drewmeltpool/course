/* TASK 4
* Create a function getDayAgo(numberOfDays)
*
* Return value: name of the weekday, that was numberOfDays days before.
*/

function getDayAgo(numberOfDays) {
  const today = new Date();
  const todayDate = today.getDate();
  const weekDays = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
  ];

  today.setDate(todayDate - numberOfDays);

  return weekDays[today.getDay()]
}

console.log(getDayAgo(2));