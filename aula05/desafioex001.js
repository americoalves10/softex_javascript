let readline = require('readline-sync')

let resposta = readline.question('  _______________|FORMULÁRIO DE CADASTRO|_______________?')
console.log('|                                                         |')
console.log('|                                                         |')
console.log('|                                                         |')
console.log('|                                                         |')
console.log('|                                                         |')
console.log('|                                                         |')
console.log('|                                                         |')
console.log('|                                                         |')
console.log('|                                                         |')
console.log('|_________________________________________________________|')
let ano = 2025
let idade = ano - resposta
if (idade >= 18) {
    console.log('PRESO')
} else {
    console.log('SOLTO')
}