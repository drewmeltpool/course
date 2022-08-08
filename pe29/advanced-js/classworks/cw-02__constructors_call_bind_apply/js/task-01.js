/* ЗАДАЧА 1
* "Своровать" метод forEach у массива
* Дан массив елементов, точнее не массив а HTMLCollection из элементов списка
* Наша задача перебрать коллекцию и каждому елементу изменить текстовое содержимое.
* При этом нужно использовать именно метод forEach массива, не используя Array.from() или деструктуризацию.
*/
const listItem = document.getElementsByClassName('list__item');

[].forEach.call(listItem,(el) => {
  el.textContent = `какая-нибудь ахинея`
  console.log(el);
});
