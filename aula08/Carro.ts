class Carro {
    public marca: String
    public cor: String
    public modelo: String
    public placa: String
    public ano: Number
    
    constructor(marca, cor, modelo, placa, ano) {
        this.marca = marca
        this.cor = cor
        this.modelo = modelo
        this.placa = placa
        this.ano = ano

    }

    ligar() {
        console.log('O CARRO ESTÁ FUNCIONANDO !!!!!')

    }
    desligar() {
        console.log('O CARRO ESTÁ DESLIGADO AGORA !!!!!')
    }
    
}



const carro1 = new Carro('fiat', 'verde', 'mobi', 'kiz1234', 2025)
const carro2 = new Carro('ford', 'azul', 'focus', 'ped0987', 2020)

carro1.ligar()
carro1.desligar()
console.log(carro1.cor)
console.log(carro2.placa)

carro2.ligar()