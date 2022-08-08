/* ЗАДАНИЕ - 6
* Написать функцию getPrice(), которая будет вычислять стоимость бургера в зависимости от того какой у него размер и начинка.
* Размер и начинку определяет пользователь. УСЛОВНОЕ УПРОЩЕНИЕ - он умеет вводить ТОЛЬКО имена констант, т.е. проверка на некорректность введения данных не требуется.
*
* Размеры и начинки записаны в константы:*/

const SIZE_SMALL = {
  name: 'small',
  price: 15,
  cal: 250
};

const SIZE_LARGE = {
  name: 'large',
  price: 25,
  cal: 340
};

const STUFFING_CHEASE = {
  name: 'chease',
  price: 4,
  cal: 25
};

const STUFFING_SALAD = {
  name: 'salad',
  price: 5,
  cal: 5
};

const STUFFING_BEEF = {
  name: 'beef',
  price: 10,
  cal: 50
};

function getPrice(burgerSize, burgerStuffing) {
  let totalPrice = 0;
  
}

getPrice(prompt("Give me the size"), prompt("What stuffing do you prefer?"));