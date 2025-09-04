/*
classe: aluno
atributos
    matr (simples, pk, monovalorado)
    cpf (simples, monovalorado)
    nome (simples, monovalorado)
    endereco (composto)
        rua (simples)
        bairro (simples)
        cep (simples)
        cidade (simples)
        estado (simples)
        complemento (simples)
    telefone (simples, multivalorado)
metodo
    cursar 

classe: disciplina
atributos
    codigo (simples, monovalorado, pk)
    nome (simples, monovalorado)
metodo
    cursada


*/
/*
classe: locadora
atributos
    cnpj (simples, pk, monovalorado)
    razaosoc (simples, monovalorado)
    endereco (composto)
        rua (simples)
        bairro (simples)
        cep (simples)
        cidade (simples)
        complemento (simples)    
metodo
    possuirfunc
    possuirfilial 

classe: locadorafilial
atributos
    codigo (simples, monovalorado, pk)
    nome (simples, monovalorado)
    telefone (simples, multivalorado)
metodo
    possuirmatriz
    trabalhatrabalhafilial

classe: funcionario
atributos
    codigo (simples, monovalorado, pk)
    nome (simples, monovalorado)
    funcao (simples, monovalorado)
    idade (simples, monovalorado)
    cidade (simples, monovalorado)
metodo
    trabalhaloc
    trabalhafilial


*/