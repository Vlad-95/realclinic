const modal = () => {
  //открытие модалки
  const modalTriggers = $('[data-target]');

  modalTriggers.on('click', function () {
    //Разделяем по точке, чтобы учитвать модалки входа и регистрации
    const target = $(this).attr('data-target').split('.');

    //закрываем остальные модалки
    const currentModal = $(`.modal[data-modal="${target[0]}"]`);
    const siblingsModal = currentModal.siblings('.modal');
    siblingsModal.fadeOut();

    $('body').addClass('no-scroll');
    currentModal.fadeIn();

    //проверка на существование табов в модалке
    if (target.length > 1) {
      const targetTab = target[1];

      const currentTabContent = $(
        `.js-tabs-content[data-tab-content="${targetTab}"]`
      );
      const siblingsTabContent = currentTabContent.siblings('.js-tabs-content');

      $(`[data-tab=${targetTab}]`)
        .fadeIn('active')
        .siblings('[data-tab]')
        .removeClass('active');
      siblingsTabContent.hide();
      currentTabContent.fadeIn();
    }
  });

  //закрытие модалки
  const closeModalBtns = $('.js-modal-close');

  closeModalBtns.on('click', function () {
    const modal = $(this).closest('.modal');

    $('body').removeClass('no-scroll');
    modal.fadeOut();
  });
};

export default modal;
