const accordion = () => {
  const toggle = $('.js-accordion-toggle');

  toggle.on('click', function () {
    const parent = $(this).closest('.js-accordion-item');
    const content = parent.find('.js-accordion-content').first();

    $(this).toggleClass('active');
    content.slideToggle();
  });
};

export default accordion;
