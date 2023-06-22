# Pseudo Classes

:active -> quando o elemeneto está ativo, ou seja, está sendo pressionado.
:visited -> seleciona o link que foi visitado.
:hover -> quando o mouse passa em cima do elemento.
:checked -> usado em radio / checkbox / select.
:disabled -> elemento desabilitado / button / input.
:enabled -> elemento está habilitado.
:focus -> é aplicada quando um elemento recebe foco, o que pode ocorrer quando o usuário seleciona o elemento.
:read-only -> seleciona input ou textarea que são apenas leitura.
:empty -> elemento que não tem filho.
:first-child -> primeiro filho / ex: primeira li de uma ul / primeiro span de uma div.
:first-of-type -> primeiro elemento de seu tipo entre os filhos de seu elemento pai.
:last-child -> últiomo filho.
:last-of-type -> último elemento de seu tipo entre os filhos de seu elemento pai.
:not() -> estiliza os elementos, exceto o que está dentro do ().
:nth-child() -> seleciona o elemento baseado na sua posição. Ex: :nth-child(3).
:nth-last-child() -> seleciona o elemento baseado na sua posição, contando de trás para frente.

----------------> Conteúdo index.hmtl

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <title>Pseudo Classes</title>
</head>
<body>

    <ul>
        <li>Primeiro</li>
        <li>Segundo</li>
        <li>Terceiro</li>
        <li>Quarto</li>
        <li>Quinto</li>
        <li>Sexto</li>
        <li>Sétimo</li>
    </ul>

    <!--
        <div class="container">
        <span>Span 1</span>
        <span id="excluido">Span 2</span>
        <span>Span 3</span>
        <p>Parágrafo 1</p>
        <p>Parágrafo 2</p>
    </div>
    <div class="container"></div>
    <input value="Input de Demonstração" readonly>
    <input type="checkbox" disabled>
    <a href="#">Link de Referência</a>
    -->
</body>
</html>

----------------> Conteúdo styles.css

* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    font-size: 30px;
    margin: 10px;
}

li:nth-last-child(4){
    color: goldenrod;
}

li:nth-child(2){
    color: red;
}

/*
.container :not(#excluido){
    color: green;
}

.container :not(p){
    color: red;
}

li:last-child{
    color: red;
}

span:first-of-type {
    color: cyan;
}

p:last-of-type {
    color: cyan;
}

li:first-child {
    color: red;
}

.container{
    height: 500px;
    width: 500px;
    background: red;
}

.container:empty {
    background: blue;
}

input:read-only {
    border: 2px solid green;
}

input:focus {
    border: 1px solid red;
    outline: none;
}

input:disabled {
    width: 100px;
    height: 100px;
}

input:checked {
    width: 100px;
    height: 100px;
}

a:hover {
    color: greenyellow;
}

a:visited {
    color: brown;
}

a:active {
    color: red;
}
*/
