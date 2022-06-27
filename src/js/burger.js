"use strict"

const openMenu = document.querySelector('.header-hamburger'),
      modalMenu = document.querySelector('.menu-modal'),
      menuClose = document.querySelector('.menu-modal__close');

openMenu.addEventListener('click', () => {
    modalMenu.classList.add('menu-modal__active');
});

menuClose.addEventListener('click', () => {
    modalMenu.classList.remove('menu-modal__active');
});