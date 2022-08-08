/* ЗАДАНИЕ - 4
* Написать функцию, которая из всех переданных аргументов возвращает только выбранный тип данных.
* Аргументы:
*   1 - выбранный тип данных, который нужно отоборать
*   2 и далее - елементы, из которых нужно отобрать
*
* ДОП. ЗАДАНИЕ: Написатьвторую реали зацию, где элементы из которых нужно отбирать переданы в массиве.
* */

function getData() {
  let res = [];
  let type = arguments[0];

  for (let i = 1; i < arguments.length; i++) {
    if (typeof arguments[i] === type) {
      res.push(arguments[i]);
    }
  }

  return res;
};

const res = getData('object', 2,3,44,null,'5','fjfjf','909', 404, {}, '');
console.log(res);