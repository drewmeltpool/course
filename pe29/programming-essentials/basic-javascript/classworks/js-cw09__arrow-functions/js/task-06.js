/* TASK - 6
* Rewrite calculator() function, into the Arrow functions, with a new features:
*
* Each operation has its own function.
* That means - we will have sum(a,b) for summing, multiple(a,b) for multiplying and so on.
* Each of this functions need only two arguments,
* and returns only the result of the operation with this two numbers
* If the function hasn't receive any of two arguments, assign 0 as a default value.
*
* The calculate() functions will be the main one.
* Is takes three arguments:
*   1 - integer number
*   2 - integer number
*   3 - the function needs to be used for this two numbers
* So we have a picture like this:
* the main function inside itself will call the function with the operation.
* This construction is useful, if we need to do some operations with numbers before calculating.
* */

const sum = (a,b) => {
  return a+b;
};
const mult = (a,b) => a*b;
const divide = (a,b) => a/b;

const calculate = (num1, num2, callBack) => {
  const result = callBack(num1,num2);

  return result
};

console.log(calculate(10, 55, sum));