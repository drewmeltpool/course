/* TASK 5
* Use browser modal windows for getting three numbers from user.
* Then execute into console:
*   - arithmetic average
*   - max number
*   - min number
* */
let num1 = +prompt("Enter first number");
let num2 = +prompt("Enter second number");
let num3 = +prompt("Enter third number");
console.log(Math.max(num1, num2, num3));
console.log(Math.min(num1, num2, num3));
console.log(Math.round((num1+num2+num3)/3));