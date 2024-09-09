/* 07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto,
elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três
parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3,
-5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo
que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase:
“Delta é negativo”.*/


function Bhaskara(ax2, bx, c) {
    this.delta = (bx ** 2) - 4 * ax2 * c
    if (this.delta < 0) {
        console.log("Delta é negativo")
    }else{
        x1 = (-(bx) + Math.sqrt(this.delta)) / 2 * ax2
        x2 = (-(bx) - Math.sqrt(this.delta)) / 2 * ax2

        console.log(x1, x2)
    }
}

Bhaskara(3, -5, 12)


/* Para resolver uma equação do segundo grau usando a fórmula de Bhaskara, siga os passos abaixo:
Fórmula de Bhaskara
A fórmula de Bhaskara é:
x=2a−b±Δ​​
Onde:

(x) são as raízes da equação,
(a), (b) e (c) são os coeficientes da equação (ax^2 + bx + c = 0),
(\Delta) é o discriminante, calculado como (\Delta = b^2 - 4ac).

Passos para Resolver

Identifique os coeficientes (a), (b) e (c) na equação.
Calcule o discriminante (\Delta):

Δ=b2−4ac

Substitua os valores na fórmula de Bhaskara:

x=2a−b±Δ​​
Exemplo Prático
Vamos resolver a equação (2x^2 - 4x - 6 = 0):

Identifique os coeficientes: (a = 2), (b = -4), (c = -6).
Calcule o discriminante:

Δ=(−4)2−4⋅2⋅(−6)=16+48=64

Substitua na fórmula de Bhaskara:

x=2⋅2−(−4)±64​​=44±8​

Calcule as raízes:

x1​=44+8​=3
x2​=44−8​=−1
Portanto, as raízes da equação (2x^2 - 4x - 6 = 0) são (x = 3) e (x = -1). */