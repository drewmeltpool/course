/* ЗАДАЧА 2
 * К коду предыдущего задания добавить возможность создать пользователя.
 *
 * Добавить кнопку "New user" в верхнем правом углу. По нажатию на нее:
 *  - показать для заполнения форму создания нового пользователя
 *  - после нажатия кнопки "Save" в форме должен отправляться POST запрос на сервер для создания пользователя.
 *  - с сервера вернутся в качестве ответа новый объект со всеми данными из формы И ID
 *  - форма должна пропасть после успешного ответа
 *  - затем на экране должна появиться карточка нового пользователя
 */
class NewUserForm {
  constructor(parentElement) {
    this.parent = parentElement;
    this.wrapper = document.createElement('div');
    this.form = document.createElement('form');
    this.name = document.createElement('input');
    this.userName = document.createElement('input');
    this.email = document.createElement('input');
    this.tel = document.createElement('input');
    this.website = document.createElement('input');
    this.save = document.createElement('button');
  }

  handleSubmit(e) {
    e.preventDefault();
    const { wrapper, name, userName, email, tel, website} = this;

    fetch("https://ajax.test-danit.com/api/json/users", {
      method: "POST",
      body: JSON.stringify({
        name: name.value,
        username: userName.value,
        email: email.value,
        phone: tel.value,
        website: website.value,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(resp => resp.json())
      .then(data => {
        wrapper.remove();
        const newUser = new User(data.name, data.username, data.email, data.phone, data.website, document.querySelector('.container'));
        newUser.render();
      })
  }

  handleClose({target, currentTarget}) {
    if (currentTarget === target && target.classList.contains("modal")) {
      target.remove();
    }
  }

  render() {
    const {wrapper, form, name, userName, email, tel, website, parent, save} = this;

    wrapper.classList.add('modal');
    wrapper.style.position = "fixed";
    wrapper.style.top = "0";
    wrapper.style.left = "0";
    wrapper.style.right = "0";
    wrapper.style.bottom = "0";
    wrapper.style.display = "flex";
    wrapper.style.justifyContent = "center";
    wrapper.style.alignContent = "center";
    wrapper.style.backgroundColor = "rgba(0,0,0,0.5)";

    save.textContent = "SAVE!";

    save.addEventListener("click", e => this.handleSubmit(e));
    wrapper.addEventListener("click", e => this.handleClose(e));

    form.append(name, userName, email, tel, website, save);
    wrapper.append(form);
    parent.append(wrapper);
  }
}


const newUserBtn = document.getElementById("createUser");

newUserBtn.addEventListener("click", () => {
  const gogi = new NewUserForm(document.body);
  gogi.render();
});












