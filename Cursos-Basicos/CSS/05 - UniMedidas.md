# Unidade de Medidas

1. Absolutas
    
    - px (pixels)
    - in (inches/polegadas)
    - cm / mm (centímeto / milímetro)

2. Relativas

    - % (calcula o tamanh relativo ao elemento pai)
    - vw (view width - 1vw é 1% da largura da janela do navegador)
    - vh (view height - 1vh é 1% da altura da janela do navegador)
    - em (é uma unidade relativa ao elemento pai)
    - rem (é uma unidade relativa ao elemento raiz)

----------------> Conteúdo index.hmtl

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles.css">
    <title>Unidades de Medidas</title>
</head>
<body class="avo">
    <div class="pai">
        <div class="filho"></div>
    </div>
</body>

</html>

----------------> Conteúdo styles.css

.avo {
    font-size: 20px;
}

.pai {
    width: 50vw;
    height: 50vh;
    background: blue;
}

.filho {
    width: 50%;
    height: 50%;
    background: red;
}



