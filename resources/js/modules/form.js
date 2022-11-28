const form = () => {
  //показ имени файла
  $('input[type="file"]').on('change', function () {
    let filename = this.files[0].name;

    $(this).next().text(filename);
  });

  //маска телефона
  $('.js-phone').mask('+7 (000) 000-0000');
};

export default form;
