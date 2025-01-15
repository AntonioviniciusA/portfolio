// Selecionar os elementos
const track = document.querySelector(".carousel-track");
const items = document.querySelectorAll(".carousel-item");
const itemWidth = items[0].offsetWidth; // Largura do item + margem
let position = -10000;
// Função para duplicar os itens
function duplicateItems() {
  for (let i = 0; i < 99; i++) {
    // Repetir 3 vezes para ter 4 conjuntos de itens
    items.forEach((item) => {
      const clone = item.cloneNode(true); // Clona o item
      track.appendChild(clone); // Adiciona o item clonado no final da lista
    });
  }
}
// Função para mover o carrossel
function moveCarousel() {
  position += 1; // Move para a direita
  track.style.transform = `translateX(${position}px)`;

  // Verifica se o último item saiu completamente da tela
  const firstItem = track.firstElementChild;
  const firstItemRect = firstItem.getBoundingClientRect();
  const containerRect = track.parentElement.getBoundingClientRect();

  if (firstItemRect.left > containerRect.right) {
    // Quando o último item sai da tela, reinicia a animação
    position = -10000; // Reseta a posição para reiniciar o movimento
    track.style.transform = `translateX(${position}px)`; // Reseta a posição imediatamente
  }
}
duplicateItems();
// Configurar o intervalo para animação
setInterval(moveCarousel, 30); // Ajuste o intervalo para controlar a velocidade
