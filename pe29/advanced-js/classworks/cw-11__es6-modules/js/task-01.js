/**
 * ЗАДАЧА - 01
 *
 * Написать модуль Component
 *
 * Из файла модуля экспортируется один класс - Component.
 *
 * Конструктор класса Component принимает в качестве аргумента объект с ДОМ элементами.
 * В этом объекте есть два обязательных свойства - parent и self,
 * которые ссылаются на родительский ДОМ элемент и на ДОМ элемент компонента соответственно.
 *
 * У каждого экземпляра класса Component должен быть метод render(),
 * в котором обязательно происходит процедура записи self в parent.
 *
 * */

import Component from "./Component.js";

class Pet extends Component{
  constructor(name, type, status, parent, classes) {
    const ELEMENTS = {
      parent,
      self: document.createElement('div'),
      name: document.createElement('h3'),
      type: document.createElement('p'),
    };
    super(ELEMENTS, classes);
    this.name = name;
    this.type = type;
    this.status = status;
  }

  render() {
    const {self, type, name} = this.elements;

    type.textContent = this.type;
    name.textContent = this.name;

    self.append(name, type);

    super.render();
  }
}

export function createComponent(){
  const elements={
    self: document.createElement("div"),
    parent: document.querySelector(".container")
  };

  const pet = new Pet("Bret", 'tasmanian devil', 404, document.querySelector('.container'));
  pet.render();

  const component = new Component(elements);
  component.render()
}

