        let lastScrollTop = 0;
        let widthPercentage = 0;
        window.addEventListener('scroll', function() {
            const scrollTop = window.scrollY;
            const scrollDiff = scrollTop - lastScrollTop;
            lastScrollTop = scrollTop;
            if (scrollDiff >= 100) {
                widthPercentage += 10;
                if (widthPercentage > 100) {
                    widthPercentage = 100; 
                }
                document.getElementById('lineheader').style.width = widthPercentage + '%';
            }
        });