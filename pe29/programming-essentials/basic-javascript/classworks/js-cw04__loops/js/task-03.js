/* ЗАДАНИЕ - 3
* Осуществляем проверку на корректность введения данных.
* Пользователь должен ввести два числа и операцию.
* Если пользователь ввел НЕ числа или операцию, которой нет в списке - спрашиваем все по новой, ДО ТЕХ ПОР ПОКА не введет правильно.
*  Список операций:
*   * - умножение
*   + - добавление
*   - - вычетание
*   / - деление
* */

let num1 = prompt("enter first number");

while (isNaN(num1)) {
  num1 = prompt("enter correct first number")
}

let num2 = prompt("enter second number");

while (isNaN(num2)) {
  num2 = prompt("enter correct first number")
}

let operation = prompt("enter operation");

while (
  operation !== '+'
  && operation !== '-'
  && operation !== '/'
  && operation !== '*') {
  operation = prompt("enter correct operation");
}

alert(`${num1} ${operation} ${num2}`);










