const botoes = document.querySelectorAll(".botao-like");

        botoes.forEach(function (botao) {

            let curtiu = false;

            botao.addEventListener("click", function () {

                const texto = botao.querySelector("span");
                let quantidade = Number(texto.textContent);

                if (!curtiu) {
                    quantidade++;
                    curtiu = true;
                    botao.classList.add("curtiu");
                } else {
                    quantidade--;
                    curtiu = false;
                    botao.classList.remove("curtiu");
                }

                texto.textContent = quantidade;
            });

        });
        