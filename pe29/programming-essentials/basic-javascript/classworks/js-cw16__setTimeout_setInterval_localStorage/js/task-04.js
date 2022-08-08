/* TASK - 4
* add the functionality for your mail client from the previous lesson
* Create imitation of loading data from the server.
* During 2 seconds after loading the page, instead of letters - show the "loading..." text, or any gif loader from the internet.
* After 2 second passed - show all the email letters.
* */
const mailStorage = JSON.parse(localStorage.getItem('emails')) || [
  // {
  //   subject: "Hello world",
  //   from: "gogidoe@somemail.nothing",
  //   to: "lolabola@ui.ux",
  //   text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
  // },
  {
    subject: "How could you?!",
    from: "ladyboss@somemail.nothing",
    to: "ingeneer@nomail.here",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
  },
  {
    subject: "Acces denied",
    from: "info@cornhub.com",
    to: "gogidoe@somemail.nothing",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
  }
];
localStorage.setItem("emails", JSON.stringify(mailStorage));

// let mailStorage = [];
// const storageEmails = localStorage.getItem('emails');
//
// if (storageEmails) {
//   mailStorage = JSON.parse(storageEmails)
// }
const emailsContainer = document.querySelector('.emails');
const fragment = document.createDocumentFragment();
const loader = document.createElement('img');

loader.className = 'loader';
loader.src = "img/packman-preloader.gif";

emailsContainer.prepend(loader);

function removeLoader() {
  document.querySelector('.loader').remove()
}

function renderEmails(emailsCollection) {
  emailsCollection.forEach((singleEmail) => {
    const emailItem = document.createElement('div');
    emailItem.className = 'email-item';

    emailItem.insertAdjacentHTML('beforeend', `
      <h4 class="email-subject">${singleEmail.subject}</h4>
  
      <div class="email-subtext-wrapper">
        <a href="mailto:gogi@go.com" class="email-subtext email-from">${singleEmail.from}</a>
        <a href="mailto:escobar@pablo.coco" class="email-subtext email-to">${singleEmail.to}</a>
      </div>
  
      <p class="email-text" hidden>${singleEmail.text}</p>
  `);

    fragment.append(emailItem);
  });

  emailsContainer.append(fragment);
}

setTimeout(() => {
  removeLoader();
  renderEmails(mailStorage);
}, 2000);

emailsContainer.addEventListener('click', event => {
  // console.log(event.path.find(elem => elem.classList.contains('email-item')));
  const closestText = event.target.closest('.email-item').querySelector('.email-text');
  const closestEmail = event.target.closest('.email-item');
  const currentActive = document.querySelector('.active');

  if (currentActive) {
    currentActive.classList.remove('active');
  }

  if (event.target.tagName !== 'A' && event.target !== closestText) {
    closestText.classList.add('active');
    closestText.hidden = false;
    currentActive.hidden = true;
  }
});
