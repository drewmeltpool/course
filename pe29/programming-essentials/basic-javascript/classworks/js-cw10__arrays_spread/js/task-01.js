/* TASK - 1
* Create a function that does not receive any arguments
* it will only ask the user what dishes he prefers to eat on breakfast.
* User can enter only one dish simultaneously, so you need to ask him UNTIL he will enter 'end'.
* Each dish needs to be placed into an array.
* Return value: array with all of the dishes.
* */
function breakfast(){
  let dishes = [];
  let dish = prompt("Что на завтрак?");

  while(dish !== "end"){
    dishes.push(dish);
    dish = prompt("Что на завтрак?");
  }

  return dishes;
}
console.log(breakfast());