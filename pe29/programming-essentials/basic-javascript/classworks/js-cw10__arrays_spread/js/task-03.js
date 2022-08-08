/* TASK - 3
* Create a function that will receive an array as a single argument.
* return value: new array, which is the exact copy of the source one.
* Task needs to be done using: for, map(), spread operator. It means three implementations.
*/

const arr = [1,2,3,4,5,6,7,8];

//for
const createArrFor = arr => {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i])
  }
  return newArray
};

// const createArrMap = arr => arr.map((elem) => {
//   return elem
// });

const createArrMap = arr => arr.map(elem => elem);

const arrSpread = arr => [...arr];

console.log("for:",createArrFor(arr));
console.log("map:",createArrMap(arr));
console.log("spread:",arrSpread(arr));