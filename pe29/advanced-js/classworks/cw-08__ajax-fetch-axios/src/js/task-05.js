/* ЗАДАЧА-05
 * Ознакомиться с правилами использования по ссылке:
 * @link https://my-json-server.typicode.com/
 *
 * Разбиться на 3 группы. У каждой группы своя задача, в итоге код всех трех групп нужно будет собрать воедино и продемонстрировать рабочее приложение.
 *
 * Демо сервер:
 * @link https://my-json-server.typicode.com/yamnyk/demo/
 *
 * ГРУППА-1
 * Написать страницу с постами определенного пользователя. Файл страницы должен называться posts.html
 * Для этого нужно:
 *  - отправить запрос на демо-сервер для получения всех постов.
 *  - отфильтровать самостоятельно посты только нужного пользователя. За авторство отвечает свойство 'authorID'
 *  - показать все посты на экране
 *  - после клика на любой из постов:
 *     * в localStorage, в свойство `currentPost` записывается ID выбранного поста
 *
 * ID пользователя, посты которого нужно показать будет храниться в localStorage в свойстве `currentUser`(за это отвечает другая команда)
 *
 * ГРУППА-2
 * Написать страницу выбора пользователя. Она будет главной, с нее будет начинаться user story.
 *
 * Для этого нужно:
 *  - отправить запрос на демо-сервер для получения данных обо всех пользователях
 *  - вывести на экран имя, фамилию и телефон каждого пользовтеля
 *  - после клика по имени и фамилии:
 *     * в localStorage, в свойство `currentUser` записывается ID выбранного пользователя
 *     * переход на страницу posts.html (за ее создания отвечает другая группа)
 *
 * ГРУППА - 3
 *  - отправить запрос на демо-сервер для получения данных обо всех комментариях
 *  - отсеять из всех, только нужные. в каждом комментарии есть свойство "postID" - это ID поста к которому он прикреплен.
 *  - показать все отфильтрованные комментарии на экране
 *  - после клика по комментарию:
 *     * в localStorage, в свойство `currentUser` записывается ID автора выбранного комментария, оно находится в свойстве 'authorID' каждого комментария
 *     * переход на главную страницу
 * ID поста, комментарии которого нужно показать будет храниться в localStorage в свойстве `currentPost`(за это отвечает другая группа)
 * */
