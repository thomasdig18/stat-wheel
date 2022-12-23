const carousel = document.querySelector('#carousel');
const template = document.querySelector('#template');

// Handle dragstart event for carousel items
carousel.addEventListener('dragstart', (event) => {
  event.dataTransfer.setData('text/plain', event.target.innerHTML);
});

const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

let currentPosition = 0;

prevButton.addEventListener('click', () => {
  currentPosition -= 200;
  carousel.style.left = currentPosition + 'px';
});

nextButton.addEventListener('click', () => {
  currentPosition += 200;
  carousel.style.left = currentPosition + 'px';
});















template.addEventListener('drop', (event) => {
  event.preventDefault();
  const data = event.dataTransfer.getData('text/plain');
  event.target.innerHTML = data;
});

// Handle dragover event for template items
template.addEventListener('dragover', (event) => {
  event.preventDefault();
});
    
 


