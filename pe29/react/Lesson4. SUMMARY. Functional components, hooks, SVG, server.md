## Функциональные компоненты, хуки, работа с сервером, SVG

### Функциональные компоненты и хуки

Во многих проектах на практике используются классовые компоненты, поэтому с ними надо уметь работать и знать какие у них есть особенности. Но сейчас разработчики библиотеки Реакт советуют во всех новых проектах использовать функциональные компоненты и хуки, поэтому на всех дальнейших занятий мы будем работать именно с ними.
   
Функциональный компонент - это просто функция. Она будет содержать тело метода `render()` из классового компонента.
   
Чтобы изменить классовый компонент на функциональный, нам надо выполнить несколько простых шагов:
 - Переименовать класс в функцию
 - Удалить сигнатуру метода `render()`, оставить только его тело
 - Переписать методы жизненного цикла с использованием хуков
 - Если у нас были объявлены другие собственные методы, объявить их внутри нашей функции в качестве констант до ключевого слова `return`
 - Проследить чтобы нигде не было использования `this`. Свойства компонента (props) мы получаем из первого параметра функции
   
Функциональный компонент может быть объявлен с помощью синтаксиса ES5 или ES6:
 - `function Button (props) { ... }`
 - `const Button = (props) => { ... }`
   
И тот и тот вариант будет работать одинаково. Желательно выбрать один подход и использовать его везде в проекте.
   
Теперь все компоненты в проекте можно переписать на функциональные. Единственное исключение - компонент `ErrorBoundary`. В функциональных компонентах пока что нет возможности реализовать функции `componentDidCatch()` и `static getDerivedStateFromError()`, поэтому он останется единственным классовым компоненом в нашем проекте. В будущих версиях библиотеки Реакт разработчики обещают добавить хуки, чтобы покрыть и этот функционал.
   
Чтобы создать новый функциональный компонент, мы можем использовать короткую команду `rfc` в IDE - по аналогии с `rcc` для классового компонента.

### Хук useState

Любой хук в React - это просто функция. Некоторые функции выполняют определенные действия, некоторые функции еще что-то возвращают.
   
Для того, чтобы заменить использование состояния компонента в классах, используется хук `useState`. Его сигнатура:
   
```js
const [valueFromState, setterFunction] = useState(initialValue);
```
   
Если у нас в состоянии компонента было несколько свойств, для каждого из них надо использовать отдельный хук `useState`:
   
```js
const [currentUser, setCurrentUser] = useState(null);
const [emails, setEmails] = useState([]);
```

Переменные в массиве мы можем называть как угодно. Но существует соглашение, что функцию для изменения определенного свойства в состоянии называют как функцию-сеттер - с приставкой `set...`.
   
### Хук useEffect
   
Для того, чтобы заменить код из методов жизненного цикла компонента, таких как `componentDidMount()`, `componentDidUpdate()` и `componentWillUnmount()`, мы используем хук `useEffect`. Функция `useEffect`, в отличие от `useState`, ничего не возвращает, поэтому сигнатура у нее другая. В общей сложности, использование хука выглядит так:
   
```js
useEffect(() => {
  // код, который выполняется при каждом рендере
  // заменяет функции componentDidMount и componentDidUpdate
     
  return () => {
    // эта функция будет выполнена перед размонтированием компонента
    // заменяет метод componentWillUnmount
  }
})
```
   
Преимущество хука `useEffect` по сравнению с классовым компонентом в том, что мы можем весь код, связанный с каким-то "эффектом", держать в одном месте. Раньше этот код часто приходилось разбивать между функциями `componentDidMount`, `componentDidUpdate` и `componentWillUnmount`. Более того, внутри каждой из этих функций (например `componentDidMount`) может быть намешано много логики, не связанной между собой. Теперь мы можем держать всю бизнес-логику какого-то действия в одном месте.
   
Чтобы не выполнять код внутри `useEffect` при каждом рендере компонента, мы можем передать в функцию второй параметр - массив зависимостей. Если такой массив был передан, то при перерендере компонента `useEffect` будет выполнен, только если хотя бы одна переменная в списке зависимостей была обновлена.
   
Если передать пустой массив - то код в хуке будет вызван всего один раз при первом рендере компонента, то есть это по сути это будет аналог функции `componentDidMount`.
   
В одном компоненте может использоваться несколько хуков `useEffect`. Мы разделяем их по принципу единой ответственности - каждый должен выполнять только код какого-то своего "эффекта". Например, если нам при запуске компонента надо получить какие-то данные с сервера, а также установить глобальный eventListener на весь документ, то эти действия надо выполнять в двух разных эффектах, чтобы в коде они были независимы друг от друга.
   
### Работа с картинками и SVG файлами

Чтобы отобразить картинку или SVG файл, мы можем разместить их где-нибудь в проекте (например, в папке `theme/images` или `theme/icons`), а потом импортировать ссылку на них в любом компоненте. 

```js
import star from '../../theme/icons/star.svg';
```
   
Если переменную `star` сейчас вывести на экран, мы увидим что там хранится путь вроде `/static/media/star.699bacsfv.svg`. Это путь на сервере, по которому после сборки вебпаком будет лежать наша иконка. Если мы введем в адресной строке браузера `http://localhost:port/static/media/star...`, то сможем получить нашу иконку с сервера.
   
