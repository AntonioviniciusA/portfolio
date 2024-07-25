function mostrarAnoAtual() {
  const anoAtual = new Date().getFullYear();
  document.getElementById("ano").innerText = anoAtual;
}

mostrarAnoAtual();
