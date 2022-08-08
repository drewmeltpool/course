// import {createComponent} from "./task-01.js"
// import solution from "./task-02.js";
import * as Utils from './Utils.js'

console.log(Utils.randomColor());
console.log(Utils.counter());
console.log(Utils.getRandomInt(0,-88));

// solution();
// createComponent();


// import User, {counter} from "./User.js";
// import LoginForm from "./LoginForm.js";
//
// const user = new User();
// console.log(user);
//
// const login = new LoginForm(document.querySelector('.container'));
// login.render();
//
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

/** ЗАДАЧА
 * Написать класс Advertisement - это объявление, которое выступает в нашем случае в роли товара
 * Экземпляры этого класса должны иметь следующие свойства:
 *  - id
 *  - title
 *  - about
 *  - price
 *  - isCompany
 *  - photos - массив фотографий
 * Методы:
 *  - render() - отвечает за вывод на экран
 *
 * Создать класс AdvertisementList
 * Экземпляры этого класса должны иметь следующие свойства:
 *  - items - массив объявлений, которые будут сожержаться в этом списке
 *  - title - название списка
 *  - totalPrice - вычисляемое свойство - сумма всех цен со всех объявлений
 * Методы:
 *  - render() - отвечает за вывод на экран
 *  - add(adv) - отвечает за добавление нового объявления в список. после добавления - должен вызвать метод render добавленного объявления, чтобы оно появилось на экране.
 *  - delete(advID) - удаляет переданное в качестве аргумента объявление из списка
 *
 * Все модули должны быть импортированы в файл script.js и там:
 *  - создать 2 списка объявлений, в каждом из котрых минимум по 4 объявления
 *  - в списках на экране обязательно должна быть отображена общая цена
 *  - добавить новую карточку в любой из двух списков
 *  - удалить одну карточку из любого списка
 */
