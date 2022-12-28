const research = () => {
  // клик по кнопке копирования ссылки
  if ($('.form_share').length) {
    const copyBtn = $('.form_share .btn.js-copy');

    copyBtn.on('click', function () {
      $(this).html(`
        <svg>
          <use xlink:href="img/icons/sprite.svg#chain"></use>
        </svg>
        Скопировано  
      `);
    });
  }
};

export default research;
