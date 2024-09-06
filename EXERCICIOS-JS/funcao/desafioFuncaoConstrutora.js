// feito por mim

function Pessoa(nome){
    this.falar = () => console.log(`Meu nome é ${nome}`)
}

const p1 = new Pessoa('Victor')
p1.falar()

// feito pelo professor

function Pessoa2(nome) {
    this.nome = nome

    this.falar = function() {
        console.log(`Meu nome é ${this.nome} tambem`)
    }
}

const p2 = new Pessoa2('Victor')
p2.falar()