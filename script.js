document.addEventListener('DOMContentLoaded', () => {

    /* vai ser executado logo em seguida do carregamendo completo da pagina */
    
    // captura do botao 
    const webSite001 = document.getElementById('web-site-001');
    const webSite002 = document.getElementById('web-site-002');
    const webSite003 = document.getElementById('web-site-003');
    const webSite004 = document.getElementById('web-site-004');
    const webSite005 = document.getElementById('web-site-005');
    let clicado = false;
    let buttonClicado = null;
    
    // capturando div-aviso
    const divTermos = document.getElementById('div-termos');

    // captrando borrar
    const borrar = document.getElementById('borrar');

    function SomeButtonClicked(button) {
        if (!clicado) {
            // definindo botao clicado
            buttonClicado = button;
            console.log(`Botão Clicado: ${buttonClicado}`);
            borrar.style.visibility = 'visible';
            borrar.style.opacity = '0.85';
            // aparecer termos
            divTermos.style.visibility = 'visible';
            divTermos.style.opacity = '1';
            divTermos.style.top = '10%';
            switch (buttonClicado) {
                case 2: divTermos.style.transform = "translate(-50%, -10%) rotate(180deg)";
                    break;
                case 3: divTermos.style.transform = "translate(-50%, -10%) rotate(-135deg)";
                    break;
                case 4: divTermos.style.transform = "translate(-50%, -10%) rotateX(60deg) rotateY(-60deg)";
                    break;
                case 5: divTermos.style.transform = "translate(-50%, -10%) rotateX(0deg) rotateY(180deg)";
                        divTermos.style.filter = "invert(100%)";
                break;
            }

            // inversao de 'clicado'
            clicado = true;
        }
    }

    webSite001.addEventListener('click', () => {
        SomeButtonClicked(1)
    });
    webSite002.addEventListener('click', () => {
        SomeButtonClicked(2)
    });
    webSite003.addEventListener('click', () => {
        SomeButtonClicked(3)
    });
    webSite004.addEventListener('click', () => {
        SomeButtonClicked(4)
    });
    webSite005.addEventListener('click', () => {
        SomeButtonClicked(5)
    });

    borrar.addEventListener('click', () => {
        if (clicado) {
            buttonClicado = null;
            console.log(`Botão Clicado: ${buttonClicado}`);
            // borrar tela
            borrar.style.opacity = '0';
            borrar.style.visibility = 'hidden';
            // aparecer termos
            divTermos.style.top = '0%';
            divTermos.style.opacity = '0';
            divTermos.style.visibility = 'hidden';
            divTermos.style.transform = "translate(-50%, -10%)"

            // inversao de 'clicado'
            clicado = false;
        }
    });

    // capturando botao 1 dos termos
    const buttonTermos1 = document.getElementById('button-termos-1');
    // capturando botao 2 dos termos
    const buttonTermos2 = document.getElementById('button-termos-2');

    let sobreButtonTermos = false;
    function AlternarButtonTermos() {
        if (!sobreButtonTermos) {
            // alterando textos
            buttonTermos1.innerHTML = 'Rod';
            buttonTermos1.style.transform = 'scale(3) rotate(-5deg)';
            buttonTermos2.innerHTML = 'Sim';
            // invertendo 'sobreButtonTermos'
            sobreButtonTermos = true;
        } else {
            // alterando textos
            buttonTermos1.innerHTML = 'Sim';
            buttonTermos1.style.transform = 'scale(3) rotate(0deg)';
            buttonTermos2.innerHTML = 'Não';
            // invertendo 'sobreButtonTermos'
            sobreButtonTermos = false;
        }
    }

    // ao entrar
    buttonTermos1.addEventListener('mouseenter', AlternarButtonTermos);
    buttonTermos2.addEventListener('mouseenter', AlternarButtonTermos);
    // ao sair
    buttonTermos1.addEventListener('mouseout', AlternarButtonTermos);
    buttonTermos2.addEventListener('mouseout', AlternarButtonTermos);

    let anguloBody = 0;
    function ClicouButtonTermos(button) {
        if (button == buttonTermos1) {
            // caso clique em nao ('sim')
            borrar.click();
            anguloBody -= Math.round(Math.random() * 675) + 45;
            document.body.style.transform = `rotate(${anguloBody}deg)`;
            document.body.style.scale = `0.${Math.round(Math.random() * 5) + 2}`;
        } else if (button == buttonTermos2) {
            // caso clique em sim ('nao')
            switch (buttonClicado) {
                case 1: location.href = 'Web-sites/combinacao-perfeita.html';
                    break;
                case 2: location.href = 'Web-sites/Menu-Responsivo/menu-responsivo.html';
                    break;
                case 3: location.href = "Web-sites/Variaveis-CSS/variaveisCSS.html";
                    break;
                case 4: location.href = "Web-sites/Animation-on-Scroll-JS/animation-on-scroll.html";
                    break;
                case 5: location.href = "Web-sites/click_mousedown.html";
                    break;
                    
            }
        }
    }

    //co clicar
    buttonTermos1.addEventListener('click', () => {
        ClicouButtonTermos(buttonTermos1);
    });
    buttonTermos2.addEventListener('click', () => {
        ClicouButtonTermos(buttonTermos2);
    });

})



