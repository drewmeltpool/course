let gogi = {
  name: "Gogi",
  age: 55
};

const {name, age, pets:kek = []} = gogi;
console.log(kek);

let gogi7 = {...gogi};

gogi.age = -9;

console.log(gogi === gogi7);

const k = 'kefir';
const b = 'bulka';

// [k,b] = [b, k];

const gogies = document.querySelectorAll('.gogi');

const gogiArr = [...gogies];

// gogies[0].addEventListener('click', (event) => {
//   console.log(event);
// });


const cleanFunc = (a,b) => {
  return a + b;
};

const vip = (cb) => {
  return cb();
};


const findGogi = 'Lorem ipsum gogi sit amet, consectetur adipisicing elit. Amet at atque enim et facere gogi ipsum iure, gogi laborum minus molestias nihil gogi provident quae quidem quis saepe tempora, voluptatem.';

console.log(findGogi.split('gogi'));


let [adin,dua,tri] = [1,2,3];

console.log(adin,dua,tri);

function myFilter(arr, callBack) {
  let resArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (callBack(arr[i], i, arr)) {
      resArray.push(arr[i]);
    }
  }
}



