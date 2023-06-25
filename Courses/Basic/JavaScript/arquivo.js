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