import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};
const KEY = 'feedback-form-state';
let formData = localStorage.getItem(KEY)
  ? JSON.parse(localStorage.getItem(KEY))
  : {};
refs.form.addEventListener('submit', onSubmit);
refs.form.addEventListener('input', throttle(onForm, 500));

onReboot();

function onForm(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(KEY, JSON.stringify(formData));
}

function onSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(KEY);
  console.log(formData);
}

function onReboot(e) {
  const value = localStorage.getItem(KEY);
  const parsed = JSON.parse(value);

  if (parsed.message) {
    refs.textarea.value = parsed.message;
  }

  if (parsed.email) {
    refs.input.value = parsed.email;
  }
}
