/* ЗАДАНИЕ - 1
* Написать функцию, которая принимает 2 аргумента - имя и возраст пользователя
* Возвращаемое значение этой функции - объект с двумя ключами name и age, куда будут записаны значения переданных функции аргументов.
* */

const createUser = function (userName, userAge) {
  return {
    name: userName,
    age: userAge
  };
};

const n = prompt('what is your name?');
const a = prompt('how old are you?');

createUser(n, a);