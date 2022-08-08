const form = document.getElementById('createEvent');
const title = document.getElementById('eventTitle');
const date = document.getElementById('eventDate');
const desc = document.getElementById('eventDesc');
const btn = document.querySelector('.event-form button');

function makeEventObject(title, date, desc) {
  const makeTitle = str => {
    let res = '';

    for (let i = 0; i < str.length; i++) {
      if ((i+1) % 3 === 0) {
        res += str[i].toUpperCase();
      } else {
        res += str[i]
      }
    }

    return res;
  };
  const makeDaysBefore = dateStr => {
    return Math.round((new Date(dateStr).getTime() - Date.now()) / (24 * 60 * 60 * 1000));
  };
  const makeDescription = str => {
    const splittedDescription = str.split('типа');
    let res = '';

    for (const elem of splittedDescription) {
      res += elem + " "
    }

    return res;
  };

  return {
    title: makeTitle(title.value),
    daysBefore: makeDaysBefore(date.value),
    description: makeDescription(desc.value)
  };
}

btn.disabled = !title.value || !date.value || !desc.value
form.onchange = e => {
  btn.disabled = !title.value || !date.value || !desc.value
}

form.onsubmit = e => {
  e.preventDefault();
  const list = document.querySelector('.events-list');
  
  const event = makeEventObject(title, date, desc);
  
  list.insertAdjacentHTML('beforeend',`
  <div class="events-list-item">
    <p class="event-list-title">${event.title}</p>
    <p class="event-list-days">${event.daysBefore}</p>
    <p class="event-list-desc">${event.description}</p>
  </div>
  `)
};