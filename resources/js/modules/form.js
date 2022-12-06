const form = () => {
  //показ имени файла
  $('input[type="file"]').on('change', function () {
    let filename = this.files[0].name;

    $(this).next().text(filename);

    if ($(this).closest('.form__item').hasClass('logo')) {
      const itemInput = $(this);
      const photo = this.files[0];

      if (photo) {
        let reader = new FileReader();
        reader.onload = function (event) {
          console.log(event.target.result);
          itemInput
            .next('.text')
            .attr('style', `background-image: url(${event.target.result})`);
        };
        reader.readAsDataURL(photo);
      }
    }
  });

  //маска телефона
  $('.js-phone').mask('+7 (000) 000-0000');
};

export default form;
