/* ЗАДАЧА-04
 * Добавить для каждого пользователя в json файле, свойство "address". Его значение - это цифра.
 * Цифра означает - индекс в массиве адресов.
 *
 * Задача в том, чтобы по нажатию на кнопку `get address` на экране - пользователь увидел полный адрес, вместо самой кнопки.
 *
 * Этапы выполнения:
 *  - получить данные о всех пользователях при помощи fetch запроса
 *  - отренерить всех пользователей на экране. у каждого пользователя помимо текстовых даннхы должна отображаться кнопка `get address` вместо информации об адресе проживания
 *  - по нажатию на кнопку - отправлять еще один fetch запрос и получив нужный адрес отображать его на странице вместо кнопки
 * */
fetch('users.json')
  .then(res => res.json())
  .then(users => {
    users.forEach(singleUser => {
      const userContainer = document.createElement('div');
      const addressBtn = document.createElement('button');

      userContainer.insertAdjacentHTML('afterbegin', `
          <p>${singleUser.name}</p>
          <p>${singleUser.age}</p>
          <p>${singleUser.gender}</p>
      `);

      addressBtn.textContent = 'get address';

      addressBtn.addEventListener('click', e => {
        fetch('addresses.json')
          .then(res => res.json())
          .then(allAddresses => {
            e.target.textContent = allAddresses[singleUser.address];
          })
      });

      userContainer.append(addressBtn);

      document.body.insertAdjacentElement('afterbegin', userContainer)
    })
  });
