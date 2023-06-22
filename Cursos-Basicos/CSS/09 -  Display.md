# Display

1. BLOCK

    - Vem como padrão: div, section, p, h1, h2, ul, li, article...;

    - Ocupa 100% da largura do elemento pai;

    - Sempre ocupa toda a sua linha;

    - Altura definida de acordo com o conteúdo;

    - Podemos definir height e width;

    - Podemos definir valores de margin.

2. INLINE

    - Vem como padrão a, span, b, i ...;

    - Não permite alterar height e width;

    - Não podemos definir valores de margin top e bottom

    - Ganha comportamento de uma palavra.

3. INLINE-BLOCK

    - Elementos em linha, porém com característica do display Block;

    - Altura e largura podem ser alterados.

----------------> Conteúdo index.hmtl

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles.css">
    <title>Box Sizing</title>
</head>
<body>
    <div class="box">
        Conteúdo da Div 1
    </div>
    <div class="box box-2">
        Conteúdo da Div 2
    </div>
    <div class="box box-3">
        Conteúdo da Div 3
    </div>
</body>

</html>

----------------> Conteúdo styles.css

.box {
    background: #FF1395;
    height: 50px;
    width: 50px;
    display: inline;
}

.box-2 {
    background: #FFFF00;
}

.box-3 {
    background: #0003FF;
}