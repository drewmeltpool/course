/*TASK 2
* Create a function. It should receive 1 argument - source string.
*
* Turn all of the odd characters of the string in to UPPERCASE.
*
* Return value: string with uppercase odd characters
*/
const str = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A architecto atque dignissimos distinctio earum est facere facilis fuga, ipsa labore laborum obcaecati possimus qui ratione similique suscipit tempora temporibus totam.';


function oddToUpperCase(string) {
  let res = '';

  for (let i = 0; i < string.length; i++) {
    const order = i + 1;

    if (order % 2 > 0) {
      res += string[i].toUpperCase();
    } else {
      res += string[i]
    }
  }

  return res;
}

console.log(oddToUpperCase(str));



/* ADVANCED */
// function oddToUpperCase(string) {
//   const splitedStr = string.split(' ');
//   let res = '';
//
//   for (let word of splitedStr) {
//     for (let i = 0; i < word.length; i++) {
//       const order = i + 1;
//
//       if (order % 2 > 0) {
//         res += word[i].toUpperCase();
//       } else {
//         res += word[i]
//       }
//     }
//     res += ' ';
//   }
//
//
//   return res;
// }
//
// console.log(oddToUpperCase(str));