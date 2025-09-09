import { PessoaBanco } from "./pessoa.ts"

export class PessoaFisica extends PessoaBanco {

    public cpf: string
    public idade: Number

    constructor(nome, endereco, cpf, idade) {
        super(nome, endereco)
        this.cpf = cpf
        this.idade = idade
    }

}

