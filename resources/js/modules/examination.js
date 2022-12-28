import AirDatepicker from 'air-datepicker';

const examination = () => {
  if ($('input.js-date').length) {
    document.querySelectorAll('.js-date').forEach((item) => {
      let calendar = new AirDatepicker(item, {
        autoClose: true,
        isMobile: $(window).width() < 769 ? true : false,
        minDate: new Date(),
      });
    });
  }

  if ($('.examination__patient').length) {
    //редактирование основных данных
    $('.edit').on('click', function () {
      //находим форму в этом же блоке
      const block = $(this).closest('.block');
      const form = block.find('.info');
      const saveBtn = block.find('.js-save-info');

      form.find('input').removeAttr('readonly');
      saveBtn.addClass('show');
    });

    $('.js-save-info').on('click', function () {
      const block = $(this).closest('.block');
      const form = block.find('.info');
      const saveBtn = $(this);

      form.find('input').attr('readonly', true);
      saveBtn.removeClass('show');
    });
  }
};

export default examination;
