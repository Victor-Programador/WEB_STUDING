/* 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração,
multiplicação e divisão desses valores. */


function calc(num1, num2){
    console.log('___________________________________________________________________________')
    console.log(`Soma do ${num1} + ${num2} é igal : ${num1 + num2}`)
    console.log(`Subtração de ${num1} - ${num2} é igual: ${num1 - num2}`)
    console.log(`Multiplicação de ${num1} X ${num2} é igual: ${num1 * num2}`)
    console.log(`Divisão de ${num1} / ${num2} é igual: ${num1 / num2}`)
    console.log('___________________________________________________________________________')
}


calc(1, 2)
calc(5, 10)
calc(10, 10)