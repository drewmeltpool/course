/* ЗАДАНИЕ - 6
* Дополнить функционал решения из прошлой задачи.
* Заблокировать вохможность изменять свойство code, создаваемого объекта.
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

  Object.defineProperty(productCart, 'price', {writable:false,configurable: false});

  return productCart;
}

const pizza = createProductCart('Spicy Margarita', 785584, 244, 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum, voluptates.');

pizza.price = 888; //ошибка
delete pizza.price
pizza.price = 888; //ошибка
pizza.price = 33; //ошибка

console.log(pizza);