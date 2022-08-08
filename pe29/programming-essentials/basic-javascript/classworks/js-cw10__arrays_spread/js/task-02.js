/* TASK - 2
* Create a function that will take one argument - array from the previous task result.
* The task is to show every dish from the array in the console and delete it from the source array.
* After all of the dishes will be shown on the console, the array must be empty.
* */


function showDishes(allDishes=[]) {
  while (allDishes.length) {
    console.log(allDishes.shift());
  }
}

showDishes(['gogol', 'mogol', 'eggs', 'bacon', 'coffee']);