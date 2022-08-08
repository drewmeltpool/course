/* ЗАДАЧА 3
* Создать гибкую логин форму при помощи функции конструктора
* Аргументы:
*  1 - CSS селектор для поиска родительского элемента для формы
*  2 - объект с настройками для формы. пока что будет содержать только две настройки:
*       - функция валидации логина
*       - функция валидации пароля
*
* Функицонал
*  создаваться форма должна следующим образом
*  new LoginForm('.gogi', {
*   validateLogin: (value) => value,
*   validatePass: (value) => value
*  })
*
* После выполнения этой строки кода на странице внутри указанного селектором элемента должна появится форма
* внутри формы - текстовый инпут для логина, инпут с типом пароль, кнопка сабмит.
* При изменении текстового инпута должна работать функция валидаци логина,
* при изменении инпута с паролем должна работать функция валидаци пароля.
* При непрохождении валидации над инпутом должо показываться сообщение "not valid"
*/
const defaultValidation = () => true;

function LoginForm(selector, {
  validateLogin = defaultValidation,
  validatePass = defaultValidation
}) {
  this.parent = document.querySelector(selector);
  this.elements = {
    form: document.createElement('form'),
    login: document.createElement('input'),
    password: document.createElement('input'),
    submit: document.createElement('button'),
    error: document.createElement('span')
  };
  this.validateLogin = validateLogin;
  this.validatePass = validatePass;

  this.addStyles = function () {
    const {form, login, password, submit, error} = this.elements;
    form.classList.add('login-form');
    login.classList.add('login-form__input');
    password.classList.add('login-form__input');
    submit.classList.add('login-form__btn');
    error.classList.add('login-form__error');
  };

  this.handleInputChange = function (event) {
    const {error} = this.elements;

    switch (event.target.type) {
      case 'text':
        if (this.validateLogin(event.target.value)) {
          error.remove();
        } else {
          event.target.insertAdjacentElement('beforebegin', error);
        };
        break;
      case 'password':
        if (this.validatePass(event.target.value)) {
          error.remove();
        } else {
          event.target.insertAdjacentElement('beforebegin', error);
        };
        break;
    }
  };

  this.render = () => {
    const {parent} = this;
    const {form, login, password, submit, error} = this.elements;

    login.type = 'text';
    password.type = 'password';
    submit.type = 'submit';

    login.placeholder = 'login';
    password.placeholder = 'password';
    submit.textContent = 'sign in';
    error.textContent = 'not valid';

    this.addStyles();

    login.addEventListener('change', (e) => this.handleInputChange(e));
    password.addEventListener('change', (e) => this.handleInputChange(e));

    form.append(login, password, submit);

    parent.append(form);
  }
}

const myForm = new LoginForm('.form-wrapper', {
  validateLogin: (value) => value.length > 3,
  validatePass: (value) => value.length >= 8
});
myForm.render();
const myForm1 = new LoginForm('.form-wrapper', {
  validateLogin: (value) => value.length > 4,
  validatePass: (value) => value.length >= 2
});
myForm1.render();