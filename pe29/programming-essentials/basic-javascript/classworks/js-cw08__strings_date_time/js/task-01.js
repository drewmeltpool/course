/*TASK 1
* Write a function customCharAt(string,index)
*   string - source string
*   index - the index of the particular character of the string that we need
* Return value: the character itself, that is placed on the specific index
* */

function customCharAt(string,index) {
  return string[index];
}

const character = customCharAt('gogogogogog 123 321 ff', 13);

console.log(character);