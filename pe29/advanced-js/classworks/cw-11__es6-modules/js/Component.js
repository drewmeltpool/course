export default class Component {
  constructor(DOMElements, classes={}) {
    if (DOMElements.hasOwnProperty("self") && DOMElements.hasOwnProperty("parent")) {
      this.elements = DOMElements;
      this.classes = classes;
    } else {
      throw new Error("No required properties ")
    }
  }

  render() {
    const {self, parent} = this.elements;

    for (let prop in this.elements) {
      const element = this.elements[prop];
      const classesForElement = this.classes[prop];

      element.classList.add(classesForElement)
      // this.elements[prop].classList.add(this.classes[prop])
    }

    parent.append(self)
  }
}