Чтобы показать на экране именно картинку, этот адрес надо вставить в `src` тега `img`:

```jsx
<img src={icon} alt='star-icon' />
```
   
Таким образом мы можем вывести на экран любую картинку, которая лежит у нас в проекте где угодно в папке `src`.

Иконка выведется на экран, но сам код SVG не будет добавлен в DOM дерево.

### Передача параметров в SVG

Чтобы иметь возможность передавать параметры в SVG код, мы можем:
 - прописать код SVG прямо в компоненте, где его надо использовать
 - вынести код SVG в отдельную функцию, которую мы сможем использовать в любом компоненте. Эту функцию желательно вынести в отдельный JS/JSX файл. Фунция может принимать различные значения, например, цвета иконки - так мы можем использовать ее в проекте много раз

Параметры для SVG файла могут быть указаны как с помощью Javascript (передача аргументов в функцию и использование их в SVG коде), так и с помощью CSS.

Чтобы иметь возможность манипулировать параметрами SVG из CSS, нам нужно присвоить какой-нибудь класс с помощью свойства `className` нужному элементу SVG. Далее, обратившись по этому классу в CSS/SCSS коде, мы можем манипулировать свойствами `fill` (внутренняя заливка) и `stroke` (внешний контур) элемента SVG, который мы стилизуем.

### Объединение иконок в пул

Чтобы объединить несколько иконок в общий пул, мы можем создать файл `index.js` в папке, где лежат все иконки, и из него переэкспортировать их все с помощью конструкции `export ... from ...`:

```js
export { star } from './star.jsx';
export { globe } from './globe.jsx';
...
```

Теперь мы можем вызывать нужную иконку следующим образом:

```jsx harmony
import * as Icons from '../../theme/icons';

...

{Icons.star('gold', true)}
{Icons.globe()}
```
   
Чтобы сделать иконки еще более унверсальными, мы можем создать компонент `Icon`, который будет инкапсулировать всю логику создания иконок. Тогда, при использовании иконок, вместо вызова функции внутри JSX кода, мы будем рендерить обычный компонент, что более читабельно.
   
Мы можем передавать любые параметры в этот компонент, например:
   
```jsx harmony
<Icon type='star' color='gold' filled={true} />
```

### Конфигурируемый размер иконок
   
По умолчанию все SVG иконки принимают тот размер, который указан прямо в SVG коде, а если он не указан, то они подстраиваются под ширину родительского контейнера.
   
Чтобы иметь возможность использовать одну и ту же иконку в разных размерах, мы можем удалить свойства width и height в каждой из иконок из SVG кода, и в компоненте `Icon` обернуть все иконки в один общий родительский контейнер, размер которого можно будет контролировать с помощью CSS кода.
   
Это позволит использовать одну и ту же иконку в разных местах приложения с разным размером - просто передав нужный класс.

### Создание простого сервера на express
   
Чтобы создать простой севрер на NodeJS с помощью фреймворка `express`, надо выполнить следующие действия:
 - создать папку, например, `server`
 - зайдя в новую папку в терминале, выполнить там команду `npm init`, а потом `npm i express`
 - создать файл `index.js` со следующим содержимым:
   
```js
const express = require('express');
   
const app = express();
   
const port = process.env.PORT || 8085; // порт по умолчанию можно указать любой
   
const emails = [...] // здесь будет массив объектов, который мы хотим раздавать с сервера
   
app.get('/api/emails', (req, res) => { // при запросе по адресу '/api/emails' - отправляем назад все имейлы
  res.send(emails);
})
   
app.get('/api/emails/:emailId', (req, res) => { // при запросе по адресу, который содержит айди имейла - отправляем назад один имейл
  const { emailId } = req.params;
   
  res.send(emails.find(email => email.id === +emailId));
})
   
app.listen(port, () => { // запускаем сервер на указанному порту
  console.log(`Server listening on port ${port}`);
})
```
   
### Получение данных на фронт-енде. Proxy

Если в адресную строку браузера ввести `http://localhost:8085/api/emails` - мы увидим, что все работает, мы видим JSON с ответом.
   
Если же мы попробуем достучаться о этого адреса на фронт-енде в файле App.js (`axios.get('http://localhost:8085/api/emails').then(console.log);`), то вместо списка имейлов в консоли мы увидим ошибку CORS. Это специальное ограничение безопасности браузеров. Если мы будем запрашивать любые данные с сервера, который находится по другому адресу, чем наша `index.html` страница (или который запущен на другом порту), браузер выдаст ошибку CORS, и не даст нам доступ к ответу.

Многие инструкции в интернете советуют добавить модуль `cors` в NodeJS для исправления этой ошибки. В нашем случае это категорически неправильно и может нарушить безопасность приложения.

Чтобы исправить ошибку, нам надо настроить на клиенте Proxy (в `package.json` или `setupProxy.js`), чтобы мы могли в дев режиме нормально работать с двумя запущенными серверами - клиентом, и самим сервером. Для этого добавляем в `package.json` почтового клиента строку:

```js
"proxy": "http://localhost:8085/"
```
      
После настройки `proxy` нам придут данные с сервера, и мы сможем отобразить их на фронт-енде.
