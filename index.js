let contactItems = [];

function addcontact(text) {
    const contact = {
        text,
        favourite: false,
        id: Date.now(),
    };

    
  document.getElementById("havecontacts").textContent="YOU HAVE CONTACTS"
    contactItems.push(contact)

    const list = document.querySelector('.js-contact-list');
    list.insertAdjacentHTML('beforeend', `
      <li class="contact-item" data-key="${contact.id}">
        <input id="${contact.id}" type="checkbox"/>
        <label for="${contact.id}" class="tick js-tick"></label>
        <span>${contact.text}</span>
        <button class="delete-contact js-delete-contact">
          <svg><use href="#delete-icon"></use></svg>
        </button>
      </li>
   ( `);
  }

  function toggleDone(key) {
    const index = contactItems.findIndex(item => item.id === Number(key));
    contactItems[index].favourite = !contactItems[index].favourite;

    const item = document.querySelector(`[data-key='${key}']`);
    if (contactItems[index].favourite) {
      item.classList.add('done');
    } else {
      item.classList.remove('done');
    }
  }
  
function deletecontact(key) {
      contactItems = contactItems.filter(item => item.id !== Number(key));
      const item = document.querySelector(`[data-key='${key}']`);
      var permdelcontact = confirm("YOU SURE YOU WANNA DELETE THIS CONTACT?!?!")
      if(permdelcontact){item.remove()};
    }

const form = document.querySelector('.js-form');
form.addEventListener('submit', event => {
    event.preventDefault();
    const input = document.querySelector('.js-contact-input')

    const text = input.value.trim();
    if (text !== '') {
        addcontact(text);
        input.value = '';
        input.focus();
    }
});


const list = document.querySelector('.js-contact-list');
list.addEventListener('click', event => {
  if (event.target.classList.contains('js-tick')) {
    const itemKey = event.target.parentElement.dataset.key;
    toggleDone(itemKey);
  }
  if (event.target.classList.contains('js-delete-contact')) {
    const itemKey = event.target.parentElement.dataset.key;
    deletecontact(itemKey);
  }
});

