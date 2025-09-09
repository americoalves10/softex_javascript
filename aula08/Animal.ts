class Cachorro {
    public raca: String
    public peso: String
    public idade: Number
    public cor: String
    public altura: Number
    public pedigree: String

    constructor(raca, peso, idade, cor, altura, pedigree) {
        this.raca = raca
        this.peso = peso
        this.idade = idade
        this.cor = cor
        this.altura = altura
        this.pedigree = pedigree

    }

    dormir() {
        console.log('O cachorro está dormindo')
    }
    comer() {
        console.log('hora do rango!!!!!')
    }
    correr() {
        console.log('PEGA ! PEGA! PEGA!')
    }
    latir() {
        console.log('AU! AU! AU!')
    }
    acordar() {
        console.log('BOM DIA! HORA DE ACORDAR!!!!!')
    }
    treinar() {
        console.log('VAI PEGAR A BOLINHA! BOA GAROTO!!!!!')
    }
}

const Cachorro1 = new Cachorro('pastor alemao', '13 Kg', 9, 'preta', 0.90, 'sim')
const Cachorro2 = new Cachorro('labrador', '10 Kg', 10, 'caramelo', 0.80, 'nao')
const Cachorro3 = new Cachorro('akita', '7 Kg', 5, 'branca', 1.00, 'sim')

console.log("Valores:", Object.values(Cachorro1))
Cachorro1.correr()
console.log("Valores:", Object.values(Cachorro2))
Cachorro2.comer()
console.log("Valores:", Object.values(Cachorro3))
Cachorro3.treinar()
