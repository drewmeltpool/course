/* TASK - 2
* Create a function, that will:
* take an element from the page with class 'training-list', and text content equals 'list-element 5'.
* Show this element in console.
* Replace text content in this element to "<p>Hello</p>" without creating a new HTML element on the page
* Use array methods to complete the task.
* */

function getListItem() {
  const listItems = document.querySelectorAll('.training-list');

  for (let i = 0; i < listItems.length; i++) {
    if(listItems[i].textContent === 'list-element 5') {
      listItems[i].textContent = "<p>Hello</p>";
    }
  }
}

getListItem();