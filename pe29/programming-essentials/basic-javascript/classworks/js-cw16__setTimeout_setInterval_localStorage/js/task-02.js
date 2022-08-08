/* TASK - 2
* Add third argument into previous task function. It will be the number which will describe how many times you want to show the message.
* */

const showMsg = (msgText, time, count) => {
  const interval = setInterval(() => {
    if (--count < 0) {
      clearInterval(interval);
      console.log('расчет окончен');
      return
    }
    console.log(msgText);
  }, time);
};

showMsg("Gogi", 500, 6);