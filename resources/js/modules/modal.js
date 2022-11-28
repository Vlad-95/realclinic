const modal = () => {
  //открытие модалки
  const modalTriggers = $('[data-target]');

  modalTriggers.on('click', function () {
    const target = $(this).attr('data-target');

    //закрываем остальные модалки
    const currentModal = $(`.modal[data-modal="${target}"]`);
    const siblingsModal = $(`.modal:not([data-modal="${target}"])`);
    siblingsModal.fadeOut();

    $('body').addClass('no-scroll');
    currentModal.fadeIn();

    //проверка на существование табов в модалке
  });

  //закрытие модалки
  const closeModalBtns = $('.js-modal-close');

  closeModalBtns.on('click', function () {
    const modal = $(this).closest('.modal');

    $('body').removeClass('no-scroll');
    modal.fadeOut();
  });

  //Клик по табам в модалке
  // const tabs = document.querySelectorAll('.modal .tabs__item');

  // tabs.forEach((elem) => {
  //   elem.addEventListener('click', function () {
  //     const allElems = elem.parentElement.children;

  //     [...allElems].forEach((item) => {
  //       item.classList.remove('active');
  //     });

  //     elem.classList.add('active');
  //   });
  // });
};

export default modal;
