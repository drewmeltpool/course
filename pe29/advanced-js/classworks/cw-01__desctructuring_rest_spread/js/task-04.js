/* ЗАДАЧА - 4
* Написать функцию, возвращаемым значением которой является объект простой кофемашины.
*
* Это задание для команд по 4 человека
*
* Функционал кофемашины:
* 1 - хранит запасы продуктов в свойствах - milk, sugar, water, coffee. запасы перевычисляются каждый раз после выдачи напитка.
* 2 - содержит метод getDrinkPrice(drinkName), где аргумнет drinkName содержит имя напитка, стоимость которого должен вернуть метод.
* 3 - содержит метод recalculateSupplies(drink), где аргумент drink содержит в себе объект напитка с "рецептом" его приготовления
* 4 - render метод, который появляет кофемашину на экране. тут должны происходить создание всех элементов, котрые появятся на странице
*
* на странице должны отображаться поле для ввода и кнопка ОК.
* после того как пользователь ввел имя напитка - нужно найти нужный напиток в списке рецептов кофемашины, понять хватит ли припасов.
* если припасов не хватит для пригоотовление - уведомить пользователя.
* если припасов хватат - через 2 секунды вывести на экран пользователю `Here is your drink ${drinkName}`.
* если такого напитка нет - показать сообщение о некорректном вводе и очистить инпут от значения.
*/
function coffeeMachine() {
  return {
    elements: {
      form: document.createElement('form'),
      input: document.createElement('input'),
      button: document.createElement('button'),
    },
    milk: 1000,
    sugar: 1000,
    water: 5000,
    coffee: 2000,
    recipes: [
      {
        name: "Latte",
        milk: 150,
        sugar: 20,
        water: 200,
        coffee: 50,
      },
      {
        name: "Decaf",
        milk: 0,
        sugar: 0,
        water: 300,
        coffee: 100,
      },
      {
        name: "Kill my sleep",
        milk: 0,
        sugar: 0,
        water: 50,
        coffee: 150,
      },
      {
        name: "No lactose latte",
        milk: 250,
        sugar: 0,
        water: 0,
        coffee: 50,
      }
    ],
    getDrinkPrice(drinkName) {

    },
    recalculateSupplies(drink) {
      let {milk, sugar, water, coffee} = drink;
      this.milk -= milk;
      this.sugar -= sugar;
      this.water -= water;
      this.coffee -= coffee;
    },
    findDrink(drinkName) {
      let {recipes} = this;
      return recipes.find(d => d.name === drinkName);
    },
    checkSupplies(recipe) {
      const {water, milk, sugar, coffee} = this;
      const {water:recWater, milk:recMilk, sugar:recSugar, coffee:recCoffee} = recipe;

      return water >= recWater && milk >= recMilk && sugar >= recSugar && coffee >= recCoffee;
    },
    workLogic(drinkName) {
      const drinkRecipe = this.findDrink(drinkName);

      if(!drinkRecipe) {
        alert("Bad name!");
        this.elements.input.value = '';
        return
      };

      if(this.checkSupplies(drinkRecipe)) {
        this.recalculateSupplies(drinkRecipe);
        alert(`Here is your drink - ${drinkRecipe.name}`);
      } else {
        alert("Not Enough supplies!")
      }
    },
    render() {
      let {input, button, form} = this.elements;

      form.append(input, button);

      button.addEventListener("click", (e) => {
        e.preventDefault();
        this.workLogic(input.value)
      });

      document.body.prepend(form)
    }
  }
}

const myCM = coffeeMachine();

myCM.render();
