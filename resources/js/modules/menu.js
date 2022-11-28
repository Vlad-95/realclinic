function menuHandler() {
  $('.header')[0].scrollIntoView({
    // behavior: 'smooth',
    block: 'start',
  });
  $('body').toggleClass('no-scroll');
  $('body').toggleClass('opacity-layer');
  $('.burger').toggleClass('active');
  $('.mmenu').toggleClass('active');
}

function closeMenu() {
  $('body').removeClass('no-scroll opacity-layer');
  $('.burger').removeClass('active');
  $('.mmenu').removeClass('active');
}

const menu = () => {
  $('.burger').on('click', menuHandler);
};

export { menu, menuHandler, closeMenu };
