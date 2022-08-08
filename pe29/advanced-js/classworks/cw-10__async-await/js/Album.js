class Album {
  constructor(albumObj, parent) {
    this.info = albumObj;
    this._ELEMENTS = {
      parent,
      self: document.createElement('div'),
      title: document.createElement('h3'),
      author: document.createElement('p'),
    }
  }

  async render() {
    const {parent, self, title, author} = this._ELEMENTS;
    const {title: titleText, userId} = this.info;

    self.classList.add("album");
    title.classList.add("album__title");
    author.classList.add("album__author");

    title.textContent = titleText;
    const user = await fetch(`https://ajax.test-danit.com/api/json/users/${userId}`).then(r => r.json());
    author.textContent = user.name;

    self.addEventListener("click", e => this.handleClick(e));

    self.append(title, author);
    parent.append(self);
  }

  handleClick(e) {
    const {parent} = this._ELEMENTS;
    parent.remove();

    const photoList = new PhotosList(this.info.id, document.querySelector('.container'));
    photoList.render();

  }
}