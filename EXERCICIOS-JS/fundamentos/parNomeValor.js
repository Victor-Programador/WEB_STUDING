// par nome/valor
const saudacao = 'opa' // contexto léxico 1

function exec() {
    const saudacao = 'falaaa' // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor

const Cliente = {
    nome:  'pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'rua rodeio bonito',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)

