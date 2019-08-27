// Elements
const fadeOnLoadElements = document.querySelectorAll('.fade-on-load');
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu-primary');

fadeOnLoadElements.forEach(element => {
  element.style.opacity = 1;
});

menuToggle.addEventListener('click', () => {
  if (menu.style.display === 'flex') {
    menu.style.display = 'none';
  }else{
    menu.style.display = 'flex';
  }

  console.log('YO');
});
