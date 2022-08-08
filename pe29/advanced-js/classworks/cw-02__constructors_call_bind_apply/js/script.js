const user = {
  name: "Gogi",
  age: 55
};

const {name, age} = user;

gogi.addEventListener('click', (ev) => {
  console.log(ev);
});

// const userClone = {...user};

// const {gogi = 'no gogi'} = userClone;

// function Gogi() {
//   this.someMethod = () => {
//     console.log(this);
//   }
// }

// const g = new Gogi();
// g.someMethod();

const someArray = ['gogi', 'his dog', 'death'];
const [gg, ggg, gggg] = someArray;