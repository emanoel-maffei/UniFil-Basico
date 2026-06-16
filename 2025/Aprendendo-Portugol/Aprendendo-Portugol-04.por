programa {
  funcao inicio() {
    // Lógica de Programação com Portugol, Expressões Lógicas e Estruturas Condicionais

    // Operadores:
    //    Aritimericos:
    //        -, +, *, /
    //        subtração, adição, multiplicação, divisão
    // 
    //    Relacionais:
    //        <, <=, >, >=, ==, !=
    //        menor, menor/igual, maior, maior/igual, igual, diferente
    // 
    //    Lógicos:
    //        &&, ||, !
    //        e,  ou, negação

    // operador relacional 
    escreva("2 < 10: ")
    se (2 < 10) {
      escreva(verdadeiro)
    } senao {
      escreva(falso)
    }
    escreva("\n\n")

    // escreva("2 < 10: ", 2 < 10)

    // operador lógico
    // e
    escreva(verdadeiro e verdadeiro)
    escreva("\n")
    escreva(verdadeiro e falso)
    escreva("\n")
    escreva(falso e falso)
    escreva("\n")

    // ou
    escreva(verdadeiro ou verdadeiro)
    escreva("\n")
    escreva(verdadeiro ou falso)
    escreva("\n")
    escreva(falso ou falso)
    escreva("\n")
  }
}
