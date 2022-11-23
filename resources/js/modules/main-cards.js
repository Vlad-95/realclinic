const mainCards = () => {
  if ($('.main-cards').length) {
    //одинаковая высота элементов
    $('.main-cards .name').matchHeight();
    $('.main-cards .text').matchHeight();
  }
};

export default mainCards;
