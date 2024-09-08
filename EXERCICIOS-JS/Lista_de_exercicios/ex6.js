/*06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/




/*Para calcular os juros simples, você pode usar a fórmula: J=C⋅i⋅t 
Onde:

(J) é o valor dos juros,
(C) é o capital inicial,
(i) é a taxa de juros (em decimal, por exemplo, 5% = 0,05),
(t) é o tempo de aplicação.

*/
function simples(captalInicial, taxa, tempo){        
    this.j = captalInicial * taxa * tempo
    console.log(this.j + captalInicial)
}

simples(1000, 0.05, 6)


/* Para calcular os juros compostos, você pode usar a fórmula:
M=C⋅(1+i)t
Onde:

(M) é o montante (valor final),
(C) é o capital inicial,
(i) é a taxa de juros (em decimal, por exemplo, 5% = 0,05),
(t) é o tempo de aplicação. */ 
function composto(captalInicial, taxa, tempo){
    console.log(this.j = captalInicial * (1 + taxa)**tempo)
}


composto(1000, 0.05, 6)