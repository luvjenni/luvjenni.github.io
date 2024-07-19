
const carouselElement = document.querySelector('#carouselProjects');
const carouselTitle = document.querySelector('#carouselTitle');

const titles = [
  'POS Convenience Store System',
  'Fluffy Room Hotel Management System',
  'Fruit Array Project',
  'Add, Delete, Update Project',
  '0-10 Limit Calculator',
  'Loaning Calculator',
  'Portfolio Website',
  'PDIC Government Website',
  'Duplicate Government Website'
];

carouselElement.addEventListener('slide.bs.carousel', (event) => {
  console.log('Slide event:', event.to); // Check if event is firing
  carouselTitle.textContent = titles[event.to];
});

document.addEventListener('DOMContentLoaded', () => {
  carouselTitle.textContent = titles[0];
});


