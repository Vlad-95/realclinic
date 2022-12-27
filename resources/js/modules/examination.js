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
};

export default examination;
