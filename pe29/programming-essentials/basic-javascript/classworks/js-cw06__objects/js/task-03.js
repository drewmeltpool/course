/* ЗАДАНИЕ - 3
* Добавить к предыдущему заданию функционал.
* В возвращаемом объекте должен появиться еще один метод - addField(). Он будет добавлять свойства в объект.
* Т.е. внутри объекта будет еще одно свойство\ключ\поле, значением которого будет являться функция.
* Эта функция принимает два аргумента:
*   1 - имя свойства, которое будет создаваться
*   2 - значение. которое туда должно быть записано
* */

const createUser = function (userName, userAge) {
  return {
    name: userName,
    age: userAge,
    increaseAge() {
      this.age++
    },
    addField(fieldName, fieldValue) {
      this[fieldName] = fieldValue;
    }
  };
};


const user = createUser('Gogi-0', 50);

user.increaseAge();
user.addField('pets', null);
console.log(user);