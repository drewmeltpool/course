/* ЗАДАНИЕ - 5
* Дополнить функционал решения из прошлой задачи.
* Добавить для свойства price getter и setter.
* getter должен возвращать своство в виде строки в формате `${ЗНАК ВАЛЮТЫ}${ЦЕНА}`, где знаком валюты должен быть знак гривты.
* */

const pizza = createProductCart('Spicy Margarita', 785584, 244, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, voluptates.');

console.log(pizza.price); //"$244"