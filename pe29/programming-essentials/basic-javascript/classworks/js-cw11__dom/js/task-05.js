/* TASK - 5
* Create a function that will ask the user what exact item he wants to change.
* User needs to write only item name. If there are no matches in the list
* keep asking until the item name becomes valid.
* Then ask for a new amount of selected item.
* Show data entered by the user on the page.
* Example:
* item name - 'Coffee',
* new amount of it - '17'
* It means that you need to change only the amount of 'Coffee' and it should be 17 now.
* */

function askProductName(productsList) {
  let productName = prompt('').toLowerCase();

  const noMatches = () => {
    for (let i = 0; i < productName.length; i++) {
      if (productsList[i].textContent.toLowerCase().includes(productName)) {
        return false
      }
    }
    return true
  };

  while (noMatches()) {
    productName = prompt('').toLowerCase();
  }

  return productName;
}

const replaceAmount = () => {
  const products = [...document.querySelectorAll('.storage-item')];
  let productName = askProductName(products);
  const newAmount = prompt('how many?');

  const productLI = products.find(pr => pr.textContent.toLowerCase().includes(productName));

  debugger
  productLI.textContent = `${productName} - ${newAmount}`;
};

replaceAmount();