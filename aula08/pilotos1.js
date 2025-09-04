class PilotoFormula1 {
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

