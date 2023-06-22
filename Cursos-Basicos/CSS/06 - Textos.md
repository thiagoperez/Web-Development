# Textos

1. Nesta aula aprendemos a adquirir fontes no google fonts.

2. Aprendemos a configurar o estilo dos textos.

----------------> Conteúdo index.hmtl

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles.css">
    <title>Textos</title>
</head>
<body>
    <h1>Textos no CSS</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, repellendus deserunt dignissimos eum quo reprehenderit itaque dolor molestias non magni pariatur esse, alias natus officia recusandae minima cumque, dolorum unde?</p>
</body>

</html>

----------------> Conteúdo styles.css

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400&display=swap');

h1 {
    color: red;
    font-size: 64px;
    font-weight: lighter;
    font-family: "Roboto", sans-serif;
    font-style: italic;
    text-shadow: 100px -50px 5px #07363a;
}

p {
    color: blue;
    font-size: 30px;
    font-weight: 100px;
    font-family: 'Roboto', sans-serif;
    line-height: 120px; /*Espaçamento entre as linhas*/
    letter-spacing: 10px; /*Espaçamento entre as letras*/
    word-spacing: 20px; /*Espeçamento entre as palavras*/
    text-align: center; /*Alinhamento do texto*/
    text-transform: uppercase; /*Coloca o texto maiúsculo ou minúsculo*/
    text-decoration: underline; /*Aplica tipos de decoração de texto*/
}