programa {
  funcao inicio() {
    inteiro intervalo = 1

    para (inteiro i = 10; i >= 1; i--) {
      escreva(i, " ...\n")
      esperar(intervalo)
    }

    para (inteiro i2 = 3; i2 >= 1; i2--) {
      escreva("BOOOOOOM!!!!!!!\n")
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
