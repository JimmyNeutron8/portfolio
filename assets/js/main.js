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
});

// Media query detection
function widthChange (mq) {
  if (mq.matches) {
    menu.style.display = 'flex';
  }else{
    menu.style.display = 'none';
  }
}

const mq = window.matchMedia('(min-width: 576px)');
mq.addListener(widthChange);
widthChange(mq);
