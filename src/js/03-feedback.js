import throttle from 'lodash.throttle';
import { loadFromLS, saveToLS } from './helpers.js'; //імпортую допоміжні функції


const refs = {
  form: document.querySelector('.feedback-form'), //ініціалізую форму 
};


refs.form.addEventListener('input', throttle(e => { //прослуховувач подій для форми під час введення даних
  const key = e.target.name;     // отримую назву ключа поточного елементу 
  const value = e.target.value;  // отримую значення поточного елементу
  saveToLS(key, value);
},500));


refs.form.addEventListener('submit', e => {
  e.preventDefault();

  const email = e.target.elements.email.value;
  const message = e.target.elements.message.value;

  console.log({ email, message });

  localStorage.clear();
  e.target.reset();
});

function onPageLoad() {
  const email = loadFromLS('email');
  const message = loadFromLS('message');

  refs.form.elements.email.value = email || 'Anonym@com';
  refs.form.elements.message.value = message || '';
}
onPageLoad();


    
