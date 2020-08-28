/* 1. Crie uma função que receba uma temperatura em Celsius e chame uma função que converta para Fahrenheit. F = 9*C/5 + 32 */

const readline = require('readline-sync')

const tempCelsius = parseFloat(readline.question("Digite uma temperatura em graus Celsius: ") );


    function conversao(tempCelsius){
    
        return(9*(tempCelsius/5)) + 32
    
    }
    console.log("A temperatura em Fahrenheit eh: " +conversao(tempCelsius)) 
    


    
