/* ЗАДАЧА-02
 * Дополнить функционал предыдущей задачи.
 * Показать на странцие 2 поля для ввода и кнопку 'Ok'.
 * В первое бользователь должен ввести сообщение, в второе - отсрочку в миллисекундах, через сколько сообщение нужно показать.
 *
 * Принцип работа остается то же, но срабатывать функция показа сообщения должна по клику на кнопку 'Ok'.
 * */
class ShowMessage {
  constructor(parent) {
    this._ELEMENTS = {
      msg: document.createElement("input"),
      delay: document.createElement("input"),
      okBtn: document.createElement("button")
    };
    this.parent = parent;
  }

  handleResetInputs() {
    const {
      msg,
      delay
    } = this._ELEMENTS;
    msg.value = '';
    delay.value = '';
  }

  handleOkClick(e) {
    const {
      msg,
      delay
    } = this._ELEMENTS;

    showMessage(msg.value, delay.value).then(() => this.handleResetInputs())
  }

  render() {
    const {
      msg,
      delay,
      okBtn
    } = this._ELEMENTS;
    const {parent} = this;

    msg.placeholder = " Enter your message";
    delay.placeholder = " Enter the delay";
    okBtn.textContent = "OK";

    okBtn.addEventListener("click", e => this.handleOkClick(e));

    parent.append(msg, delay, okBtn);
  }
}

const showMessage1 = new ShowMessage(document.querySelector('.container'));
showMessage1.render();

// const elements = {
//   message: document.createElement("input"),
//   time: document.createElement("input"),
//   confirmation: document.createElement("button")
// };
//
// const {message, time, confirmation} = elements;
//
// message.placeholder = " Enter your message";
// time.placeholder = " Enter the delay";
// confirmation.textContent = "OK";
// confirmation.addEventListener("click", event => {
//   const msgPromise = showMessage(message.value, time.value);
//
//   msgPromise
//     .then(() => {
//       message.value = '';
//       time.value = '';
//     })
//     .catch(e => console.error(e))
// });
//
// document.body.append(message, time, confirmation);

function showMessage(message, delay) {
  return new Promise((resolve, reject) => {

    if (!message || !delay) {
      reject(new Error("One of the arguments is not defined"));
      return;
    }

    setTimeout(() => {
      console.log(message);
      resolve("OK")
    }, delay)
  })
}






