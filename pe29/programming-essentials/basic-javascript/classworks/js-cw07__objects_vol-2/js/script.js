// console.log(this);
//
// function makeThingsPossible() {
//   console.log('makeThingsPossible',this)
// }
//
// makeThingsPossible();
//
// const user = {
//   showContext() {
//     console.log(this)
//   }
// };
//
// user.showContext()



const u = {
  name: 'Gogi'
};

const gogi2 = u;

gogi2.name = 90;

console.log(u);

// let a = 10;
// let b = a;
// b++
// console.log(a);
//
// function f(gogi) {
//   return
//   '00'
// }
//
// const f2 = function () {
//   console.log('gggg');
// };
//
// console.log(typeof f2);
//
// const f3 = function f4 () {
//
// };
//
// const gogi = new Function(function gogi () {
//   console.log('gogogo')
// });
//
// (
//   function () {
//
//   }
// )();