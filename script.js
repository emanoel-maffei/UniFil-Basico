document.addEventListener('DOMContentLoaded', () => {

    /* vai ser executado logo em seguida do carregamendo completo da pagina */
    
    // captura do botao 
    const webSite001 = document.getElementById('web-site-001');
    let clicado = false;
    
    // capturando div-aviso
    const divTermos = document.getElementById('div-termos');

    // captrando borrar
    const borrar = document.getElementById('borrar');

    webSite001.addEventListener('click', () => {
        if (!clicado) {
            // borrar tela
            borrar.style.visibility = 'visible';
            borrar.style.opacity = '0.85';
            // aparecer termos
            divTermos.style.visibility = 'visible';
            divTermos.style.opacity = '1';
            divTermos.style.top = '10%';

            // inversao de 'clicado'
            clicado = true;
        }
    });

    borrar.addEventListener('click', () => {
        if (clicado) {
            // borrar tela
            borrar.style.opacity = '0';
            borrar.style.visibility = 'hidden';
            // aparecer termos
            divTermos.style.top = '0%';
            divTermos.style.opacity = '0';
            divTermos.style.visibility = 'hidden';

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
            buttonTermos1.style.transform = 'scale(3) rotate(-1.5deg)';
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

    function ClicouButtonTermos(button) {
        if (button == buttonTermos1) {
            // caso clique em 'nao'
            borrar.click();
            document.body.style.transform = 'rotate(-135deg)';
            document.body.style.scale = '0.5';
        }
    }

    //co clicar
    buttonTermos1.addEventListener('click', () => {
        ClicouButtonTermos(buttonTermos1);
    });
    buttonTermos2.addEventListener('click', () => {

    });
})
