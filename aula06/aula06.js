let readline = require('readline-sync')

let numero1 = readline.question('Digite o PRIMEIRO numero? -->')
let numero2 = readline.question('Digite o SEGUNDO numero? -->')
let operacao = readline.question('Digite a OPERACAO numero? (SOMA) | (SUBTRACAO) | (DIVISAO) | (MULTIPLICACAO) -->')


switch(operacao) {
    case 'SOMA':
        console.log('A ' + operacao + ' entre ' + numero1 + ' e ' + numero2 + ' é:');
        console.log(parseInt(numero1)+parseInt(numero2))
        break

    case 'SUBTRACAO':
        console.log('A ' + operacao + ' entre ' + numero1 + ' e ' + numero2 + ' é:');
        console.log(parseInt(numero1)-parseInt(numero2))
        break

    case 'DIVISAO':
        console.log('A ' + operacao + ' entre ' + numero1 + ' e ' + numero2 + ' é:');
        console.log(parseInt(numero1)/parseInt(numero2))
        break
    
    case 'MULTIPLICACAO':
        console.log('A ' + operacao + ' entre ' + numero1 + ' e ' + numero2 + ' é:');
        console.log(parseInt(numero1)*parseInt(numero2))
        break

    default:
        console.log('Você não digitou corretamente ..... tente novamente')
        
}

