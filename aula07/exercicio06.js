console.clear()
let readline = require('readline-sync')

let operacao = readline.question('Digite a OPERACAO numero? (SOMA) | (SUBTRACAO) | (DIVISAO) | (MULTIPLICACAO) -->')
let numero1 = Number.parseInt(readline.question('QUAL A TABUADA QUE VOCÊ QUER IMPRIMIR? -->'))
numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let i = 0
switch(operacao) {
    case 'SOMA':
        console.clear()
        console.log('___________________________________________________')
        console.log('|_______________| TABUADA DE SOMA |_______________|')
        while (i<numeros.length) {
            console.log(numero1+' + '+ numeros[i] + ' = '+ (numero1+numeros[i]))
            i++
        }    
        break
    case 'MULTIPLICACAO':
        console.clear()
        console.log('___________________________________________________')
        console.log('|__________| TABUADA DE MULTIPLICACAO |___________|')
        while (i<numeros.length) {
            console.log(numero1+' X '+ numeros[i] + ' = '+ (numero1*numeros[i]))
            i++
        }    
        break    
    case 'DIVISAO':
        console.clear()
        console.log('___________________________________________________')
        console.log('|_____________| TABUADA DE DIVISAO |______________|')
        while (i<numeros.length) {
            console.log((numeros[i]*numero1)+' / '+ numero1 + ' = '+ (numeros[i]))
            i++
        }    
        break    
    case 'SUBTRACAO':
        console.clear()
        console.log('___________________________________________________')
        console.log('|____________| TABUADA DE SUBTRACAO |_____________|')
        while (i<numeros.length) {
            console.log((numeros[i]+numero1)+' - '+ numero1 + ' = '+ (numeros[i]))
            i++
        }    
        break    

    default:
        console.log('Você não digitou corretamente ..... tente novamente')
        
}

