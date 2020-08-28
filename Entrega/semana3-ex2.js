/* 2. Agora faça o contrário, uma função que receba uma temperatura em Fahrenheit e chame uma função que converta para Celsius. */


const readline = require('readline-sync')

const tempF = parseFloat(readline.question("Digite uma temperatura em graus Fahrenheit: ") );



function conversaotemp(tempF) {
    return(tempF - 32) * 5/9

}
console.log("A temperatura em Celsius é: " +conversaotemp(tempF).toFixed(1)) 


