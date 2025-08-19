let readline = require('readline-sync')

let nome = readline.question('Qual o seu nome?')
console.log(nome)


let n1 = 2
let fruta = "banana"
if (n1 >= 7 || fruta == "banana") {
    console.log('APROVADO')
} else {
    console.log('REPROVADP')
}