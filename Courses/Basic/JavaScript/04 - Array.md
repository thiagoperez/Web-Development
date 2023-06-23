# Arrays

---------> index.html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Arrays</title>
</head>

<body>

</body>
<script>
    const meuArray = [20, 30, "JavaScript", { nome: "Thiago", idade: 37 }]

    console.log(meuArray[2])

    const usuarios = [
        {
            nome: "Thiago",
            idade: 37
        },

        {
            nome: "Eva",
            idade: 23
        }
    ]

    console.log(usuarios[1].nome)

    const notas = [9.5, 8.7, 10.0, 5.3, 2.1, 0.0]

    console.log(notas[3])

    usuarios[0].nome = "Thiago Perez"

    console.log(usuarios)
</script>

</html>