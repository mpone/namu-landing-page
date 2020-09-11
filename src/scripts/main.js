'use strict';

const subscriptionForm = document.querySelector('.subscription__form');

subscriptionForm.addEventListener('submit', event => {
  event.preventDefault();
  subscriptionForm.reset();
});
