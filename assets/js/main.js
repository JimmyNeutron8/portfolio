// Elements
const fadeOnLoadElements = document.querySelectorAll('.fade-on-load');

window.addEventListener('load', () => {
  fadeOnLoadElements.forEach(element => {
    element.style.opacity = 1;
  });
});
