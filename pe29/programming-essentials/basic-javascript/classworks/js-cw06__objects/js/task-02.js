/* ЗАДАНИЕ - 2
* Добавить к предыдущему заданию функционал.
* В возвращаемом объекте должен быть метод, который увеличивает возраст на 1.
* Т.е. внутри объекта будет свойство\ключ\поле, значением которого будет являться функция,
* которая увеличивает свойство\ключ\поле age ЭТОГО объекта на 1
* */

const createUser = function (userName, userAge) {
  let newObject = {
    name: userName,
    age: userAge,
  };

  newObject.increaseAge = function () {
    this.age++;
  };

  return newObject;
};

const user = createUser('Gogi-0', 50);

console.log(user.increaseAge());