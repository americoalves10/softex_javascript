class ContaCorrente {
    
    private saldo: number;
    
    constructor(saldoInicial: number) {
        this.saldo = saldoInicial
    }

    public obterSaldo(): number {
        return this.saldo
    }

    public depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
            console.log(`O DEPÓSITO de R$ ${valor} foi realizado.`)
        } else {
            console.log(`O valor de DEPÓSITO é inválido!!!!!`)
        }
    }

    public sacar(valor: number): void {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor
            console.log(`O SAQUE de R$ ${valor} foi realizado!!!!`)
        } else {
            console.log('Saldo insuficiente!!!!')            
        }
    }
}

let readline = require('readline-sync')

let depositoinicial = readline.question('Qual o valor do seu deposito inicial?')
const minhaConta = new ContaCorrente(depositoinicial);
let valor = readline.question('Qual o valor do seu deposito inicial?')
const deposito = new ContaCorrente(valor);
minhaConta.depositar(valor);

//minhaConta.sacar(200);
console.log(minhaConta.obterSaldo());