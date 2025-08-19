let readline = require('readline-sync')

let resposta = readline.question('Qual o ano de nascimento?')
let ano = 2025
let idade = ano - resposta
if (idade >= 18) {
    console.log('PRESO')
} else {
    console.log('SOLTO')
}