const hamburgerMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const dropDown = document.getElementById('mainMenu');

hamburgerMenu.addEventListener('click', open);
closeMenu.addEventListener('click', close);

function open() {
  dropDown.style.display = 'flex';
  dropDown.style.top = '0'
}

function close() {
  dropDown.style.top = '-100%';
}

