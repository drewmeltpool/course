// const kids = [
//   {soulName: 'Kiddy-1', price: 50},
//   {soulName: 'Kiddy-1', price: 333},
//   {soulName: 'Kiddy-1', price: 666},
//   {soulName: 'Kiddy-1', price: 660},
//   {soulName: 'Kiddy-1', price: 5121212121212},
//   {soulName: 'Kiddy-1', price: null},
// ];
//
// console.log(kids);
//
// const newKids = kids.map((kid) => {
//   const newKid = {
//     ...kid,
//     price: kid.price / 2
//   };
//   return newKid
// });
//
// console.log(newKids);


// const users = [
//   {name: 'Gogi'},
//   {name: 'Gogi-1'},
//   {name: 'Gogi-2'},
//   {name: 'Gogi-3'},
//   {name: 'Gogi-4'},
//   {name: 'Gogi-5'},
//   {name: 'Gogi-6'}
// ];
//
// function forEachElement(srcArr, callBack) {
//   for (let i = 0; i < srcArr.length; i++) {
//     callBack(srcArr[i], i, srcArr)
//   }
// }
//
// function myMap(srcArr, callBack) {
//   const resArray = [];
//
//   for (let i = 0; i < srcArr.length; i++) {
//     const newElem = callBack(srcArr[i], i, srcArr);
//
//     resArray.push(newElem);
//   }
//
//   return resArray;
// }

// function myEvery(srcArr, callBack) {
//   let flag = true;
//
//   for (let i = 0; i < srcArr.length; i++) {
//     if (callBack(srcArr[i], i, srcArr) === false) {
//       flag = false
//     }
//   }
//
//   return flag
// }
//
// function myFilter(srcArr, callBack) {
//   const resArray = [];
//
//   for (let i = 0; i < srcArr.length; i++) {
//     const newElem = callBack(srcArr[i], i, srcArr);
//     if (newElem) {
//       resArray.push(srcArr[i])
//     }
//   }
//
//   return resArray;
// }
//
// forEachElement(users, el => console.log(el));
//
// forEachElement(users, (el, index) => {
//   if (index === 3) {
//     console.log('Hahaha');
//     return
//   }
//   console.log('el is - ', el)
// });