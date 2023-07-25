import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

    form.addEventListener('input', throttle(e => {
      const key = e.target.name;
      const value = e.target.value;
      localStorage.setItem(key, value);
    }, 500));

    form.addEventListener('submit', e => {
      localStorage.removeItem("email");
      localStorage.removeItem("message");
    });


     
    const email = localStorage.getItem("email");
    const message = localStorage.getItem("message");

    form.elements.email.value = email;
    form.elements.message.value = message;
  


    
