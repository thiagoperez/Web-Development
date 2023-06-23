# Null & Undefined

----------> index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Null & Undefined</title>
</head>
<body>

</body>
    <script>
        const usuario = {
            nome: "Thiago",
            idade: 30,
            nomeDoConjuge: null
        }

        console.log(usuario.nomeDoConjuge)
        usuario.nomeDoConjuge = "Eva"
        console.log(usuario.nomeDoConjuge)
        console.log(usuario.abacate)
    </script>
</html>