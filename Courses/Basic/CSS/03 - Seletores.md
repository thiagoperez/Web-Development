# Seletores

1. Selecionando pela TAG.
    
    -É possível selecionar as tags através de seus nomes como header, div, p, etc.

    - Nesse tipo de seleção, é aplicado o mesmo estilo as tags com mesmo nome em seu código HTML.

2. Selecionando TUDO com "*"

    - O * seleciona todas as tags e aplica de uma única vez as instruções por ele enviadas ao HTML.

3. Selecionando pelas Classes com "class"
    
    - A classe seria como um CEP. Ela serve para identificar vários elementos. Ou seja, vários elementos HTML podem usar a mesma classe, e conseguimos estilizalos no CSS.

    - É possível aplicar as classe em diversos tipos de TAGs.

4. Selecionando com identificador único com "id"

    - O ID seria como seu CPF ou RG. Ele serve para identificar apenas um elemento. Ou seja, você só pode usar um ID específico uma vez na sua página HTML.

----------------> Conteúdo index.hmtl

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles.css">
    <title>CSS</title>
</head>
<body>
    <h1 id="titulo">Título da Página</h1>

    <p class="classe-paragrafo">
        Parágrafo com estilo de uma classe.
    </p>

    <p id="paragrafo">
        Parágrafo com estilo de um id.
    </p>

    <p class="classe-paragrafo">
        Parágrafo com estilo de uma classe.
    </p>
    
    <button class="botao-classe">Botão com estilo de uma classe</button><br>
    <button id="botao">Botão com estido de um id</button> <br>
    <button id="outro-botao">Botão com estido de um id</button> <br>
    <button class="botao-classe">Botão com estilo de uma classe</button>
</body>

</html>

----------------> Conteúdo styles.css

.botao-classe, .classe-paragrafo, #botao, #outro-botao {
    font-size: 50px;
    color: white;
}

.botao-classe {
    background: orange;
}

.classe-paragrafo {
    color: rgb(255, 0, 221);
    font-weight: bold;
}

#titulo {
    color: red;
    font-size: 55px;
}

#paragrafo {
    color: blue;
    font-size: 20px;
    font-weight: bold;
}

#botao {
    background: brown;
}

#outro-botao {
    background: blue;
}

/*
* {
    background: red;
}


h1{
    color: red;
    background: black;
}

p {
    color: blue;
    font-size: 20px;
}

button {
    background: rgb(219, 216, 18);
    border-color: yellow;
}
*/