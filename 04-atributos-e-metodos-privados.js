class Imposto {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    #porcentagemImposto = 0.20;

    #calcularImposto() {
        return this.salario * this.#porcentagemImposto;
    }

    obterSalarioLiquido() {
        return this.salario - this.#calcularImposto();
    }
}

let pes1 = new Imposto("José", 1000);
console.log(`O salário liquido de ${pes1.nome} é: R$ ${pes1.obterSalarioLiquido()}`);

// pessoa1.#porcentagemImposto ou pessoa1.porcentagemImposto retornam undefined
// pessoa1.#calcularImposto() ou pessoa1.calcularImposto() retornam um erro