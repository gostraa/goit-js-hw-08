import throttle from 'lodash.throttle';
import { loadFromLS, saveToLS } from './helpers.js'; //імпортую допоміжні функції


const refs = {
  form: document.querySelector('.feedback-form'), //ініціалізую форму 
};


refs.form.addEventListener('input', throttle(e => { //прослуховувач подій для форми під час введення даних
  const key = e.target.name;     // отримую назву ключа поточного елементу 
  const value = e.target.value;  // отримую значення поточного елементу
  saveToLS(key, value);          // імпортована фунція яка перетворює інфу в рядок та зберігає в локал сторедж
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

  const email = loadFromLS('email'); // дістаю з локал стореджу значення поля email (імпортована ф-ція)
  const message = loadFromLS('message'); // дістаю з локал стореджу значення поля message (імпортована ф-ція)

  refs.form.elements.email.value = email || 'Anonym@com'; //записую в поле email значення email або дефолтне Anonym@com
  refs.form.elements.message.value = message || ''; //записую в поле message значення email або дефолтне ''
}
onPageLoad(); // одразу викликаю щоб функція працювала при завантаженні сторінки


    
