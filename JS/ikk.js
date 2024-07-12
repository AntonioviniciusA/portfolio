let lastScrollDown = window.scrollY;
let widthPercen = widthPercentage;

window.addEventListener('scroll', function() {
    const scrollDown = window.scrollY;
    // Calcula a diferença de rolagem desde o último ponto
    const scrollDiff = scrollDown - lastScrollTop;

    lastScrollDown = scrollDown;

    if (scrollDiff >= 100) {
        widthPercen -= 20;
        document.getElementById('lineheader').style.width = widthPercen + '%';
    }
});
   