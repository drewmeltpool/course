/* TASK - 3
* Get the access group name from the user, it can be - 'admin', 'manager' or 'user'.
* And show different message for different access group:
*   - for admin - "Hello, admin!"
*   - for manager - "Hello, manager!"
*   - for user - "Hello, user!"
* */
let accessName = prompt("Введите Вашу роль: admin, user, manager");
switch (accessName) {
  case "Admin":
  case "admin": document.writeln("Hello, your role is admin"); break;

  case "user":
  case "User":document.writeln("Hello, your role is user"); break;

  case "Manager":
  case "manager": document.writeln("Hello, your role is manager");break;
  default: document.writeln ("hi, an undentified personality");

}