const allEvents = [];
const gallery = document.querySelector('.gallery');

gallery.addEventListener('click', e => {
  if (e.target.tagName === "BUTTON" && e.target.classList.contains('gallery-item-btn')) {
    console.log('you just pressed a button');
  }
});