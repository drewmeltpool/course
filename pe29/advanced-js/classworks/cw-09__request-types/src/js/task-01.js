/* ЗАДАЧА 1
 * Изучить документацию сервера по адресу:
 * @link - https://ajax.test-danit.com/api-pages/jsonplaceholder.html
 *
 * Отправить GET запрос на сервер для получения всех пользователей.
 *
 * Преобразовать данные ответа в JavaScript объекты карточек пользователей.
 *
 * Разместить на странице карточки пользователей, которые будут содержать следующую информацию:
 *  - имя пользователя
 *  - никнейм
 *  - эл.почта
 *  - телефон
 *  - сайт
 *  - кнопка "See posts"
 * */

class User {
  constructor(name, userName, email, tel, website, parentElement) {
    this.name = name;
    this.userName = userName;
    this.email = email;
    this.tel = tel;
    this.website = website;
    this.elements = {
      parent: parentElement,
      container: document.createElement('div'),
      name: document.createElement('p'),
      userName: document.createElement('p'),
      email: document.createElement('p'),
      tel: document.createElement('p'),
      website: document.createElement('p'),
      btn: document.createElement('button')
    }
  }

  handleClick() {
    console.log(`you just clicked ${this.name}`);
  }

  render() {
    const {parent, container, name, userName, email, tel, website, btn} = this.elements;

    name.textContent = this.name;
    userName.textContent = this.userName;
    email.textContent = this.email;
    tel.textContent = this.tel;
    website.textContent = this.website;
    btn.textContent = 'See posts';

    container.classList.add("user");
    name.classList.add("user__title");
    userName.classList.add("user__subtitle");
    email.classList.add("user__subtitle");
    tel.classList.add("user__subtitle");
    website.classList.add("user__link");
    btn.classList.add("user__btn");

    btn.addEventListener("click", () => this.handleClick());

    container.append(name, userName, email, tel, website, btn);

    parent.append(container);
  }
}

const url = 'https://ajax.test-danit.com/api/json/users';

fetch(url)
  .then(res => res.json())
  .then(data => {
    data.forEach(user => {
      let item = new User(user.name, user.username, user.email, user.phone, user.website, document.querySelector('.container'));
      item.render();
    });
  });

