/* TASK - 3
* Write a function, that will sum up all the arguments passed into it.
* */

const sumAll = (...allArgs) => {
  let sum = 0;

  // for (let i = 0; i < allArgs.length; i++) {
  //   sum += allArgs[i]
  // }

  for (const elem of allArgs) {
    sum += elem
  }

  return sum;
};

console.log(sumAll(1, 2, 33, 24, 'gogi', 'olaf', []));