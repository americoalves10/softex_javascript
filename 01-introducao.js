<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Introdução</title>
</head>
<body>
    <script>
        class Pedido {
            constructor(data, itens, valor) {
                this.data = data;
                this.itens = itens;
                this.valor = valor;
            }
        }

        let itens = ['item 1', 'item 2', 'item 3'];
        let pedido = new Pedido(new Date, itens, 100);
        console.log(pedido);

        console.log('Valor: ', pedido.valor);
    </script>
</body>
</html>