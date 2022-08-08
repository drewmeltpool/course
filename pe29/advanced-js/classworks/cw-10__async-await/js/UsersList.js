const url = 'https://ajax.test-danit.com/api/json/users';

class UsersList {
  constructor(parentElement) {
    this.parent = parentElement;
    this.self = document.createElement('div');
    this.shuffleBtn = document.createElement("button");
    this.sortByNameBtn = document.createElement('button');
  }

  reshuffleByName() {
    const {allUsers, self} = this;
    allUsers.sort((firstEl, secondEl) => {
      if (firstEl.name < secondEl.name) {
        return -1;
      } else if (firstEl.name > secondEl.name) {
        return 1;
      } else {
        return 0;
      }
    });
    self.innerHTML = '';
    this.renderAllUsers();
  }

  async render() {
    const {self, parent, shuffleBtn, sortByNameBtn} = this;
    this.allUsers = await this.getUsers();

    self.classList.add("users-list");

    shuffleBtn.innerText = "Shuffle all users";
    sortByNameBtn.innerText = "Sort by name";

    shuffleBtn.addEventListener("click", async () => {
      //show preloader gif
      await this.makeShuffle();
      //hide preloader gif
    });
    sortByNameBtn.addEventListener('click', () => this.reshuffleByName());

    this.renderAllUsers();

    parent.append(shuffleBtn, sortByNameBtn, self);
  };

  renderAllUsers() {
    const {self} = this;
    this.allUsers.forEach(u => {
      let item = new User(u.name, u.username, u.email, u.phone, u.website, self);
      item.render();
    });
  }

  async getUsers() {
    const res = await fetch(url);
    return res.json();
  };

  async makeShuffle() {
    this.allUsers.sort(() => Math.random() - 0.5);
    this.self.innerHTML = "";
    this.renderAllUsers();
  }
}

