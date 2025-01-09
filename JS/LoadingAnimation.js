// Aguarda o carregamento da página
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const mainContent = document.getElementById("main-content");

  // Esconde a tela de loading após 3 segundos
  setTimeout(() => {
    loadingScreen.style.display = "none";
    mainContent.style.display = "block";
  }, 5910); // Ajuste o tempo de exibição do loading conforme necessário
});

// Aguarda o carregamento da página
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const mainContent = document.getElementById("main-content");

  // Esconde a tela de loading e exibe o conteúdo principal com animação
  setTimeout(() => {
    loadingScreen.style.display = "none";
    mainContent.classList.add("show");
  }, 5910); // Ajuste o tempo para corresponder ao fim do vídeo
});
