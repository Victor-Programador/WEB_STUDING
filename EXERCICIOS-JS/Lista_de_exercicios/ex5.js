/* 05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o
seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa
importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer
um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para
que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
*/

function money(num1){
    this.num1 = num1.toFixed(2) // to fixed serve para abreviar a expressao decimal, entre os parenteses vc coloca quanstas casa quer depois da virgula

    this.num2 = num1.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'}) 

    console.log(this.num1)
    console.log(this.num2)
}

money(0.30000000000000004)

/*O método .toLocaleString() em JavaScript é usado para converter um número, data ou array em uma string de acordo com as convenções de formatação de uma localidade específica.
 Ele é muito útil para formatar números com separadores de milhar, datas em formatos regionais, ou valores monetários.

 SINTAXE:

 numObj.toLocaleString([locales[, options]])


 Parâmetros
locales (opcional): Uma string com uma tag de linguagem BCP 47 ou uma matriz dessas strings. Exemplo: 'pt-BR' para português do Brasil.
options (opcional): Um objeto com propriedades que permitem personalizar a formatação. Algumas opções comuns incluem:
style: Pode ser 'decimal', 'currency' ou 'percent'.
currency: O código da moeda, como 'BRL' para reais.
minimumFractionDigits e maximumFractionDigits: O número mínimo e máximo de casas decimais.

Exemplos
Formatação de Números:

let numero = 1234567.89;
console.log(numero.toLocaleString('pt-BR')); // "1.234.567,89"


Formatação de Moeda:

let valor = 1234567.89;
console.log(valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })); // "R$ 1.234.567,89"


Formatação de Datas:

let data = new Date();
console.log(data.toLocaleString('pt-BR')); // "07/09/2024 03:46:03"


O método .toLocaleString() é bastante flexível e pode ser ajustado para atender a diversas necessidades de formatação


https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString */