import { fadeIn, fadeOut } from './utils';

const modal = () => {
  //открытие модалки
  let modalTriggers = document.querySelectorAll('[data-target]');

  modalTriggers.forEach((elem) => {
    elem.addEventListener('click', function () {
      let target = elem.getAttribute('data-target');

      document.querySelector('body').classList.add('no-scroll');
      fadeIn(document.querySelector(`.modal[data-modal="${target}"]`));
    });
  });

  //закрытие модалки
  let closeModalBtns = document.querySelectorAll('.js-modal-close');

  closeModalBtns.forEach((elem) => {
    elem.addEventListener('click', function () {
      let modal = elem.closest('.modal');

      document.querySelector('body').classList.remove('no-scroll');
      fadeOut(modal);
    });
  });

  //Клик по табам в модалке
  let tabs = document.querySelectorAll('.modal .tabs__item');

  tabs.forEach((elem) => {
    elem.addEventListener('click', function () {
      const allElems = elem.parentElement.children;

      [...allElems].forEach((item) => {
        item.classList.remove('active');
      });

      elem.classList.add('active');
    });
  });
};

export default modal;
