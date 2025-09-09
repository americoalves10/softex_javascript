class Util {
    static linguagemDoSistema = "PT-BR";

    static obterDataProximoMes() {
        let now = new Date();
        let date;
        if (now.getMonth() == 11) {
            date = new Date(now.getFullYear() + 1, 0, now.getDate());
        } else {
            date = new Date(now.getFullYear(), now.getMonth() + 1, now.getDate());
        }

        return date.toLocaleDateString(this.linguagemDoSistema);
    }
}

console.log(`O próximo mês é: ${Util.obterDataProximoMes()}`);
console.log(`A linguagem do sistema está em: ${Util.linguagemDoSistema}`);
