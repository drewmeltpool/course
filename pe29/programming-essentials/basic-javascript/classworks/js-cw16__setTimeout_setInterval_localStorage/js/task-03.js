/* TASK - 3
* Check if the localStorage has any value connected to key 'userName'.
* If localStorage contains value by key 'userName', show message "Hello, userName", place actual value from storage instead of userName.
* If there is no key userName in the localStorage:
*   - ask user to enter his name.
*   - save it in the localStorage by the key userName
*   - show the message Hello, userName
* */

const userNameFromStorage = localStorage.getItem("userName");

if (!userNameFromStorage) {
  const name = prompt('what is your name?');
  localStorage.setItem("userName", name);
  alert(`Hello, ${name}! I'm glad to see you (no!)`)
} else {
  alert(`Hello, ${userNameFromStorage}! I'm glad to see you (no!)`)
}