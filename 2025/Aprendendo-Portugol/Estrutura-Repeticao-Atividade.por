programa {
  funcao inicio() {
    /* primeira parte */
    inteiro intervalo = 1

    para (inteiro i = 10; i >= 1; i--) {
      escreva(i, " ...\n")
      esperar(intervalo)
    }

    para (inteiro i = 3; i >= 1; i--) {
      escreva("BOOOOOOM!!!!!!!\n")
    }
    escreva("\n")

    /* segunda parte */
    inteiro combustivel = 100

    enquanto (combustivel > 0) {
      escreva("Verificando combustível: ", combustivel, " unidades restantes.\n")
      combustivel -= 15
    }

    escreva("Combustível insuficiente.\n\n")

    /* terceira parte */

    /* Enunciado do Exercicio: Monitor de Estabilidade da Nave */
    inteiro senha = 1234
    inteiro resposta
    inteiro tentativa = 0

    faca {
      /* verificação da quantidade de tentativas */
      se (tentativa == 3) {
        pare
      }
      escreva("senha: ")
      leia(resposta)
      tentativa++
    } enquanto (resposta != senha)

    se (resposta != senha) {
      escreva("⚠ ACESSO BLOQUEADO ⚠")
    } senao {
      escreva("ACESSO PERMITIDO")
    }
  }

  funcao esperar(inteiro segundos) {
    /* sujestão do professor: 18.400.000 */
    /* inteiro limite = segundos * 18400000 */

    inteiro limite = segundos * 9000000
    /*
      para ocorrer um atraso de aproximadamente 1 segundo é executado
      o mesmo bloco de código vazio dentro de um laço de repetição
      por um número limite (pode mudar entre computadores) de
      vezes para que o tempo de processamento chegue perto de 1 segundo
    */
    para (inteiro contador = 0; contador < limite; contador++) {}
  }
}
