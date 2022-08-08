/* ЗАДАНИЕ - 4
* Написать функцию createProductCart(). Которая создает объект карточки товара.
*
* Аргументы:
*  - title - название товара
*  - code - артикул товара
*  - price - цена
*  - description - описание
*
* Возвращаемое значение: объект карточки товара со всеми свойствами и методами
*
* Внутри функции нужно создать объект, записать в него све свойства и добавить один метод - startSale(), который изменяет цену товара и делает ее меньше на указанное количество процентов.
* метод startSale принимает аргумент - размер скидки, одним числом без знака процентов.
* */

function createProductCart(name, code, price, description) {
  return {};
}

const pizza = createProductCart('Spicy Margarita', 785584, 244, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, voluptates.');

console.log(pizza.price); // 244
pizza.startSale(50);
console.log(pizza.price); // 122