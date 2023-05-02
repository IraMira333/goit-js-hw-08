import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector(`.feedback-form`),
  email: document.querySelector(`[name="email"]`),
  feedback: document.querySelector(`[name="message"]`),
};
const STORAGE_KEY = 'feedback-form-state';

autocompleteInputFromLocalStorage();

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFeedbackFormInput, 500));

function onFormSubmit(evt) {
  evt.preventDefault();
  if (refs.email.value.trim() === '' || refs.feedback.value.trim() === '') {
    alert('Заповніть всі поля форми!');
    return;
  }
  evt.currentTarget.reset();
  console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
  localStorage.removeItem(STORAGE_KEY);
}

function onFeedbackFormInput(evt) {
  let feedbackData = localStorage.getItem(STORAGE_KEY);
  if (feedbackData) {
    feedbackData = JSON.parse(feedbackData);
  } else {
    feedbackData = {};
  }
  feedbackData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbackData));
}

function autocompleteInputFromLocalStorage() {
  const dataInputs = localStorage.getItem(STORAGE_KEY);
  if (dataInputs) {
    const inputArray = JSON.parse(dataInputs);
    refs.email.value = inputArray.email ? inputArray.email : '';
    refs.feedback.value = inputArray.message ? inputArray.message : '';
  }
}
