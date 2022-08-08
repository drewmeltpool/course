const {CoffeeMachine, Drink, defaultDrinks} = require('../CoffeeMachine.js');
let data;

beforeAll(() => {
  const parentElement = document.createElement("div");
  const coffeeMachine = new CoffeeMachine("CM-001", parentElement);

  coffeeMachine.coffee = 200;
  coffeeMachine.milk = 200;
  coffeeMachine.sugar = 200;
  coffeeMachine.water = 200;


  data = {
    parentElement,
    CM: coffeeMachine
  };
});

afterEach(() => {
  const {CM} = data;

  CM.coffee = 200;
  CM.milk = 200;
  CM.sugar = 200;
  CM.water = 200;
});

test("CM was created", () => {
  const {CM, parentElement} = data;
  expect(data.CM).toBeDefined();
  expect(parentElement.children.length).toBe(0);

  CM.render();
  expect(parentElement.children.length).toBe(1);
});

describe("getDrink tests", () => {
  test('is valid drink name', () => {
    const {CM} = data;
    const latte = CM.getDrink('latte');
    expect(latte).toBeDefined();
    expect(latte).toMatchObject(defaultDrinks.find((d) => d.name === 'latte'));
  });

  test('is not valid name', () => {
    const {CM} = data;
    const tea = CM.getDrink('tea');
    expect(tea).toBeNull();
  });
});

describe('recalculating drinks' , () =>{
  test('valid drink', () =>{
    const {CM} = data;
    const blowMyMind = new Drink('blow my mind', 200, 50, 50 ,0);
    CM.recalcSupplies(blowMyMind);
    expect(CM.coffee).toBe(0);
    expect(CM.sugar).toBe(200);
    expect(CM.milk).toBe(150);
    expect(CM.water).toBe(150);
  });

  test('unknown drink', () =>{
    const {CM} = data;
    const something = new Drink ('unknown', null , NaN , false , "500");
    CM.recalcSupplies(something);
    expect(CM.coffee).toBe(200);
    expect(CM.water).toBe(200);
    expect(CM.milk).toBe(200);
    expect(CM.sugar).toBe(200);
  })
});

describe(" is enough supplies", () =>{
  test('enough supplies', () =>{
    const {CM} = data;
    const drink = new Drink('200Drink', 200, 200, 200, 200);
    expect(CM.isEnoughSupplies(drink)).toBeTruthy();
  });
  test('not enough supplies', () =>{
    const {CM} = data;
    const drink = new Drink('200Drink', 200, 400, 200, 200);
    expect(CM.isEnoughSupplies(drink)).toBeFalsy();
  });
});

describe("giveDrink test", () =>{
  test("valid drink case",() => {
    const {CM} = data;
    const blowMyMind = new Drink('blow my mind', 200, 50, 50 ,0);
    const error= CM.elements.error;
    error.textContent = "Biaka";
    CM.giveDrink(blowMyMind);
    expect(error.textContent).toHaveLength(0);
    expect(CM.coffee).toBe(0);
    expect(CM.sugar).toBe(200);
    expect(CM.milk).toBe(150);
    expect(CM.water).toBe(150);
  });

  test("Not valid case", () =>{
    const {CM} = data;
    const blowMyMind = new Drink('blow my ', 2000, 14550, 50 ,0);
    const error= CM.elements.error;
    CM.giveDrink(blowMyMind);
    expect(error.textContent).toBe("Not enough supplies!")
  })
});

