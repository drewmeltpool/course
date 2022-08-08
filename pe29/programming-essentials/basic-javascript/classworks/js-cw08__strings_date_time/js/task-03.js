/* TASK 3
* Create a function cutMaxLength(string, maxlength)
* You need to cut the exact number of characters(maxLength) from source string.
* Return value:
*       if the number of the characters in source string is bigger then maxLength - the string that has been cut
*       if the number of the characters in source string is smaller then maxLength - the source string itself
*/

function cutMaxLength(string, maxlength) {
  if (string.length > maxlength) {
    return string.slice(0, maxlength) + '...'
  } else {
    return string
  }
}

const result = cutMaxLength('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium blanditiis fuga molestias nobis tempora voluptatibus?', 33);

console.log(result);

// function cutMaxLength(string, maxlength) {
//   return string.length > maxlength
//     ? string.slice(0, maxlength) + '...'
//     : string
// }
