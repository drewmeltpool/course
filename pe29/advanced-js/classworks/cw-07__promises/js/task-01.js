/* ЗАДАЧА-01
* Написать функцию, которая выводит сообщение на экран.
*
* Аргументы:
* 1 - текст сообщения
* 2 - длительность задержки
*
* Возвращаемое значение: Promise, внутри котрого и вызывается отсрочка.
* */

let showMessage = function (text, delay) {
  return new Promise((resolve, reject) => {
    if (!text || !delay) {
      reject('No text found!');
      return;
    }

    setTimeout(() => {
      alert(text);
      resolve();
    }, delay)
  })
};

const msgPromise = showMessage("Camry 3.5!", 1000)
  .then(() => {
    document.write("suetolog ot boga")
  })
  .catch(e => {
    document.write(e)
  });

console.dir(msgPromise);
