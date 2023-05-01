import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector(`.feedback-form`),
  email: document.getElementsByName(`email`),
  feedback: document.getElementsByName(`message`),
};
autocompleteInputFromLocalStorage();
const feedbackData = {};
refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFeedbackFormInput, 1000));

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
    refs.email.value = inputArray.email;
    refs.feedback.value = inputArray.message;
    console.log(inputArray);

    console.log(refs.email.value);
    console.log(refs.feedback.value);
  }
}
