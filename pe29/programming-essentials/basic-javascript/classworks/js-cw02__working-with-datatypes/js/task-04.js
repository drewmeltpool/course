/* TASK 4
* Execute into console next statements and explain every result in your own words:
* Create variables - x = 6, y = 15, z = 4:
    * x += y  - x++ * z
    * z = --x -y * 6
    * y /= x + 5 % z
* 'random string' + 500
* 'random string' + +'number'
* 'random string' + +'500n'
* 'random string' + parseInt('404not found')
* !!'false' == !!'true'
* 'true' == true
* 'true' === true
* NaN == 1` `NaN == NaN` `NaN === NaN` `NaN > NaN` `NaN < NaN` `NaN >= NaN` `NaN <= NaN
* [] == true` `{} == true
* */

let x = 6,
  y = 15,
  z = 4;

console.log('x += y - x++ * z', x += y - x++ * z);
console.log('z = --x -y * 6', z = --x -y * 6);
console.log('y /= x + 5 % z', y /= x + 5 % z);

console.log("'random string' + 500 =>", 'random string' + 500);
console.log("'random string' + +'number'", 'random string' + +'number');
console.log("'random string' + +'500n'", 'random string' + +'500n');
console.log("'random string' + parseInt('404not found')", 'random string' + parseInt('404not found'));


console.log("!!'false' === !!'true' => ", !!'false' == !!'true');
console.log("'true' == true", 'true' == true);
console.log('{} == true', {} == true);










