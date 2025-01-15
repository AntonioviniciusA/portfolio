// Aguarda o carregamento da página
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const mainContent = document.getElementById("main-content");

  // Esconde a tela de loading após 3 segundos
  setTimeout(() => {
    loadingScreen.style.display = "none";
    mainContent.style.display = "block";
  }, 5000); // Ajuste o tempo de exibição do loading conforme necessário
});
