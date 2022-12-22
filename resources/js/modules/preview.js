import autosize from 'autosize';

const preview = () => {
  if ($('.examination__preview').length) {
    // размер textarea
    autosize($('.examination__preview textarea'));

    // редактирование
    const editBtn = $('.examination__preview .edit');

    editBtn.on('click', function () {
      $(this).prev().removeAttr('readonly');
    });
  }
};

export default preview;
