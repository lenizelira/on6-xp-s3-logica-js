/* 3. Faça um programa que receba um valor em metros e chame uma função que converta em milímetros. */


const readline = require('readline-sync')

const valorMetros = parseFloat(readline.question("Digite um valor em metros: ") );



function conversao(metro){
    return (valorMetros*1000)
}
console.log("O valor em milímetros é: " + conversao(valorMetros)) 


