/**
 * Task - 02
 *
 * Create your custom modal window.
 *
 * CSS and markup are placed in html and css files of this classwork.
 *
 * The modal window should appears after click on button "Show modal".
 *
 * Modal window should close after clicking "cross" btn on the top right corner of it, or after clicking anywhere on the screen except the modal itself.
 * */

const showModal = document.createElement('button');
const modalWrapper = document.createElement('div');
modalWrapper.classList.add('modal-wrapper');
showModal.textContent = "open modal";

modalWrapper.addEventListener('click', e => {
 if(e.target === e.currentTarget || e.target.classList.contains('modal-close')) {
  modalWrapper.remove();
 }
});

showModal.addEventListener('click', () => {
 if (modalWrapper.children.length === 0) {
  modalWrapper.insertAdjacentHTML('afterbegin', `<div class="modal">
        <button class="modal-close">x</button>
        <p class="modal-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, enim, repellat! Accusamus
            deleniti dignissimos distinctio exercitationem, harum ipsa nisi. Aut dignissimos ducimus eveniet in ipsum
            magnam
            officiis placeat sunt ullam?</p>
    </div>`);
 }

 document.body.prepend(modalWrapper);
});

document.body.prepend(showModal);