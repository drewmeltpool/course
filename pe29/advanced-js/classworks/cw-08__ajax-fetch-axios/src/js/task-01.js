/* ЗАДАЧА-01
 * Написать json файл, который будет сожержать любое количество обнотипных объектов пользователей.
 * При помощи XMLHttpRequest получить эти данные из файла.
 * */

// const url = 'users.json';
//
// const request = new XMLHttpRequest();
//
// request.open('GET', url);
//
// request.onload = function(e) {
//   if (e.target.status === 200) {
//     const result = JSON.parse(e.target.response);
//     console.log(result);
//   }
// };
//
// request.send();
//
// fetch(url)
//   .then(res => res.json())
//   .then(data => {
//     console.log(data)
//   })
//   .catch(e => console.error(e));


// function myFetch(url) {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.open('GET', url);
//
//     request.onload = function (e) {
//       if (e.target.status === 200) {
//         resolve(JSON.parse(e.target.response))
//       } else {
//         reject(e.target.statusText);
//       }
//     };
//
//     request.send();
//   })
// }
//
// myFetch('users.json')
//   .then(data => {
//     console.log('my fetch ',data)
//   })