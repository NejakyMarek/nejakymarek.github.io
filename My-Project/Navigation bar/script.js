const nav = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

nav.addEventListener('click', () => {
  links.classList.toggle('show-links');
})