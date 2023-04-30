import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector(`.feedback-form`),
  email: document.getElementsByName(`email`),
  feedback: document.getElementsByName(`message`),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', onFeedbackFormInput);

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function onFeedbackFormInput(evt) {
  const email = evt.target.value;
}
