# HTML e CSS

1. Criamos o asquivo styles.css que será responsável por conter todas as instruções de personalização da página HTML.

----------------> Conteúdo index.html
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles.css">
    <title>CSS</title>
</head>
<body>
    <h1>Título da Página</h1>

    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, labore? Dolor, sit quasi? Tempora, eum temporibus recusandae vel consectetur rem odit possimus. Voluptate ipsa iusto voluptatum aliquid maxime officia impedit.
    </p>

    <button>Botão</button>
</body>

</html>

----------------> Conteúdo styles.css
h1{
    color: red;
    background: black;
}

p {
    color: blue;
    font-size: 20px;
}

button {
    background: rgb(219, 18, 186);
    border-color: yellow;
}