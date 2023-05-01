import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector(`.feedback-form`),
  email: document.querySelector(`[name="email"]`),
  feedback: document.querySelector(`[name="message"]`),
};
autocompleteInputFromLocalStorage();
const feedbackData = {};
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFeedbackFormInput, 500));

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
}

function onFeedbackFormInput(evt) {
  feedbackData[evt.target.name] = evt.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(feedbackData));
}

function autocompleteInputFromLocalStorage() {
  const dataInputs = localStorage.getItem('feedback-form-state');
  if (dataInputs) {
    const inputArray = JSON.parse(dataInputs);
    if (inputArray.hasOwnProperty('email')) {
      refs.email.value = inputArray.email;
    }
    if (inputArray.hasOwnProperty('message')) {
      refs.feedback.value = inputArray.message;
    }
  }
}
