/**
 * ЗАДАНИЕ
 * Написать небольшую имитацию интернет магазина.
 *
 * В нее входит 3 класса для разного типа обхектов в системе.
 *
 * 1) класс товара - Product
 * свойства:
 *  - ID
 *  - title
 *  - price
 *  - description
 *  - category
 *  - available amount
 *  - sellerID
 *
 * 2) класс корзины Contacts
 * свойства:
 *  - userID
 *  - cost
 *  - items
 * методы:
 *  - calcCost()
 *  - addItem(item)
 *  - removeItem(itemID)
 *  - editAmount(itemID, newAmount)
 *  - buy()
 *
 * 3) класс пользователя - User
 * свойства:
 *  - fullName
 *  - age
 *  - email
 *  - balance
 *  - email
 * методы:
 *  - makePayment()
 */

class Product {
  constructor(ID,
              title,
              price,
              description,
              category,
              availableAmount,
              sellerID) {
    this.ID = ID;
    this.title = title;
    this.price = price;
    this.description = description;
    this.category = category;
    this.availableAmount = availableAmount;
    this.sellerID = sellerID;
  }
}

class Cart {
  /**
   * @constructor
   * @param user - entire object with all user info
   * @param items - objects like {product: Product, amount: Number}
   */
  constructor(user, items) {
    this.user = user;
    this.items = items;
    this.cost = this.calcCost();
  }

  calcCost() {
    let result = 0;
    this.items.forEach((item) => {
      const {product, amount} = item;
      result += amount * product.price
    });
    return result;
  }

  addItem(item) {
    this.items.push(item)
  }

  removeItem(itemID) {
    const {items} = this;

    for (let i = 0; i < items.length; i++) {
      if (items[i].product.ID === itemID) {
        items.splice(i, 1);
        return;
      }
    }
    // let index;
    // this.items.forEach((item, i) => {
    //   if(item.ID === itemID){
    //     index = i;
    //   }
    // });
    // this.items.splice(index, 1);
  }

  editAmount(itemID, newAmount) {
    let myItem = this.items.find(item => {
      let {product} = item;
      return product.ID === itemID;
    });

    if (myItem === undefined) {
      throw new Error('No product with this ID, BRO');
    }

    if (myItem.product.availableAmount < newAmount) {
      throw new Error("у нас стiлько нема...")
    }

    myItem.amount = newAmount;
    this.cost = this.calcCost();
  }

  buy() {
    this.user.makePayment(this.cost);
  }
}


class User {
  constructor(fullname, age, email, balance) {
    this.fullname = fullname;
    this.age = age;
    this.email = email;
    this.balance = balance;
  }

  makePayment(price) {
    if (this.balance >= price) {
      this.balance -= price;
    } else {
      throw new Error('Not enough money');
    }
  }
}

const gogi = new User("Gaga Gogidze", 50, 'codefather@go.com', 2000);

const gogiCart = new Cart(
  gogi,
  [
    {
      product: new Product(1, "Bread", 10, "best khleb!", 'bakery', 100, 404),
      amount: 5
    },
    {
      product: new Product(2, "Salo", 450, "best salo!", 'butchery', 50, 401),
      amount: 10
    },
    {
      product: new Product(3, "Garlic", 25, "best garlic!", 'butchery', 5, 400),
      amount: 1
    },
    {
      product: new Product(3, "Samogonochka", 50, "best!! prosto BEST!", 'alcohol', Infinity, 0),
      amount: 200
    },
  ]
);

console.log(gogiCart);

// [
//   {product: {}, amount: 7},
//   {product: {}, amount: 7},
//   {product: {}, amount: 7},
//   {product: {}, amount: 7},
//   {product: {}, amount: 7},
//   {product: {}, amount: 7},
//   {product: {}, amount: 7},
//   {product: {}, amount: 7},
// ]