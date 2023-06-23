# Variáveis em JavaScript**

## Introdução:
==========================
Hoje vou aprender sobre variáveis em JavaScript. As variáveis são elementos fundamentais em qualquer linguagem de programação, e elas nos permitem armazenar e manipular dados durante a execução de um programa. Vou começar entendendo o que são variáveis e como declará-las em JavaScript.

## 1. O que são variáveis?
==========================
Variáveis são espaços de memória reservados para armazenar valores durante a execução de um programa. Elas nos permitem atribuir nomes a esses valores para referenciá-los posteriormente. As variáveis podem conter diferentes tipos de dados, como números, strings, booleanos, objetos, entre outros.

## 2. Declarando variáveis em JavaScript
==========================
Em JavaScript, podemos declarar variáveis usando a palavra-chave `var`, `let` ou `const`. A diferença entre elas está na forma como as variáveis são escopadas e se podem ou não ser reatribuídas posteriormente. Vamos explorar cada uma delas:

- `var`: Era a forma tradicional de declarar variáveis em JavaScript. As variáveis declaradas com `var` têm escopo de função ou escopo global, o que significa que elas são visíveis dentro da função em que foram declaradas ou, se declaradas fora de qualquer função, em todo o código.
  
  Exemplo:
  ```
  var idade = 25;
  ```

- `let`: Introduzido no ECMAScript 6 (ES6), o `let` permite a criação de variáveis com escopo de bloco. Isso significa que a variável declarada com `let` é visível apenas dentro do bloco em que foi declarada, como um loop `for` ou um `if`.

  Exemplo:
  ```
  let nome = "João";
  ```

- `const`: Também introduzido no ES6, o `const` é usado para declarar constantes, ou seja, variáveis cujo valor não pode ser alterado após a sua atribuição inicial. Elas também têm escopo de bloco.

  Exemplo:
  ```
  const PI = 3.14;
  ```

## 3. Atribuição de valores e reatribuição de variáveis
==========================
Após declararmos uma variável, podemos atribuir um valor a ela usando o operador de atribuição `=`. Vejamos alguns exemplos:

```
var nome = "Maria";  // Atribuindo um valor inicial à variável nome
let idade = 30;      // Atribuindo um valor inicial à variável idade
const PI = 3.14;     // Atribuindo um valor inicial à constante PI
```

Podemos também reatribuir valores a variáveis, exceto no caso de variáveis declaradas com `const`. Vamos ver um exemplo:

```
var salario = 1000;   // Atribuindo um valor inicial à variável salario
salario = 1500;      // Reatribuindo um novo valor à variável salario
```

## 4. Convenções de nomenclatura
==========================
Ao nomear variáveis em JavaScript, é importante seguir algumas convenções para garantir um código legível e de fácil compreensão. Vejamos algumas práticas comuns:

- Os nomes das variáveis devem começar com uma letra (maiúscula ou minúscula), `_` (underline) ou `$` (cifrão).
- Evite nomes muito genéricos, como `a`, `x`, `var1`, pois eles não transmitem o propósito ou significado da variável.
- Use nomes significativos e descritivos para suas variáveis, que indiquem claramente o seu propósito.
- Se o nome da variável for composto por várias palavras, utilize a convenção "camelCase", ou seja, comece com letra minúscula e cada palavra adicional começa com letra maiúscula.
  Exemplo: `nomeCompleto`, `quantidadeEstudantes`, `saldoBancario`.

É importante ressaltar que o JavaScript é uma linguagem case-sensitive, ou seja, faz diferenciação entre letras maiúsculas e minúsculas. Portanto, as variáveis `nome` e `Nome` seriam consideradas diferentes.

## Continuação:
==========================
Agora que aprendi a declarar variáveis e atribuir valores a elas em JavaScript, vou explorar alguns conceitos adicionais:

## 5. Tipos de dados em variáveis
==========================
JavaScript é uma linguagem de tipagem dinâmica, o que significa que não precisamos especificar o tipo de dado que uma variável irá armazenar. O tipo de dado é determinado automaticamente pelo valor atribuído à variável. Alguns dos tipos de dados mais comuns em JavaScript são:

- Números: Podem ser inteiros ou decimais. Exemplo: `let idade = 25;`
- Strings: Sequências de caracteres. Devem ser declaradas entre aspas simples ou duplas. Exemplo: `let nome = "Maria";`
- Booleanos: Representam os valores lógicos verdadeiro (`true`) ou falso (`false`). Exemplo: `let alunoAprovado = true;`
- Arrays: São coleções ordenadas de valores, separados por vírgulas e envolvidos por colchetes `[]`. Exemplo: `let numeros = [1, 2, 3, 4, 5];`
- Objetos: São estruturas de dados complexas que armazenam propriedades e métodos. Exemplo: `let pessoa = { nome: "Maria", idade: 25 };`

## 6. Operações com variáveis
==========================
Além de armazenar dados, as variáveis podem ser usadas em operações matemáticas, concatenação de strings e muito mais. Vamos ver alguns exemplos:

- Operações matemáticas:
  ```
  let a = 10;
  let b = 5;
  let soma = a + b;
  let multiplicacao = a * b;
  ```

- Concatenação de strings:
  ```
  let nome = "Maria";
  let sobrenome = "Silva";
  let nomeCompleto = nome + " " + sobrenome;
  ```

- Acesso a propriedades de objetos:
  ```
  let pessoa = { nome: "Maria", idade: 25 };
  let nomePessoa = pessoa.nome;
  let idadePessoa = pessoa.idade;
  ```

## 7. Boas práticas e considerações adicionais
==========================
Ao trabalhar com variáveis em JavaScript, é importante ter em mente algumas boas práticas:

- Inicialize suas variáveis antes de utilizá-las para evitar erros de referência indefinida.
- Evite o uso excessivo de variáveis globais, pois elas podem causar conflitos e dificultar a manutenção do código.
- Nomeie suas variáveis de forma clara e intuitiva para facilitar a compreensão do código por você e outros desenvolvedores.
- Mantenha a consistência no estilo de nomenclatura adotado ao longo do código para garantir a legibilidade.

Além disso, vale destacar que a partir do ES6, com a introdução do `let` e `const`, é recomendado priorizar o uso dessas palavras-chave em vez do `var`, pois elas proporcionam escopo de bloco mais controlado.

## Conclusão:
==========================
Nesta aula, aprendi sobre variáveis em JavaScript e sua importância na armazenagem e manipulação de dados. Vi como declarar variáveis utilizando `var`, `let` e `const`, além de entender as diferenças entre eles. Explorei os tipos de dados mais comuns, como números, strings, booleanos, arrays e objetos. Também considerei algumas boas práticas no uso de variáveis.

------------> index.html

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Curso JS</title>
</head>
<body>
    
</body>
<script>
    let numeroDeAlunosDaSalaSete = 40
    let frase = "Uma história baseada em fatos reais"

    console.log(frase)

    const texto1 = "textos com 'aspas' duplas"

    const texto2 = 'textos com "aspas" simples'

    const texto3 = `textos 
    com 
    a 
    crase`

    console.log(texto1)
    console.log(texto2)
    console.log(texto3)

    const minhaIdade = 30
    const myString = `Minha idade é ${minhaIdade}, estou ficando velho! E 2 + 3 = ${2+3}`

    console.log(myString)

    const number1 = 32.50 / 2
    const fakeNumber = "32 / 2"

    console.log(number1)
    console.log(fakeNumber)
</script>
</html>