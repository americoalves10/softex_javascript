console.clear()
let readline = require('readline-sync')

let nome = readline.question('DIGITE SEU NOME COMPLETO? ')
let dianasc = readline.question('DIGITE O DIA DE NASCIMENTO? ')
let mesnasc = readline.question('DIGITE O MES DE NASCIMENTO? ')
let anonasc = readline.question('DIGITE O ANO DE NASCIMENTO? ')
let curso = readline.question('QUAL O CURSO QUE VOCE FAZ? ')
let time = readline.question('QUAL O TIME QUE VOCE TORCE? ')

console.clear()

console.log('_________________________________________________________')
console.log('|_______________| FORMULÁRIO DE CADASTRO |_______________|')
console.log('|')
console.log('| NOME: '+nome)
console.log('|')
console.log('| DIA: '+dianasc+'/'+mesnasc+'/'+anonasc)
console.log('|')
console.log('| CURSO: '+curso)
console.log('|')
console.log('| TIME: '+time)
console.log('|')

let ano = 2025
let idade = ano - anonasc
if (idade >= 18) {
    console.log('| A T E N Ç Ã O !!!!!! USUÁRIO É DE MAIOR!!!!!!')
} else {
    console.log('| A T E N Ç Ã O ****** USUÁRIO É DE MENOR******')
}

console.log('_________________________________________________________')
