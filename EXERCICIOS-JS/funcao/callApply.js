function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const Carro = {preco: 49990, desc: 0.20}

console.log(getPreco.call(Carro))
console.log(getPreco.apply(Carro))
//diferença é como passa os parametros dentro da funcao
console.log(getPreco.call(Carro, 0.17, '$'))

console.log(getPreco.apply(Carro, [0.17, '$']))