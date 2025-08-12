// Um Array composto por Objetos, chamado "IntersectionObserverEntry" é o que o navegador manda como primeiro argumento para o a function call back, que por sua vez é onde o mesmo array será atribuido ao pareametro "entradas" e utilizado a seguir.

const myObserver = new IntersectionObserver((entradas) => {
    console.log(entradas)
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.remove('hidden');
        entrada.target.classList.add('show');
      } else {
        entrada.target.classList.remove('show');
        entrada.target.classList.add('hidden');
      }
    })
})

const elements = document.querySelectorAll('.hidden');

elements.forEach((element) => myObserver.observe(element));

/*
--
new IntersectionObserver((entradas) => { ... }):

Quando você cria uma nova instância de IntersectionObserver, você precisa passar uma função de callback (aquela com (entradas) => { ... }).

Essa função de callback não é chamada imediatamente por você. Em vez disso, ela é uma função que você registra com o navegador.

myObserver.observe(element):

Para cada element que você quer monitorar (no seu caso, todos os elementos com a classe hidden), você chama myObserver.observe(element).

Ao fazer isso, você está dizendo ao navegador: "Por favor, myObserver, comece a vigiar este element para mim."

O Papel do Navegador 🌐:

O navegador assume a responsabilidade de monitorar a visibilidade de todos os elementos que foram "observados" pelo myObserver.

Sempre que um desses elementos cruza um limite de visibilidade (por exemplo, entra na tela, sai da tela, atinge uma certa porcentagem de visibilidade), o navegador detecta essa mudança.

Ao detectar essa mudança, o navegador chama automaticamente a função de callback que você definiu (aquela que começa com (entradas) => { ... }).

Quando o navegador chama essa função, ele passa um array de objetos IntersectionObserverEntry como o primeiro argumento. Esse array é exatamente o que o seu parâmetro entradas recebe.

Resumo do Fluxo:
Você define a função de callback e diz ao IntersectionObserver quais elementos monitorar. O navegador é o responsável por:

Detectar as mudanças de visibilidade nos elementos observados.

Chamar a função de callback automaticamente.

Fornecer o array entradas com as informações detalhadas sobre a intersecção no momento da chamada.
--
*/