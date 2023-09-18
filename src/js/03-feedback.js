import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};
const KEY = 'feedback-form-state';
let formData = {};
refs.form.addEventListener('submit', onSubmit);
refs.form.addEventListener('input', throttle(onForm, 500));

onReboot();

function onForm(e) {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(KEY, JSON.stringify(formData));
}

function onSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(KEY);
  console.log(formData);
  formData = {};
}

function onReboot(e) {
  try {
    const value = localStorage.getItem(KEY);
    if (!value) return;

    formData = JSON.parse(value);
    Object.entries(formData).forEach(([key, value]) => {
      refs.form.elements[key].value = value;
    });
  } catch ({ message }) {
    console.log(message);
  }
}
