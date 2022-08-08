/* ЗАДАНИЕ - 4
* Написать преобразователь оценок.
* Запрашиваем у пользователя оценку в виде числа.
* После того, как она была введена нужно преобразовать ее в буквенный эквивалент.
* Запрашивать ввод оценки нужно до тех пор, пока пользователь не оставит ввод пустым.
* Принцип преобразования:
*     0 - 59 -> F
*    60 - 69 -> D
*    70 - 79 -> C
*    80 - 89 -> B
*   90 - 100 -> A
* */
let grade = prompt("Enter grade");

while (grade !== '') {
  grade = +grade;
  if (grade > 0 && grade < 60) {
    alert(grade + " F");
  } else if (grade > 60 && grade < 70) {
    alert(grade + " D");
  } else if (grade > 70 && grade < 80) {
    alert(grade + " C");
  } else if (grade > 80 && grade < 90) {
    alert(grade + " B");
  } else if (grade > 90 && grade <= 100) {
    alert(grade + " A");
  }

  grade = prompt("Enter grade")
}