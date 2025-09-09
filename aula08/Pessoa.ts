class Pessoa {
    public nome: String
    public peso: String
    public idade: Number
    public cor: String
    public altura: Number
    public cor_olho: String

    constructor(nome, peso, idade, cor, altura, cor_olho) {
        this.nome = nome
        this.peso = peso
        this.idade = idade
        this.cor = cor
        this.altura = altura
        this.cor_olho = cor_olho
    }

    dormir() {
        console.log('O pessoa está dormindo')
    }
    comer() {
        console.log('hora do rango!!!!!')
    }
    correr() {
        console.log('HORA DE MALHAR UM POUCO!')
    }
    andar() {
        console.log('HORA DE RELAXAR UM POUCO!')
    }
    acordar() {
        console.log('BOM DIA! HORA DE ACORDAR!!!!!')
    }
    treinar() {
        console.log('VAI UMA BOLINHA AÍ?! BOA GAROTO!!!!!')
    }
}

//constructor(nome, peso, idade, cor, altura, cor_olho)
const pessoa1 = new Pessoa('joaquim', '58 Kg', 9, 'preta', 1.50, 'azul')
const pessoa2 = new Pessoa('diego', '101 Kg', 28, 'amarelo', 1.98, 'castanho')
const pessoa3 = new Pessoa('rogerio', '80 Kg', 37, 'branca', 1.75, 'verde')

console.log("Valores:", Object.values(pessoa1))
pessoa1.correr()
console.log("Valores:", Object.values(pessoa2))
pessoa2.comer()
console.log("Valores:", Object.values(pessoa3))
pessoa3.treinar()
