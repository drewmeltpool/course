/* ЗАДАНИЕ - 5
* Дополнить функционал решения из прошлой задачи.
* Добавить для свойства price getter и setter.
* getter должен возвращать своство в виде строки в формате `${ЗНАК ВАЛЮТЫ}${ЦЕНА}`, где знаком валюты должен быть знак гривты.
* */

function createProductCart(title, code, price, description) {
  let productCart = {
    name: title,
    code: code,
    description: description,
    startSale: function (sale) {
      this.price -= (this.price / 100) * sale;
    }
  };

  Object.defineProperty(productCart, 'price', {
    get() {
      return `$${price}`;
    },
    set(v) {
      if (typeof v !== 'number') {
        console.error('wrong argument type')
      } else {
        price = v;
      }
    }
  });

  return productCart;
}

const pizza = createProductCart('Spicy Margarita', 785584, 244, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, voluptates.');
debugger
pizza.price = 44;

console.log(pizza.price); //"$244"