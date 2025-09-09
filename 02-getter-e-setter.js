<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Getter e Setter</title>
</head>
<body>
    <script>
        //PRIMEIRA PARTE
        class Pessoa {
            nome;
            
            get getUsername () {
                return this.nome;
            }

            set setNome (nome) {
                this.nome = nome;
            }
        }

        let pessoa1 = new Pessoa();
        pessoa1.setNome = "Teste Pessoa";
        console.log('Nome: ', pessoa1.getUsername);



        // SEGUNDA PARTE
        /*class Pessoa {
            nome;
            
            get getUsername () {
                return this.kebabCase(this.nome);
            }

            set setNome (nome) {
                if(!nome) {
                    throw new Error('O nome não pode ser vazio');
                }
                
                if(this.verificaCaracteresEspeciais(nome)) {
                    throw new Error('O nome não pode ter caracteres especiais');
                }

                this.nome = nome;
            }

            // retorna uma string no formato: string-separada-por-hifen
            kebabCase (string) {
                return string
                    .replace(/([a-z])([A-Z])/g, "$1-$2")
                    .replace(/[\s_]+/g, '-')
                    .toLowerCase();
            }

            // verifica se tem caracteres especiais em um texto
            verificaCaracteresEspeciais (string) {
                const regex = /[@!#$%^&*()/\\]/;
                return regex.test(string);
            }
        }

        let pessoa1 = new Pessoa();
        pessoa1.setNome = "Teste Pessoa";
        console.log('Nome: ', pessoa1.getUsername);*/
    </script>
</body>
</html>