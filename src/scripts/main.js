'use strict';

const subscriptionForm = document.querySelector('.subscription__form');

subscriptionForm.addEventListener('submit', event => {
  event.preventDefault();
  subscriptionForm.reset();
});

let position = 0;
const slidesToShow = 1;
const slidesToScroll = 1;
const track = document.querySelector('.slider__track');
const btnPrev = document.querySelector('.slider__button--prev');
const btnNext = document.querySelector('.slider__button--next');
const items = document.querySelectorAll('.slider__item');
const itemsCount = items.length;
const itemWidth = 100 / slidesToShow;
const movePostition = slidesToScroll * itemWidth;

items.forEach(item => {
  item.style.minWidth = `${itemWidth}%`;
  item.style.MaxWidth = `${itemWidth}%`;
});

btnNext.addEventListener('click', () => {
  const itemsLeft = itemsCount
    - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

  position -= itemsLeft >= slidesToScroll
    ? movePostition
    : itemsLeft * itemWidth;

  setPosition();
  chechBtns();
});

btnPrev.addEventListener('click', () => {
  const itemsLeft = Math.abs(position) / itemWidth;

  position += itemsLeft >= slidesToScroll
    ? movePostition
    : itemsLeft * itemWidth;

  setPosition();
  chechBtns();
});

const setPosition = () => {
  track.style.transform = `translateX(${position}%)`;
};

const chechBtns = () => {
  btnPrev.disabled = position === 0;
  btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
};

chechBtns();
