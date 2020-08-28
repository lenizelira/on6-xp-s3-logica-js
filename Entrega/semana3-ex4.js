/* 4. Crie uma função com as seguintes características:
   - A função deve receber 3 parâmetros.
   - Se somente um argumento for passado, retorne o valor do argumento.
   - Se dois parâmetros forem passados, retorne a soma dos dois parâmetros.
   - Se todos os parâmetros forem passados, retorne a soma do primeiro com o segundo, e o resultado dividido pelo terceiro.
   - Se nenhum argumento for passado, retorne "não recebeu parâmetro"
 */

const readline = require('readline-sync')

let parametros = parseInt(readline.question("Quantos parametros você quer passar? (entre 1 e 3): "));
let valor1 = 0
let valor2 = 0
let valor3 = 1 


if (parametros === 1){
  valor1 = parseInt(readline.question("Digite o primeiro valor: "))
} 
else if(parametros === 2){
  valor1 = parseInt(readline.question("Digite o primeiro valor: "))
  valor2 = parseInt(readline.question("Digite o segundo valor: "))
}
else if(parametros === 3){
  valor1 = parseInt(readline.question("Digite o primeiro valor: "))
  valor2 = parseInt(readline.question("Digite o segundo valor: "))
  valor3 = parseInt(readline.question("Digite o terceiro valor: "))
}
else{
  console.log("Não recebeu parâmetro!")
}


function resultado(valor_1, valor_2, valor_3){
  
    if (parametros === 1){
    console.log(`O valor digitado foi: ${valor1}`)
  } 
  else if(parametros === 2){
    const soma = valor1 + valor2
    console.log(`A soma dos valores ${valor1} e ${valor2} é: ${soma}`)
  }
  else if(parametros === 3){
    const equacao = (valor1 + valor2)/valor3
    console.log(`O resultado foi: ${equacao.toFixed(1)}`)
    }
}

resultado(valor1,valor2,valor3)
