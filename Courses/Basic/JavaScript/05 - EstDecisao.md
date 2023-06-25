# Estruturas de Decisão em JavaScript

## Introdução:
==========================
    Olá, estudantes! Nesta aula, vamos explorar as estruturas de decisão em JavaScript. As estruturas de decisão são usadas para controlar o fluxo do programa com base em condições específicas. Elas permitem que o código tome diferentes caminhos, executando blocos de código diferentes com base nas condições avaliadas. Vamos começar entendendo os conceitos básicos das estruturas de decisão em JavaScript.

## 1. A declaração `if`
==========================
    A declaração `if` é uma das estruturas de decisão mais básicas em JavaScript. Ela permite executar um bloco de código somente se uma condição especificada for verdadeira. A sintaxe geral do `if` é a seguinte:

    ```javascript
    if (condicao) {
    // Bloco de código a ser executado se a condição for verdadeira
    }
    ```

    Vejamos um exemplo:

    ```javascript
    let idade = 18;

    if (idade >= 18) {
    console.log("Você é maior de idade.");
    }
    ```

    Nesse exemplo, o bloco de código dentro do `if` só será executado se a condição `idade >= 18` for verdadeira.

## 2. A declaração `if...else`
==========================
    A declaração `if...else` permite executar um bloco de código se a condição for verdadeira e outro bloco de código se a condição for falsa. A sintaxe geral do `if...else` é a seguinte:

    ```javascript
    if (condicao) {
    // Bloco de código a ser executado se a condição for verdadeira
    } else {
    // Bloco de código a ser executado se a condição for falsa
    }
    ```

    Vejamos um exemplo:

    ```javascript
    let idade = 16;

    if (idade >= 18) {
    console.log("Você é maior de idade.");
    } else {
    console.log("Você é menor de idade.");
    }
    ```

    Nesse exemplo, se a condição `idade >= 18` for verdadeira, o primeiro bloco de código será executado; caso contrário, o segundo bloco de código será executado.

## 3. A declaração `if...else if...else`
==========================
    A declaração `if...else if...else` permite avaliar múltiplas condições e executar diferentes blocos de código com base nessas condições. Ela é usada quando há mais de duas possibilidades de caminhos diferentes. A sintaxe geral do `if...else if...else` é a seguinte:

```javascript
if (condicao1) {
  // Bloco de código a ser executado se a condição1 for verdadeira
} else if (condicao2) {
  // Bloco de código a ser executado se a condição1 for falsa e a condição2 for verdadeira
} else {
  // Bloco de código a ser executado se todas as condições anteriores forem falsas
}
    ```

    Vejamos um exemplo:

    ```javascript
    let nota = 85;

    if (nota >= 90) {
    console.log("Parabéns! Sua nota é A.");
    } else if (nota >= 80) {
    console.log("Sua nota é B.");
    } else if (nota >= 70) {
    console.log("Sua nota é C.");
    } else if (nota >= 60) {
    console.log("Sua nota é D.");
    } else {
    console.log("Sua nota é F.");
    }
    ```

    Nesse exemplo, temos diferentes condições para classificar as notas com base nos intervalos de pontuação. Se a nota for maior ou igual a 90, será exibida a mensagem "Parabéns! Sua nota é A.". Se a nota estiver entre 80 e 89, será exibida a mensagem "Sua nota é B.". Se a nota estiver entre 70 e 79, será exibida a mensagem "Sua nota é C.". Se a nota estiver entre 60 e 69, será exibida a mensagem "Sua nota é D.". Caso contrário, ou seja, se a nota for inferior a 60, será exibida a mensagem "Sua nota é F.".

## 4. A declaração `switch`
==========================
    A declaração `switch` é outra estrutura de decisão em JavaScript que nos permite executar diferentes blocos de código com base em diferentes valores de uma expressão. A sintaxe geral do `switch` é a seguinte:

    ```javascript
    switch (expressao) {
    case valor1:
        // Bloco de código a ser executado se a expressao for igual a valor1
        break;
    case valor2:
        // Bloco de código a ser executado se a expressao for igual a valor2
        break;
    // ...
    default:
        // Bloco de código a ser executado se a expressao não corresponder a nenhum valor
        break;
    }
    ```

    Vejamos um exemplo:

    ```javascript
    let diaSemana = 2;
    let nomeDia;

    switch (diaSemana) {
    case 1:
        nomeDia = "Domingo";
        break;
    case 2:
        nomeDia = "Segunda-feira";
        break;
    case 3:
        nomeDia = "Terça-feira";
        break;
    // ...
    default:
        nomeDia = "Dia inválido";
        break;
    }

    console.log("Hoje é " + nomeDia);
    ```

    Nesse exemplo, a variável `diaSemana` representa o número do dia da semana (1 para domingo, 2 para segunda-feira, etc.). Com base no valor dessa variável, o `switch` irá atribuir o nome correspondente do dia à variável `nomeDia`. Se o valor de `diaSemana` não corresponder a nenhum dos casos, a declaração `default` será executada e o valor de `nomeDia` será definido como "Dia inválido".

## Conclusão:
==========================
    Nesta aula, exploramos as estruturas de decisão em JavaScript. Aprendemos sobre a declaração `if`, `if...else`, `if...else if...else` e `switch`, que nos permitem controlar o fluxo do programa com base em condições. Agora você tem as ferramentas necessárias para tomar decisões lógicas em seu código e executar ações específicas com base nas condições avaliadas. 