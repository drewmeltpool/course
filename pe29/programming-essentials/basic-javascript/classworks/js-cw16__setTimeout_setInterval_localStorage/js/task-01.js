/* TASK - 1
* Write showMsg(msgText, time) function, where:
*   msgText - text of the message that will be shown
*   time - number of milliseconds of delay to show the message
* */

const showMsg = (msgText, time) => {
  setTimeout(() => console.log(msgText), time);
};

showMsg("Gogi ", 2500);