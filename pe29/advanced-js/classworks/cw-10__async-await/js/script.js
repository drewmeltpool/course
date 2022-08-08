/**
 * @link - https://ajax.test-danit.com/api/json/albums/1/photos - все фото из альбома с id = 1
 * @link - https://ajax.test-danit.com/api/json/users/1/albums - все альбомы пользователя с id = 1
 * @link - https://ajax.test-danit.com/api/json/users - все пользователи
 */

const login = new LoginForm(document.querySelector('.container'));

login.render();

// const getSomething = () => fetch("someURL")
// .then(res => res.json())
// .then(data => {
//   console.log(data);
// });
// getSomething();
// console.log("gogi");
//
// const getSomething2 = async () => {
//   const res = await fetch("someURL");
//   console.log(res);
//   const data = await res.json();
//   console.log(data);
// };
//
// getSomething2();
// console.log("gogi");
