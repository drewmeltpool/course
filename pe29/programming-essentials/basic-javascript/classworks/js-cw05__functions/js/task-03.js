/* ЗАДАНИЕ - 3
* Написать функцию, которая будет суммировать ВСЕ числа, которые будут переданы ей в качестве аргументов.
* */

function sumAll() {
  let res = 0;

  for (let item of arguments) {
    res += item;
    // res = res + item;
  }
  return res;
  // for (let i = 0; i < arguments.length; i++) {
  //   res += arguments[i];
  // }
  // return res;
}

console.log(sumAll(14, 15, 88, 0));