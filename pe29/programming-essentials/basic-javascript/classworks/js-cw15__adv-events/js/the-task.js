// There is some `mailStorage` - a little simulation of real storage with email letters.
const mailStorage = [
  {
    subject: "Hello world",
    from: "gogidoe@somemail.nothing",
    to: "lolabola@ui.ux",
    text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
  },
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

const emailsContainer = document.querySelector('.emails');
const fragment = document.createDocumentFragment();

mailStorage.forEach((singleEmail) => {
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

emailsContainer.addEventListener('click', event => {
  // console.log(event.path.find(elem => elem.classList.contains('email-item')));
  const closestText = event.target.closest('.email-item').querySelector('.email-text');

  if(event.target.tagName !== 'A' && event.target !== closestText) {
    closestText.hidden = !closestText.hidden;
  }
});


/*** THE TASK IS ***
 * 1) Show up all the emails on the screen, using only JS creating elements.
 *    Every letter should have hidden text. Show text, only after the user clicks on the emails item.
 *    It is necessary to use only one event listener for container with letters.
 *
 * 2) Implement toggle text effect. It means that only one text on only letter can be showed at the same time.
 *    If user made a click on the letter, which doesn't has showed text - you need to close current opened text, and only then open the text for the letter that was just clicked.
 *
 * 3) Create "New Mail" button. After pressing this button user need to see a modal window with the form for create mew email letter.
 *    Fields for this form are: Email Title, To (email of the recipient), letter text (up to 500 symbols), "Send" button. By the way, you need automatically fill the 'from' property for each letter, and it will be "gogi@gogimail.go".
 *    If user want to close the modal window, he can do this, by clicking on the cross sign at the top right corner of the modal window.
 *    Modal window size is 500px both width and height. It shows up at the bottom right corner of the page, user can get access to any other part of functionality while modal window is showing.
 *
 * 4) Every letter needs to have a "Delete button, which will delete this particular letter both from the page and from the mailStorage.
 * */
