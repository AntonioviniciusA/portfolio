let currentIndex = 0;
const slides = document.querySelectorAll(".carousel-control img");
const totalSlides = slides.length;
const slideWidth = slides[0].clientWidth + 10; // 10px é a margem entre as imagens

function updateCarousel() {
  const offset = -currentIndex * slideWidth;
  document.querySelector(".slides").style.transform = `translateX(${offset}px)`;
}

function moveSlide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1; // Volta para o último slide
  } else if (currentIndex >= totalSlides) {
    currentIndex = 0; // Volta para o primeiro slide
  }
  updateCarousel();
}

// Função para avançar automaticamente
function autoSlide() {
  moveSlide(1);
}

// Inicia o avanço automático a cada 3 segundos
let autoSlideInterval = setInterval(autoSlide, 3000);

// Para o avanço automático ao passar o mouse sobre o carrossel
const carousel = document.querySelector(".carousel-control");
carousel.addEventListener("mouseover", () => {
  clearInterval(autoSlideInterval);
});

// Reinicia o avanço automático ao sair do mouse
carousel.addEventListener("mouseout", () => {
  autoSlideInterval = setInterval(autoSlide, 3000);
});
