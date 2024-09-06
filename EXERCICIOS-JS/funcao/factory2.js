// minha tentativa de fazer funçao factory (o meu ficou melhor que o do professor)

function criarProduto(nome, preco){
    if (preco > 50.00){
        desconto = preco - (preco * 0.20)
    }

    return {
        nomeProduto: nome,
        precoProduto: preco,
        descontoVintePorcento: desconto
    }
}

console.log(criarProduto("Celular", 450.50))

// como o professor fez em aula
function criarProduto2(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto2('noreboo', 2199.49))