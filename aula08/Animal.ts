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

Cachorro1.correr()
Cachorro2.comer()
Cachorro3.treinar()










/*class PilotoFormula1 {
    constructor(nomeDoPiloto, equipeDoPiloto, idadeDoPiloto) {
        this.nome = nomeDoPiloto;
        this.equipe = equipeDoPiloto;
        this.idade = idadeDoPiloto;
    }

    correr() {
        console.log('Vruuuuuuum!');
    }
}

const pilotos = []

const corredor1 = new PilotoFormula1('Ayrton Senna', 'McLaren', 29);
const corredor2 = new PilotoFormula1('Max Verstappen', 'Red Bull Racing', 26);
const corredor3 = new PilotoFormula1('Lewis Hamilton', 'Mercedes', 32);
const corredor4 = new PilotoFormula1('Charles Leclerc', 'Ferrari', 26);
const corredor5 = new PilotoFormula1('Lando Norris', 'McLaren', 27);

pilotos.push(corredor1)
pilotos.push(corredor2)
pilotos.push(corredor3)
pilotos.push(corredor4)
pilotos.push(corredor5)



for (const PilotoFormula1 of pilotos) {
    //console.log("Chaves:", Object.keys(PilotoFormula1));
    console.log("Valores:", Object.values(PilotoFormula1));
    //console.log("Entradas:", Object.entries(PilotoFormula1));
}
*/
