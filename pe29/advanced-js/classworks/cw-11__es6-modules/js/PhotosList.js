export default class PhotosList {
  constructor(albumID, parent) {
    this.albumID = albumID;
    this._ELEMENTS = {
      parent,
      self: document.createElement('div')
    }
  }

  async getAllPhotos() {
    const allPhotos = await fetch(`https://ajax.test-danit.com/api/json/albums/${this.albumID}/photos`);

    return allPhotos.json();
  }

  async render() {
    const {parent, self} = this._ELEMENTS;

    self.classList.add("photos");

    const allPhotos = await this.getAllPhotos();
    allPhotos.forEach(photo => {
      self.insertAdjacentHTML('beforeend', `<div class="album-photo">
    <img src=${photo.url} alt="some picture" class="album-photo__img">
    <p class="album-photo__title">${photo.title}</p>
  </div>`)
    });
    
    parent.append(self);
  }
}