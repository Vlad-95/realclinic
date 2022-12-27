const tabs = () => {
  function simpleTabs() {
    const tabsMainElem = $('.js-tabs');
    const tabs = tabsMainElem.find('[data-tab]');

    tabs.on('click', function () {
      const tabName = $(this).attr('data-tab');
      const currentTabContent = $(
        `.js-tabs-content[data-tab-content="${tabName}"]`
      );
      const siblingsTabContent = currentTabContent.siblings('.js-tabs-content');

      $(this).addClass('active').siblings('[data-tab]').removeClass('active');
      siblingsTabContent.hide();
      currentTabContent.fadeIn();
    });
  }

  //табы: левая/правая сторона
  function addCardTabs() {
    const tabsMainElem = $('.js-card-tabs');
    const tabs = tabsMainElem.find('[data-card-tab]');

    tabs.on('click', function () {
      const tabName = $(this).attr('data-card-tab');
      const currentTabContent = $(
        `.js-card-tabs-content[data-card-tab-content="${tabName}"]`
      );
      const siblingsTabContent = currentTabContent.siblings(
        '.js-card-tabs-content'
      );

      $(this).parent().addClass('active').siblings().removeClass('active');
      siblingsTabContent.hide();
      currentTabContent.fadeIn();
    });
  }

  simpleTabs();
  addCardTabs();
};

export default tabs;
