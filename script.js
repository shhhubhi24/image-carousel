const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel-image');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');

let currentIndex = 0;
let interval;

// Update slide
function showSlide(index) {
  if (index >= images.length) currentIndex = 0;
  else if (index < 0) currentIndex = images.length - 1;
  else currentIndex = index;

  const slideWidth = carousel.clientWidth;
  carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

  updateDots();
}

function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

// Auto-slide
function startAutoSlide() {
  interval = setInterval(() => {
    showSlide(currentIndex + 1);
  }, 3000);
}

function stopAutoSlide() {
  clearInterval(interval);
}

// Event Listeners
prevBtn.addEventListener('click', () => {
  showSlide(currentIndex - 1);
});

nextBtn.addEventListener('click', () => {
  showSlide(currentIndex + 1);
});

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => showSlide(i));
});

document.querySelector('.carousel-container').addEventListener('mouseover', stopAutoSlide);
document.querySelector('.carousel-container').addEventListener('mouseleave', startAutoSlide);

// Init
showSlide(currentIndex);
startAutoSlide();

