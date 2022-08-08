/* ЗАДАЧА - 3
* У нас есть массив участников конкурса (в качестве него может выступать массив clickedLeads из прошлой задачи). По результатам конкурса выиграли только первые четыре участника из массива.
* НАПИСАТЬ ФУНКЦИЮ, которая принимает аргументом массив участников,
* после ее вызова на экране должны появиться только победители и перед списком победителей заголовок - WINNERS
* имена остальных участников на странице должны появиться после заголовка LOSERS.
*/

let fbLeeds = [{name: 'John', age: 23}, {name: 'Mia', age: 18}, {name: 'Leo', age: 70}, {name: 'Ed', age: 30}];

let googleLeeds = [{name: 'Kiki', age: 27}, {name: 'Otto', age: 20}, {name: 'Ivan', age: 31}, {name: 'Bobbi', age: 30}];

const allUsers = [...fbLeeds, ...googleLeeds];

const userStr = (user) => (`
  <div>
    <h3>${user.name}</h3>
    <p>${user.age}</p>
  </div>
  `);

function castPeople(people) {
  const [winner, winner1, winner2, winner3, ...looooseeeers] = people;

  document.body.insertAdjacentHTML("afterbegin",userStr(winner3));
  document.body.insertAdjacentHTML("afterbegin",userStr(winner2));
  document.body.insertAdjacentHTML("afterbegin",userStr(winner1));
  document.body.insertAdjacentHTML("afterbegin",userStr(winner));

  document.body.insertAdjacentHTML("afterbegin","<h2>LOOOSSEEERRSS</h2>");
  looooseeeers.forEach(user => {
    document.body.insertAdjacentHTML("afterbegin",userStr(user))
  });
  document.body.insertAdjacentHTML("afterbegin","<h2>WINNERS!</h2>");
}

castPeople(allUsers);



