/* TASK - 5
* Write a coffee-machine program.
* Program can accept the coins and prepare the drinks
* (Coffee - 30 UAH, Cappuccino - 40 UAH, special extra vegan no gluten herbal tea - 200 UAH).
*
* It means that the user enters the amount of money that he gives in the modal window,
* next - he enters the name of the drink he wants.
*
* Depending of the drink, you need to calculate the change and show the message:
* `Your drink *DRINK_NAME* and change *CHANGE*`
* If the change equals to 0, show next message:
* `Your drink *DRINK_NAME. Thank you for the exact amount of money!*`
* */

const userMoney = prompt("Give me money, you, filthy animal!");

if (isNaN(userMoney)) {
  alert("This is not a real money!")
} else {
  const drink = prompt('What drink would you prefer?');

  if (drink === "Coffee") {
    const change = +userMoney - 30;

    if (change >= 0) {
      alert(`Your drink ${drink} and change ${change}`)
    } else {
      alert('Not enough money')
    }
  } else if (drink === "Cappuccino") {
    const change = +userMoney - 50;

    if (change >= 0) {
      alert(`Your drink ${drink} and change ${change}`)
    } else {
      alert('Not enough money')
    }
  } else if (drink === "special extra vegan no gluten herbal tea") {
    const change = +userMoney - 200;

    if (change >= 0) {
      alert(`Your drink ${drink} and change ${change}`)
    } else {
      alert('Not enough money')
    }
  } else {
    alert("This is nor even a word!")
  }
}