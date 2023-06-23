# Objetos em JavaScript

------------> index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
<script>
    const nome = "Thiago Perez"
    const idade = 30
    const address = "Rua Sobe e Desce, numero cinco"

    const thiagoPerez = {
        nome: "Thiago Perez",
        idade: 30,
        endereco: {
            rua: "Sobe e Desce",
            numero: 5,
            cidade: "São Paulo",
            estado: "SP",
            pais: "Brasil"
        }
    }

    console.log(thiagoPerez)
    console.log(thiagoPerez.nome)
    console.log(thiagoPerez.endereco.pais)
    console.log(thiagoPerez.idade)

    thiagoPerez.endereco.pais = "Japão"

    console.log(thiagoPerez.endereco)
</script>
</html>