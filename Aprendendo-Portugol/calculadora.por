programa {
  funcao inicio() {
    inteiro opcao = 0
    real num1, num2, resultado
 
    enquanto (opcao < 1 ou opcao > 5 ou opcao != 5) {
      escreva("Escolha sua operação:\n")
      escreva("1 - Adição\n")
      escreva("2 - Subtração\n")
      escreva("3 - Multiplicação\n")
      escreva("4 - Divisão\n")
      escreva("5 - Sair\n")
      escreva(">> ")
      leia(opcao)

      escolha (opcao) {
        caso 1: 
          escreva("Digite o 1° Número: ")
          leia(num1)
          escreva("Digite o 2° Número: ")
          leia(num2)
          resultado = num1 + num2
          escreva("Operação Adição realizada => ")
          escreva("( ", num1, " + ", num2, " = ", resultado, " )")
          pare
        caso 2:
          escreva("Digite o 1° Número: ")
          leia(num1)
          escreva("Digite o 2° Número: ")
          leia(num2)
          resultado = num1 - num2
          escreva("Operação Subtração realizada => ")
          escreva("( ", num1, " - ", num2, " = ", resultado, " )")
          pare
        caso 3:
          escreva("Digite o 1° Número: ")
          leia(num1)
          escreva("Digite o 2° Número: ")
          leia(num2)
          resultado = num1 * num2
          escreva("Operação Multiplicação realizada => ")
          escreva("( ", num1, " * ", num2, " = ", resultado, " )")
          pare
        caso 4:
          escreva("Digite o 1° Número: ")
          leia(num1)
          escreva("Digite o 2° Número: ")
          leia(num2)
          resultado = num1 / num2
          escreva("Operação Divisão realizada => ")
          escreva("( ", num1, " / ", num2, " = ", resultado, " )")
          pare
        caso 5:
          escreva("Saindo do programa...")
          pare
        caso contrario:
          escreva("\n ❌ Valor Inválido!\n")
          escreva("\n----------------------------------------")
      }
    }
  }
}
