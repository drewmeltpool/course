const defaultClasses = {
  container: "randomizer",
  start: ["randomizer__btn", "randomizer__btn--start"],
  reset: ["randomizer__btn", "randomizer__btn--reset"],
  title: "randomizer__title",
};

function Randomizer({
  items,
  storageName = "items",
  title,
  parent = document.body,
  audioURL = "./Sound_06308.mp3",
  classes = {},
}) {
  this.elements = {
    start: document.createElement("button"),
    reset: document.createElement("button"),
    title: document.createElement("h3"),
    container: document.createElement("div"),
  };
  this.classes = { ...defaultClasses, ...classes };
  this.audio = new Audio(audioURL);
  this.parent = parent;
  this.titleText = title;
  this.storageName = storageName;
  this.items = JSON.parse(localStorage.getItem(this.storageName)) || items;
  this.wasSelected =
    JSON.parse(localStorage.getItem(`selected_${this.storageName}`)) || [];

  this.render();
}

Randomizer.prototype.start = function () {
  let {
    storageName,
    items,
    wasSelected,
    elements: { title },
  } = this;

  if (items.length > 0) {
    wasSelected.push(
      items.splice(
        Math.floor(Math.round(Math.random() * items.length - 1)),
        1
      )[0]
    );
    items = items.sort(() => Math.random() - 0.5);
    title.textContent = wasSelected[wasSelected.length - 1];
  } else {
    this.items = wasSelected.sort((el) => Math.random() - 0.5);
    this.wasSelected = [];
    this.fillTheStore(items, wasSelected);
    title.textContent = "Randomiser is reloading...Press button one more time.";
  }

  this.fillTheStore(items, wasSelected);
};

Randomizer.prototype.fillTheStore = function (items, wasSelected) {
  localStorage.setItem(
    `selected_${this.storageName}`,
    JSON.stringify(wasSelected)
  );
  localStorage.setItem(this.storageName, JSON.stringify(items));
};

Randomizer.prototype.handleReset = function () {
  const { storageName, titleText } = this;
  const { title } = this.elements;
  localStorage.removeItem(storageName);
  localStorage.removeItem(`selected_${storageName}`);
  title.textContent = titleText;
};

Randomizer.prototype.handleStartClick = function () {
  const { audio } = this;

  audio.play();
  audio.onended = () => {
    this.start();
    audio.onended = null;
  };
};

Randomizer.prototype.render = function () {
  const {
    elements: { start, reset, title, container },
    parent,
    titleText,
  } = this;
  const {
    container: classContainer,
    title: classTitle,
    reset: classReset,
    start: classStart,
  } = this.classes;

  title.textContent = titleText;
  start.textContent = "start";
  reset.textContent = "reset";

  container.classList.add(classContainer);
  title.classList.add(classTitle);
  start.classList.add(...classStart);
  reset.classList.add(...classReset);

  this.elements.start.addEventListener("click", () => this.handleStartClick());
  this.elements.reset.addEventListener("click", () => this.handleReset());

  container.append(title, start, reset);
  parent.insertAdjacentElement("beforeend", container);
};
