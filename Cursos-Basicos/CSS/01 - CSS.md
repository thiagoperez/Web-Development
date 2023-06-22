# Introdução ao CSS

1. O professor explicou o funcionamento do CSS.
2. É obrigadotório usar o ";" no fim de cada atribuição.
3. Os comentários no CSS seguem o padrão: /* conteúdo */
4. Mudamos diversos tipos de configurações.
5. Com o inspecionar consigo visualizar e testar os estilos aplicados em minha página.

------------> Código da Aula
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS</title>
</head>
<body>
    <h1>Título da Página</h1>

    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, labore? Dolor, sit quasi? Tempora, eum temporibus recusandae vel consectetur rem odit possimus. Voluptate ipsa iusto voluptatum aliquid maxime officia impedit.
    </p>

    <button>Botão</button>
</body>

<style>

    h1{
        color: red;
        background: black;
    }

    p {
        color: blue;
        font-size: 20px;
    }

    button {
        background: green;
        border-color: yellow;
    }

</style>

</html>