function Drink(name, coffee, water, milk, sugar) {
  this.name = name;
  this.coffee = coffee;
  this.water = water;
  this.milk = milk;
  this.sugar = sugar;
}

const defaultDrinks = [
  new Drink("espresso", 50, 100, 0, 0),
  new Drink("latte", 50, 0, 200, 20),
  new Drink("super latte", 100, 0, 350, 60),
  new Drink("blow my mind", 200, 50, 50, 0),
];

function CoffeeMachine(
  name,
  parent = document.querySelector(".container"),
  drinks = defaultDrinks
) {
  this.elements = {
    container: document.createElement("form"),
    input: document.createElement("input"),
    btn: document.createElement("button"),
    error: document.createElement("span"),
  };
  this.parent = parent;
  this.name = name;
  this.drinks = drinks;
  this.milk = 1000;
  this.sugar = 1000;
  this.water = 5000;
  this.coffee = 2000;

  this.render = () => {
    const { parent } = this;
    const { error, container, input, btn } = this.elements;

    container.classList.add("coffee-machine");
    error.classList.add("coffee-machine__error");
    input.classList.add("coffee-machine__input");
    btn.classList.add("coffee-machine__btn");

    input.placeholder = "Enter drink name";
    btn.textContent = "Ok";

    btn.addEventListener("click", (e) => this.handleClick(e));

    container.append(error, input, btn);
    parent.append(container);
  };

  this.handleClick = (e) => {
    e.preventDefault();
    const { input, error } = this.elements;
    const drink = this.getDrink(input.value);

    input.value = "";
    if (!drink) {
      error.textContent = "Wrong drink name";
    } else {
      error.textContent = "";
      setTimeout(() => this.giveDrink(drink), 2000);
    }
  };

  this.giveDrink = (drink) => {
    const { error } = this.elements;
    if (this.isEnoughSupplies(drink)) {
      error.textContent = "";
      this.recalcSupplies(drink);
      // alert(`here is your "${drink.name}"`);
    } else {
      error.textContent = "Not enough supplies!";
    }
  };
  this.isEnoughSupplies = (drink) => {
    return (
      this.coffee >= drink.coffee &&
      this.water >= drink.water &&
      this.milk >= drink.milk &&
      this.sugar >= drink.sugar
    );
  };
  this.recalcSupplies = (drink) => {
    this.coffee -= drink.coffee;
    this.water -= drink.water;
    this.milk -= drink.milk;
    this.sugar -= drink.sugar;
  };
  this.getDrink = (name) => this.drinks.find((d) => d.name === name) || null;
}