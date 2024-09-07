/* 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
Equilátero: Os três lados são iguais. Isósceles: Dois lados iguais. Escaleno: Todos os lados são diferentes.
Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo)*/


function AreaTriangulo(lado1 = 0, lado2 = 0, lado3 = 0){
    if(lado1 == lado2 && lado1 == lado3) {
        console.log("Esse triangulo é EQUILÁTERO pois possue os 3 lados iguais")
    }else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        console.log("Esse triangulo é um ISÓSCELES pois possue 2 lados iguais")
    }else{
        console.log("Esse triangulo é um ESCALENO pois todos os lados são diferentes")
    }
}

AreaTriangulo(1, 0, 4)