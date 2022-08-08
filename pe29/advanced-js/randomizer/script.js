// const numbers = new Randomizer({
//   items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   storageName: "numbers",
//   title: "Numbers randomizer",
//   parent: document.querySelector(".container"),
// });

const questions = new Randomizer({
  items: [
    // "что такое ДОМ?",
    // 'как текстовые html элементы связаны с объектами в ДОМ дереве?',
    // 'как отследить клик пользователя по кнопке "show more"?',
    // "в чем разница между childNodes и children?",
    // "какие свойства ДОМ-элемента отвечают за его текстовое сожержимое?",
    // 'как найти ближайший родительский ДОМ элемент подходящий под CSS селектор?',
    // "что такое event? где мы его берем? какая информация содержится в этом объекте?",
    // "что такое callback функция?",
    // "опишите принцип работы метода массива filter?",
    // "опишите разницу между принципом работы методов массива some и find?",
    // 'как найти в строке все слова "gogi" и посчитать их количество?',
    // 'есть ли в JS цикл, предназначеный для перебора массивов?',
    // 'как пройти к библиотеке?',
    // "что такое деструктуризация?",
    // "как деструктурировать свойства name, age из объекта с данными пользователя?",
    // "как при помощи деструктуризации записать в разные переменные первые три элемента массива?",
    // "что делать, если я пользуюсь деструктуриазцией, а такого свойства в объекте может не быть вовсе?",
    // 'можно ли поменять переменные в массиве местами при помощи деструктуризации?',
    // "в чем разница между spread и rest операторами?",
    // "как быстро сделать копию объекта в одну строку?",
    // "что будет, если мы объединим два объекта в один при помощи spread у которых есть пересекающиеся свойства?",
    // "как завоевать дракона?",
    // "что такое функция-конструктор?",
    // "что возвращает функция-конструктор?",
    // "чему будет равен this в функция-конструкторе?",
    // "что будет если вызвать функция-конструктор без оператора new?",
    // "в функция-конструкторе User есть метод, написанный стрелочной функцией, чему будет равен this в нем?",
    // "в чем разница между call и apply?",
    // "для чего нужен bind?",
    // "какой марки велосипед у почтальона Печкина?",
    // "что такое исключение? зачем нам они нужны?",
    "для чего нужен try catch?",
    "для чего нужен оператор throw?",
    // "за что отвечает блок try?",
    // "за что отвечает блок catch?",
    // "за что отвечает блок finally?",
    // "что такое замыкание?",
    // "что такое Lexical Environment (лексическое окружение)?",
    // "может ли лексическое окружение дочерней функци отличаться от родительской?",
    // "что такое прототипное наследование?",
    // "какого цвета грунт на темной стороне Луны?",
    "как добавить метод прототипа?",
    // "как в методе прототипа получить доступ к свойствам объекта?",
    "что такое класс?",
    // "что такое статическое свойство, статический метод?",
    // "чем отличается создание экземпляра класса, от экземпляра объекта при помощи функции-конструктора?",
    "что такое инкапсуляция?",
    "что такое полиморфизм?",
    "что такое наследование?",
    "что такое promise?",
    "что такое resolve и reject?",
    "изменится ли что-то, если resolve и reject назвать dada и nene?",
    // "чем отличается озеленитель от садовника?",
    "за что отвечает метод Promise-а then()?",
    "за что отвечает метод Promise-а catch()?",
    "за что отвечает метод Promise-а finally()?",
    "какие статусы есть у Promise-а?",
    // "в каком случае Promise-у удет присвоен статус 'rejected'?",
    // "в каком случае Promise-у удет присвоен статус 'fulfilled'?",
    // "в каком случае Promise-у удет присвоен статус 'pending'?",
    "что записывается в свойство Promise-а result?",
    "что такое AJAX?",
    "что такое fetch?",
    "что такое axios?",
    "кто победит - сборная верховной рады по воллеболу или стая диких голубей?",
    "как отправить запрос на сервер?",
    "что такое JSON?",
    "как трансформировать данные из ответа на запрос в JSON формат?",
    "что такое заголовки запроса/ответа? для чего они нужны?",
  ],
  storageName: "questions",
  title: "Questions randomizer",
  parent: document.querySelector(".container"),
});

const students = new Randomizer({
  items: [
    "Апенько Тарас",
    "Валигін Андрій",
    "Гідрєвіч Єлизавета",
    "Гукалов Віталій",
    "Дойчев Костянтин",
    "Дученко Тимур",
    "Ігнатова Інна",
    "Козир Дарья",
    "Молчанов Антон",
    "Ніконов Ігор",
    "Руль Юлія",
    "Рябушкін Владислав",
    "Сало Денис",
    "Степенко Ілля",
    "Сухецкий Максим",
    "Теплинський Павло",
    "Хмеленко Євгеній",
    "Седюк Олександр",
    "Кандиба Владислава",
    "Руда Єлизавета",
    "Лариса Кутыркина",
    "Панасюк Таня",
    "Ольга Матушевич",
  ],
  storageName: "students",
  title: "Students randomizer",
  parent: document.querySelector(".container"),
});
