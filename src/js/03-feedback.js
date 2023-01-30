var throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const email = document.querySelector('[type="email"]');
const textarea = document.querySelector('textarea');

const savedInput = 'feedback-form-state';

form.addEventListener('input', throttle(onInput, 500));
form.addEventListener('submit', onFormSubmit);

onDataInInput();

function onInput() {
  const inputObj = {
    email: form.email.value,
    message: form.message.value,
  };

  localStorage.setItem(savedInput, JSON.stringify(inputObj));
}

function onFormSubmit(e) {
  e.preventDefault();

  console.log(JSON.parse(localStorage.getItem(savedInput)));

  e.target.reset();
  localStorage.removeItem(savedInput);
}

function onDataInInput() {
  const objOfSavedData = JSON.parse(localStorage.getItem(savedInput));
  if (objOfSavedData) {
    email.value = objOfSavedData.email;
    textarea.value = objOfSavedData.message;
  }
}