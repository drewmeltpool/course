// const numbers = new Randomizer({
//   items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
//   storageName: "numbers",
//   title: "Numbers randomizer",
//   parent: document.querySelector(".container"),
// });

const URL = 'https://script.google.com/macros/s/AKfycbz7W94Td9cs2yRfmoIwnGu6eSINlQuiT4EW6E2mC2hhIK-8PLAMbccU_7NLoeHzU7_m/exec';

const questions = new Randomizer({
  items: [
    "что такое реакт?",
    // "как разделить страницу на компоненты?",
    // "в чем основная фишка реакта?",
    "что такое virtual dom?",
    // "при помощи чего можно быстро инициализировать реакт проект?",
    "что такое JSX?",
    // "стоит ли когда либо выполнять скрипт eject? если да, то в каких случаях?",
    // "как стоит задавать JSX элементу класс?",
    // "поддерживает ли CRA синтаксис SCSS?",
    // "сколько оборотов вокруг солнца делает Земля за год?",
    "что такое state?",
    // "какую информацию о компонентах мы можем увидеть в ReactDevTools?",
    "что такое props?",
    "как передать props компоненту?",
    // "где в коде компонента мы можем использовать this.props?",
    // "что такое Fragment? чем его можно заменить?",
    "для чего нужно передатвать key каждому компоненту в массиве? когда это нужно делать?",
    // "нужно ли в каждом файле в реакт проекте прописывать импорт библиотеки react?",
    "сколько элементов мы можем вернуть из render-а любого компонета за один раз?",
    // "можно ли поменят состояние родительского компонента в дочернем?",
    "как изменить state родительского элемента в дочернем?",
    "какую проблему программиста решает redux?",
    "какие есть 3 способа переадресовать пользователя в react?",
    "назовите способы получить объекты history, location и match?",
    "без какого компонента не будет работать роутинг?",
    "что такое path variable? где и как ее нужно создавать?",
    "в какой тональности кашляет кашалот?",
    "для чего нужен компонент Provider библиотеки react-redux?",
    "можно ли создать store без использования вспомагательных функций?",
    "?",
    "?",
  ],
  storageName: "questions",
  title: "Questions randomizer",
  parent: document.querySelector(".container"),
});

fetch(`${URL}?size=11`)
  .then(r => r.text())
  .then(data => {
    const students = new Randomizer({
      items: data.split(','),
      storageName: "students",
      title: "Students randomizer",
      parent: document.querySelector(".container"),
    });
  })

