const tabs = () => {
  const tabs = document.querySelectorAll('[data-tab]');

  tabs.forEach((tab) => {
    tab.addEventListener('click', function () {
      const tabName = tab.getAttribute('data-tab');

      console.log(tabName);
    });
  });
};

export default tabs;
