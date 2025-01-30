const projetos = [
            { url: "https://flyergen.netlify.app/", img: "IMAGE/454659318_1223902839036800_1049136231319704015_n.png", alt: "imagem do site sobre panfletos" },
            { url: "/Bompravoce.html", img: "IMAGE/Bom pra voce.png", alt: "imagem do site sobre Café" },
            { url: "https://prevenirhipertensao.netlify.app/", img: "IMAGE/453323963_2697523823762149_3548373700704308313_n.png", alt: "imagem do site sobre saúde" },
            { url: "/calculadora.html", img: "IMAGE/calculadora.png", alt: "imagem do site sobre calculadora" }
        ];
        
        const container = document.getElementById("projetosContainer");
        
        projetos.forEach(projeto => {
            const div = document.createElement("div");
            div.classList.add("projeto");
            div.innerHTML = `<a href="${projeto.url}"><img src="${projeto.img}" alt="${projeto.alt}"></a>`;
            container.appendChild(div);
        });