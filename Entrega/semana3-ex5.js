/* 5. Crie uma função que receba um número e devolva uma soma progressiva. Por exemplo, recebendo o número 5, a função deve retornar 15, ou seja, o resultado de 1 + 2 + 3 + 4 + 5.  */


const readline = require('readline-sync')

let numero = parseInt(readline.question("Digite um número para saber a sua progressão: ") );

let resultado = 0


function somaProgressiva(numero){

    
    for(i=1; i<=numero; i++){  
        resultado = resultado + i;
    }
    return resultado
}
console.log("A soma progressiva é: " + somaProgressiva(numero)) 