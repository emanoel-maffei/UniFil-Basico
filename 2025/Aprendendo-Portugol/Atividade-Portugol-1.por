programa {
  funcao inicio() {
    escreva("\n")

    // Parte 1: Marior idade
    inteiro idade
    escreva("Qual a sua Idade (apenas números)? ")
    leia(idade)

    se (idade >= 18) {
      escreva(idade, " anos, Você é maior de idade!")
    } senao {
      escreva(idade, " anos, Você é menor de idade")
    }
    escreva("\n\n")

    // Parte 2: Verificação de número impar
    inteiro numero
    escreva("Digite um Número Inteiro: ")
    leia(numero)

    se (numero % 2 == 1) {
      escreva("Número ", numero, " é Impar")
    } senao {
      escreva("Número ", numero, " é Par")
    }
    escreva("\n\n")

    // Parte 3: Calculo do IMC da pessoa
    real peso
    real altura
    escreva("Qual seu peso (kg)? ")
    leia(peso)
    escreva("Qual seu tamanho (metros)? ")
    leia(altura)

    real resultado = peso / (altura * altura)

    escreva("Resultados: ")
    se (resultado < 18.5) {
      escreva("Subpeso")
    } senao se (resultado >= 18.5 e resultado <= 24.9) {
      escreva("Peso Normal")
    } senao se (resultado >= 25 e resultado <= 29.9) {
      escreva("Exesso de peso")
    } senao se (resultado >= 30 e resultado <= 34.9) {
      escreva("Obesidade classe 1")
    } senao se (resultado >= 35 e resultado <= 39.9) {
      escreva("Obesidade classe 2")
    } senao se (resultado >= 40) {
      escreva("Obesidade classe 3")
    }



  escreva("\n")
  }
}
