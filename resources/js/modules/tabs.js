const tabs = () => {
  if ($('.js-tabs').length) {
    const tabs = $('[data-tab]');

    tabs.on('click', function () {
      const tabName = $(this).attr('data-tab');
      const currentTabContent = $(
        `.js-tabs-content[data-tab-content="${tabName}"]`
      );
      const siblingsTabContent = currentTabContent.siblings('.js-tabs-content');

      $(this).addClass('active').siblings('[data-tab]').removeClass('active');
      siblingsTabContent.removeClass('active');
      currentTabContent.addClass('active');
    });
  }
};

export default tabs;
