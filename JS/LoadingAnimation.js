// Aguarda o carregamento da página
window.addEventListener("load", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const mainContent = document.getElementById("main-content");
  const footer = document.getElementById("footer");
  const body = document.body;
  setTimeout(() => {
    mainContent.style.display = "block";
    footer.style.display = "flex";
    body.style.backgroundColor = "transparent"; // Permite o scroll do body
  }, 3000); // Ajuste o tempo de exibição do loading conforme necessário
  setTimeout(() => {
    loadingScreen.style.display = "none";
  }, 5000); // Ajuste o tempo de exibição do loading conforme necessário
});
