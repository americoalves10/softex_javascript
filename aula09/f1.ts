import { Veiculo } from "./veiculo.ts"

export class F1 extends Veiculo {
    public tamanho: Number

    constructor(roda, placa, tamanho) {
        super(roda, placa)
        this.tamanho = tamanho
    }

    velocidade() {

    }

}