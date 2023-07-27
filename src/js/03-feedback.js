import throttle from 'lodash.throttle';
import { loadFromLS, saveToLS } from './helpers.js'; //імпортую допоміжні функції

const refs = {
  form: document.querySelector('.feedback-form'), //ініціалізую форму
};

const key = 'feedback-form-state';
let userData = {
    email: refs.form.elements.email.value,
    message: refs.form.elements.message.value
  }


refs.form.addEventListener('input', throttle(() => { //прослуховувач подій для форми під час введення даних
   userData = {
    email: refs.form.elements.email.value,
    message: refs.form.elements.message.value,
  };
  saveToLS(key, userData);          // імпортована фунція яка перетворює інфу в рядок та зберігає в локал сторедж
},500));


refs.form.addEventListener('submit', e => {    //слухач на відправку
  e.preventDefault();    // переривання дій браузера по дефолту

  const email = e.target.elements.email.value;  //значення з поля email
  const message = e.target.elements.message.value; //значення з поля message

  console.log({ email, message }); //вивожу значення в консоль

  localStorage.clear(); //очищую локал сторедж бо вже натиснута кнопка відправити
  e.target.reset();     //очищую поля форми
});

function onPageLoad() {        //функція для автоматичного заповнення полів вводу при оновленні сторінки

  const dataFromLS = loadFromLS(key);
  if (dataFromLS) {
    userData = dataFromLS;
  };
  refs.form.elements.email.value = userData.email || 'Anonym@com'; //записую в поле email значення email або дефолтне Anonym@com
  refs.form.elements.message.value = userData.message || ''; //записую в поле message значення email або дефолтне ''
}
onPageLoad(); // одразу викликаю щоб функція працювала при завантаженні сторінки








  

