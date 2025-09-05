class Celular {
    public marca: String
    public cor: String
    public modelo: String
    public camera: String
    public flip: Boolean
    public memoria: String
    
    constructor(marca, cor, modelo, camera, flip, memoria){
        this.marca = marca
        this.cor = cor
        this.modelo = modelo
        this.camera = camera
        this.flip = flip
        this.memoria = memoria
    }   
    
    ligar() {
        console.log('O aparelho está LIGADO!!!!!!!!!!!!!!!!')
    }
    desligar() {
        console.log('O aparelho está DESLIGADO!!!!!!!!!!!!!!!!')
    }
    tocar() {
        console.log('VOCÊ ESCOLHEU TOCAR ESSA MÚSICA!!!!!!!!!!!!!!!!')        
    }
    vibrar() {
        console.log('O aparelho está VIBRANDO!!!!!!!!!!!!!!!!')
    }
    armazenar() {
        console.log('O DOCUMENTO FOI ARMAZENADO!!!!!!!!!!!!!!!!')
    }
    travar() {
        console.log('O aparelho está TRAVADO!!!!!!!!!!!!!!!!')
    }    
}

const Celular1 = new Celular('samsung', 'preta', 'A02', '5.0 mp', 'nao', '128 Gb')
const Celular2 = new Celular('motorola', 'azul', 'g53', '6.0 mp', 'nao', '256 Gb')
const Celular3 = new Celular('iphone', 'branco', '15', '8.0 mp', 'nao', '256 Gb')

console.log("Valores:", Object.values(Celular1))
Celular1.vibrar()
console.log("Valores:", Object.values(Celular2))
Celular2.travar()
console.log("Valores:", Object.values(Celular3))
Celular3.ligar()
