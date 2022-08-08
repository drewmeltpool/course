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
* Внутри функции нужно создать объект, записать в него все свойства и добавить один метод - startSale(), который изменяет цену товара и делает ее меньше на указанное количество процентов.
* метод startSale принимает аргумент - размер скидки, одним числом без знака процентов.
* */

/*
* 1 - ф-я createProductCart возвращает объект
* 2 - ф-я createProductCart возвращает объект со  свойствами title, code, price, description
* 3 - ф-я createProductCart возвращает объект со  свойствами title, code, price, description. В каждое свойство записано значение соответствующего аргумента
* 4 - в возвращаемый объект добавить метод startSale, который просто показывает в консоли цену товара
* 5 - метод startSale выводит в консоль цену, от которой отнимается заданное количество процентов
* 6 - метод startSale изменяет исходное значение цены, на результат из шага 5
* */

function createProductCart(title, code, price, description) {
  let productCart = {
    name: title,
    code: code,
    price: price,
    description: description,
    startSale: function (sale) {
      this.price -= (this.price / 100) * sale;
    }
  };
  return productCart;
}

const pizza = createProductCart(
  'Spicy Margarita',
  785584,
  244,
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, voluptates.'
);

console.log(pizza.price); // 244

pizza.startSale(10);

console.log(pizza.price); // 122