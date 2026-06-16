// isto funciona
const cCard3 = document.querySelector(".c-card:nth-child(3)")

/*
    Variáveis CSS são:
        Propriedade Personalizadas
                    ou
        Custom Property (em inglês)
*/
cCard3.style.setProperty("--_hue", "300");


// ---------------------------------------------- //

/* Modifica/Define uma variável CSS globalmente: */

//document.documentElement.style.setProperty('--bg-color-global', 'blue');

/* documentElement é uma propriedade do objeto document que 
retorna o elemento raiz do documento, que é a tag <html>*/

// ---------------------------------------------- //

/* Adquire o valor de uma variável CSS: */

//const estiloComputado = getComputedStyle(cCard3);
//const corAtual = estiloComputado.getPropertyValue('--_hue');

// ---------------------------------------------- //