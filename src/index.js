const clickToggle = function (element) {
  element.addEventListener('click', () => {
    element.classList.toggle('clicked');
  });
};

const siteNavButton = document.querySelector('#site-nav-button');
clickToggle(siteNavButton);

const siteNavList = document.querySelector('.site-nav-list');

const toggleMenu = function () {
  siteNavList.classList.toggle('inactive');
  siteNavList.classList.toggle('animate');
}

siteNavButton.addEventListener('click', toggleMenu);
