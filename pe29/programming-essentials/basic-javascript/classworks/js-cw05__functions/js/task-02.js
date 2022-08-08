/* ЗАДАНИЕ - 2
* Написать функцию которая будет принимать два аргумента - число с которого начать отсчет и число до которого нужно досчитать.
* Под отсчетом имеется в виду последовательный вывод чисел в консоль с увеличением на единицу.
*/

const countRange = function (start, end) {
  if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }
  for (let i = start; i <= end; i++) {
    console.log(i);
  }
};

countRange(17, 909);
