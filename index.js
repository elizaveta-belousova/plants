let menuList = document.querySelector('.menu-list');
let menuButton = document.querySelector('.menu-button');

menuButton.addEventListener('click', openMenuList);

function openMenuList() {
  menuList.classList.toggle('menu-show')
};

