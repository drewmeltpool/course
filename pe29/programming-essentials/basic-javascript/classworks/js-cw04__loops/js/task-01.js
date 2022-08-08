/* ЗАДАНИЕ - 1
* Пользователь должен ввести Имя, Фамилию и свой возраст.
* В случае если он вводит не соответствующие данные, нужно переспрашивать его, ДО ТЕХ ПОР ПОКА данные не будут введены корректно.
* */
let userName = prompt("what is your name and last name?");
while(!isNaN(userName)){
  userName = prompt("Entered incorrectly");
}

let userAge = prompt("what is your age?");
while(isNaN(userAge)){
  userAge = prompt("Entered incorrectly")
}