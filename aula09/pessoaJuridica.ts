import { PessoaBanco } from "./pessoa.ts"

export class PessoaJuridica extends PessoaBanco {

    public cnpj: string
    public dataAbertura: Number

    constructor(nome, endereco, cnpj, dataAbertura) {
        super(nome, endereco)
        this.cnpj = cnpj
        this.dataAbertura = dataAbertura
    }

    
    
}


