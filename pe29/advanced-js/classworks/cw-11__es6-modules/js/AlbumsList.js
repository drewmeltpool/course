import Album from "./Album.js";

export default class AlbumsList {
  constructor(userID, parentEl) {
    this.userID = userID;
    this._ELEMENTS = {
      parent: parentEl,
      self: document.createElement('div')
    }
  }

  async getAlbums() {
    this.albums = await fetch(`https://ajax.test-danit.com/api/json/users/${this.userID}/albums`).then(r => r.json());

    return this.albums;
  }

  async render() {
    const {parent, self} = this._ELEMENTS;

    const albums = await this.getAlbums();

    self.classList.add("albums");

    albums.forEach(al => {
      const album = new Album(al, self);
      album.render();
    });

    parent.append(self);
  }
}