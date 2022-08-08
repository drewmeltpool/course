console.log('global context - ', this); //window

function f() {
  console.log('local function context - ', this); //window
}

console.log(f());

console.dir(document.write);

const gogi = {
  name: "Gogi",
  age: 55,
  habits: 'smoking',
  gigi: '555',
  addHabit: function (newHabbit) {
    // user.habits += "` " + newHabbit;
    this.habits += `, ${newHabbit}`;
  }
};

gogi.gigi = '123';
gogi.addHabit("self destruction");
console.log(gogi);

const car = {
  engine: "0.8l",
  name: "smart",
  go: function() {
    console.log("i'm going home");
    return 42;
  }
};

const resultOfGoing = car.go();

console.log('resultOfGoing', resultOfGoing);