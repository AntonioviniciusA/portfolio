window.addEventListener('scroll', function() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    document.getElementById('lineheader').style.width = scrollPercent + '%';
  });

  const projetos = document.getElementById("btnprojetos");
  projetos.scroll(0, 1000);