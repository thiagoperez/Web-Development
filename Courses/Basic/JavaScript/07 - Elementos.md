# Elementos

1. Document -> HTML

    getElementById -> Trás um elemento pelo ID.

    getElementByClassName -> Trás todos os elementos com essa classe.

    getElementByTagName -> Trás todos os elementos com essa TAG.

    getElementByName -> Trás todos os elementos com esse nome.

    querySelector -> Trás um elemento, o primeiro que encontrar.

    querySelectorAll -> Trás todos os elementos que encontrar.

    document.getElementById

    ----------> index.html

    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>JavaScript</h1>
    <input id="principal-input" placeholder="Digite aqui" name="nomeCompleto">
    <p class="paragrafo-js">Começando nossa Jornada</p>
    <p class="paragrafo-js">A linguagem de Prog...</p>
    <button class="principla-botao paragrafo-js">Clique aqui</button>
</body>
<script src="./arquivo.js"></script>
</html>

--------------> arquivo.js

//Pegando pelo ID
const elemento = document.getElementById("principal-input")

console.log(elemento)

//Pegando pela classe

const elementosClasse = document.getElementsByClassName("paragrafo-js")

console.log(elementosClasse)

//Pegando pela tag

const elementosTag = document.getElementsByTagName("p")

console.log(elementosTag)

//Pegando pelo nome

const elementosName = document.getElementsByName("nomeCompleto")

console.log(elementosName)

//Pega o primeiro encontrado
const elementoQuery = document.querySelector("p")
console.log(elementoQuery)

//Pega todos os elementos familiares

const elementosQueryAll = document.querySelectorAll("p")

console.log(elementosQueryAll)