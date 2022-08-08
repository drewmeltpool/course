class Human {
  constructor(gender) {
    this._gender = gender;
  }

  getGender(){

  }

  becomeBoy() {
    this.gender = "male";
  }
}
// class User extends Human {
//   constructor(name, age, gender, about) {
//     super(gender);
//     this.name = name;
//     this.age = age;
//     this.about = about;
//   }
//
//   makeYounger() {
//     --this.age;
//   };
//
//   makeOlder() {
//     ++this.age;
//   }
// }
//
// const gogi = new User("Gogi", 404, !false, 'lorem ipsum co-founder');
// console.log(gogi);

// function Animal() {
//   this.exist = true;
// }

// function Duck(type) {
//   Animal.call(this);
//   this.type = type;
// }
//
// Duck.prototype.fly = function () {
//   console.log('Sayonara, humanity!');
// };
//
// Duck.prototype = Animal;
//
// const myDuck = new Duck('wild');
// console.log(myDuck);

// const cM2 = new CoffeeMachine("CM-002");
// const cM3 = new CoffeeMachine("CM-003");
// const cM4 = new CoffeeMachine("CM-004");
// const cM5 = new CoffeeMachine("CM-005");
//
// console.log(
//   cM2,
//   cM3,
//   cM4,
//   cM5
// );

// function User(name, surname, age, gender) {
//   this.name = name;
//   this.surname = surname;
//   this.age = age;
//   this.gender = gender;
// }
//
// User.prototype.getFullName = function () {
//   return `${this.name} ${this.surname}`
// };
//
//
// User.prototype.getFullNameARROW = () => `${this.name} ${this.surname}`;
//
// const gogi = new User("Gogi", "Gogishvili", -10, null);
//
// gogi.getFullName = () => {
//   return 'ahaha'
// };
// console.log(gogi);
// console.log(gogi.getFullName());
// console.log(gogi.getFullNameARROW());

const CM = new CoffeeMachine("CM-101");
CM.render();