function menuHandler() {
  document.querySelector('.header').scrollIntoView({
    // behavior: 'smooth',
    block: 'start',
  });
  document.querySelector('body').classList.toggle('no-scroll');
  document.querySelector('body').classList.toggle('opacity-layer');
  document.querySelector('.burger').classList.toggle('active');
  document.querySelector('.mmenu').classList.toggle('active');
}

function closeMenu() {
  document.querySelector('body').classList.remove('no-scroll', 'opacity-layer');
  document.querySelector('.burger').classList.remove('active');
  document.querySelector('.mmenu').classList.remove('active');
}

const menu = () => {
  $('.burger').on('click', menuHandler);
};

export { menu, menuHandler, closeMenu };
