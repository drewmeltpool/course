class LoginForm {
  constructor(parentEl) {
    this._ELEMENTS = {
      parent: parentEl,
      form: document.createElement('form'),
      input: document.createElement('input'),
      button: document.createElement('button'),
      error: document.createElement('span'),
    }
  }

  render() {
    const {parent, form, button, error, input} = this._ELEMENTS;

    form.classList.add("login");
    input.classList.add("login__field");
    button.classList.add("login__btn");
    error.classList.add("login__error");

    form.addEventListener("submit", e => this.handleSubmit(e));

    form.append(error, input, button);
    parent.append(form);
  }

  async handleSubmit(e) {
    const {parent, form, input, error} = this._ELEMENTS;
    e.preventDefault();
    const users = await fetch("https://ajax.test-danit.com/api/json/users").then(r => r.json());
    const found = users.find(u => u.username === input.value);

    if (!found) {
      error.textContent = "User not found!";
      return
    } else {
      error.textContent = "";
    }

    form.remove();
    const albumsList = new AlbumsList(found.id, parent);
    await albumsList.render()
  }
}