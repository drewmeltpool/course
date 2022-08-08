class MyMath {
  static PI = 3.14;
  static counter = 0;

  static getInfinity() {
    return Infinity;
  }

  constructor(arg) {
    this.smth = arg;
  }

  incrCounter() {
    MyMath.counter++;
  }
}

const myMathInstance = new MyMath(42);
console.log(myMathInstance);

console.log(MyMath.counter);
myMathInstance.incrCounter();
console.log(MyMath.counter);


MyMath.prototype.nazvanieMetoda = function () {

};

// MyMath.PI;
// console.log(MyMath.getInfinity());
function Gogi() {
  console.log(this);
  this.makeLavash = (...args) => {
    if (args.length === 0) {

    } else if (args.length >= 1 && typeof args[0] === 'string') {

    } else if (args.length >= 1 && typeof args[0] === 'number') {

    }
  };
}

Gogi.prototype.hohoho = function () {
  console.log('hohoho');
};

const gogi = new Gogi();

gogi.hohoho();