import { PessoaBanco } from "./pessoa.ts"
import { PessoaFisica } from "./pessoaFisica.ts"
import { PessoaJuridica } from "./pessoaJuridica.ts"

const pf1 = new PessoaFisica("americo", "olinda", "11111111111", 50)
const pj1 = new PessoaJuridica ("softex", "recife", "11111111111111", "20jan25")

console.log(pf1.nome)
console.log(pj1.nome)

